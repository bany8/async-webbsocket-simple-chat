function scrollDown(){
  const scrollContainer = document.getElementById("chat");
  scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
}

function send(websocket, inputElement) {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const event = {
    "type": "chat",
    "name": name,
    "message": message,
  };
  websocket.send(JSON.stringify(event));
  
  inputElement.value = "";
  
}

function sendMessage(websocket) {
  const button = document.getElementById("button");
  const inputElement = document.getElementById("message");

  inputElement.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      send(websocket, inputElement);
    }
  });
  
  button.addEventListener("click", () => {
    send(websocket, inputElement);
  });
}

function receiveMessage(websocket) {
  websocket.addEventListener("message", ({ data }) => {
    const event = JSON.parse(data);

    const chatElement = document.getElementById("chat");
    const pElement = document.createElement("p");
    const spanElement = document.createElement("span");
    
    spanElement.textContent = event.time + " " + event.name + ": ";
    pElement.textContent = event.message_text;
    
    pElement.insertBefore(spanElement, pElement.firstChild);
    chatElement.append(pElement);

    scrollDown();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const websocket = new WebSocket("ws://192.168.0.100:7777/");

  window.addEventListener("beforeunload", () => {
    websocket.close();
  });
  
  sendMessage(websocket);
  receiveMessage(websocket);
});