import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
import { Server } from "https://deno.land/x/socket_io@0.1.1/mod.ts";

const io = new Server({
  cors: { origin: "*" },
});

const roomData = {};

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on(
    "createRoom",
    (count, checked, callback: (name: string) => void) => {
      const roomName = Math.random().toString(36).substring(2, 7);
      callback(roomName);
    }
  );

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

await serve(io.handler(), {
  port: 3000,
});
