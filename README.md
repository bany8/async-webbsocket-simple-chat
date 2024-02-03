# Asyncy Socket Simple Web Chat

## What is it?


This is a multi-user live chat application designed for browsers. It maintains user data on the client side, resetting every time the site is refreshed. It is built with a Python WebSocket server and an HTML, CSS, and JavaScript client site. It is deployed using an Nginx web server for the website and a Python asynchronous server.


## How to run it?

### You cant deploy web-server and chat-server with docker

- Open the terminal in the folder containing the `docker-compose.yml` file.

```bash
docker-compose up -d
```

### You cant deploy web-server and chat-server separately.
##### WebSocket Server
- for websocket server open terminal in `server` folder
```bash
python3 chat-server.py
```
##### Web Server
- for web server you can use vscode liveserver