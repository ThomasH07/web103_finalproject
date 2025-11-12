import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New player connected");

  ws.on("message", (message) => {
    const msg = JSON.parse(message.toString());
    console.log("Received message:", msg);
    // broadcast back or handle logic here
  });

  ws.on("close", () => console.log("Player disconnected"));
});

console.log("WebSocket server running on ws://localhost:8080");
