# Async Socket Simple Web Chat

## What is it?


This is a multi-user live chat application designed for browsers. It maintains user data on the client side, resetting every time the site is refreshed. The application is built with a Python WebSocket server and an HTML, CSS, and JavaScript client site. It is deployed using an Nginx web server for the website and a Python asynchronous server. Both servers are runningruns locally on you machine and in this form can be your local network chat. 

## How to run it?

### You can deploy web-server and chat-server with docker

- Open the terminal in the folder containing the `docker-compose.yml` file and print:

```bash
docker-compose up -d
```
- Next you can open mulltiple browsers and cards, go to `localhost:8888` and chat between each otcher.
- You can use `your_machine_local_ip:8888` (in this projects case `192.168.0.100:8888`) if you want it to work in your local network.

### You can deploy web-server and chat-server separately.
##### WebSocket Server
- for websocket server open terminal in `server` folder and print:
```bash
python3 chat-server.py
```
##### WebServer
- for webserver you can use vscode liveserver extension