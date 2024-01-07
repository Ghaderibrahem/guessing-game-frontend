import { io } from "socket.io-client";

const socket = io(`${process.env.NEXT_SOCKETIO_URL}`, {
  reconnectionDelay: 1000,
  reconnection: true,
  transports: ["websocket"],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false,
});

export const handleSendEvent = () => {
  socket.emit("events", { name: "Nest" });
};

const connect = () => {
  socket.on("registeredWithID", (registeredUser: any) => {
    console.log(registeredUser, "registeredWithID");
  });
  socket.on("receivedMessage", (receivedMessage: any) => {
    console.log(receivedMessage, "receivedMessage");
  });
};

export { socket, connect };
