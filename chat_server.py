#!/usr/bin/env python
import asyncio
import websockets
from datetime import datetime
import json

async def brodcast_message(websocket, name, message_text, message_time):
    event = {
        "type": "chat_response",
        "time": message_time,
        "name": name,
        "message_text": message_text,
    }
    websockets.broadcast(websocket, json.dumps(event))

async def handler(websocket):
    async for message in websocket:
        print(message)                                      #debigging
        message_time = datetime.now().strftime("%H:%M:%S")
        event = json.loads(message)
        assert event["type"] == "chat"
        name = event["name"]
        message_text = event["message_text"]
        brodcast_message(websocket, name, message_text, message_time)



async def main():
    async with websockets.serve(handler, "", 8001):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main())