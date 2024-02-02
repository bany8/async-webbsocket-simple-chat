function scrollDown(){
  const scrollButton = document.getElementById("button");
  
  scrollButton.addEventListener("click", () => {
  const scrollContainer = document.getElementById("chat");
scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
});

}

function sendMessage(websocket) {
  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const event = {
      "type": "chat",
      "name": name,
      "message": message,
    };
    websocket.send(JSON.stringify(event));
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
  const websocket = new WebSocket("ws://localhost:7777/");
  sendMessage(websocket);
  receiveMessage(websocket);
});