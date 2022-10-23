import { io } from "socket.io-client";
import { roomStore } from "../stores/roomStore";
import { checkedState, personCount } from "../stores/inputStatesStore";

const socket = io(import.meta.env.VITE_SERVER_URL || "http://localhost:3000");

let count = 0;
let checked = {};
let currentRoom = "";

roomStore.subscribe((value) => {
  currentRoom = value;
});

personCount.subscribe((value) => {
  if (value !== count && currentRoom) {
    socket.emit("changePersonCount", value, currentRoom);
  }
  count = value;
});

checkedState.subscribe((value) => {
  for (const key in checked) {
    if (checked[key] != value[key] && currentRoom) {
      socket.emit("changeCheckedState", key, value[key], currentRoom);
    }
  }
  checked = { ...value };
});

socket.on("changePersonCount", (value) => {
  console.log("changePersonCount", value);
  count = value;
  personCount.set(value);
});

socket.on("changeCheckedState", (key, value) => {
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
