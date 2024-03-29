#!/usr/bin/env python
import asyncio
import websockets
from datetime import datetime
import json

connections = set()

def brodcast_message(name, message_text, message_time):
    event = {
        "type": "chat_response",
        "time": message_time,
        "name": name,
        "message_text": message_text,
    }
    websockets.broadcast(connections, json.dumps(event))
    print("Broadcasting")

async def handler(websocket):
    connections.add(websocket)

    try:
        async for incomming_message in websocket:
            event = json.loads(incomming_message)

            name = event["name"] if event["name"] != "" else "Unnamed###"

            message = event["message"]
            time = datetime.now().strftime("%H:%M:%S")
            print("Received:")
            print(f'{name} {time}: {message}')
            brodcast_message(name, message, time)
    finally:
        connections.discard(websocket)
    

async def main():
    async with websockets.serve(handler, "", 7777):
        await asyncio.Future()


if __name__ == "__main__":
    asyncio.run(main())