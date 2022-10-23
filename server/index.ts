import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.2.0/mod.ts";

const io = new Server({
  cors: { origin: "*" },
});

const roomData = {};

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on(
    "createRoom",
    (count, checked, callback: (name: string) => void) => {
      let roomName;
      do {
        roomName = Math.random().toString(36).substring(2, 7).toUpperCase();
      } while (roomData[roomName]);
      socket.join(roomName);
      callback(roomName);
      roomData[roomName] = { count, checked };
    }
  );

  socket.on("joinRoom", (roomName, callback: (data: any) => void) => {
    if (roomData[roomName]) {
      socket.join(roomName);
      callback(roomData[roomName]);
    } else {
      callback(null);
    }
  });

  socket.on("changeCheckedState", (key, value, room) => {
    roomData[room].checked[key] = value;
    socket.in(room).emit("changeCheckedState", key, value);
  });

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

await serve(io.handler(), {
  port: 3000,
});
