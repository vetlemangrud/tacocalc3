import { io } from "socket.io-client";
import { roomStore } from "../stores/roomStore";
import { checkedState, personCount } from "../stores/inputStatesStore";

const socket = io("http://localhost:3000");

let count = 0;
let checked = {};
let currentRoom = "";

roomStore.subscribe((value) => {
  currentRoom = value;
});

personCount.subscribe((value) => {
  count = value;
  socket.emit("changePersonCount", count);
});

checkedState.subscribe((value) => {
  for (const key in checked) {
    if (checked[key] != value[key]) {
      socket.emit("changeCheckedState", key, value[key], currentRoom);
    }
  }
  checked = { ...value };
});

socket.on("changeCheckedValue", (key, value) => {
  checkedState.update((checked) => {
    checked[key] = value;
    return checked;
  });
});

export const createRoom = () => {
  socket.emit("createRoom", count, checked, (roomName) => {
    roomStore.set(roomName);
  });
};

export const joinRoom = (roomName: string) => {
  socket.emit("joinRoom", roomName, (roomData) => {
    if (roomData) {
      roomStore.set(roomName);
      personCount.set(roomData.count);
      checkedState.set(roomData.checked);
    }
  });
};

socket.on("disconnect", () => {
  roomStore.set("");
});
