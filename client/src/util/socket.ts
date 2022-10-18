import { io } from "socket.io-client";
import { checkedState, personCount } from "../stores/inputStatesStore";

const socket = io("http://localhost:3000");
socket.on("hello", (data) => {
  console.log(data);
});
socket.emit("createRoom", 1);

let count = 0;
let checked = {};

personCount.subscribe((value) => {
  count = value;
});

checkedState.subscribe((value) => {
  checked = value;
});

export const createRoom = () => {
  socket.emit("createRoom", count, checked, (roomName) => {
    console.log(roomName);
  });
};
