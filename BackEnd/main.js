const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors({
  origin: "https://coffe-ev4-qnm8a446f-grindelwaldts-projects.vercel.app", // your frontend domain
  methods: ["GET", "POST"],
  credentials: true
}));
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    // origin: "https://group-6-vac-work.vercel.app", // Next.js runs on 3000 by default
    origin: "https://coffe-ev4-qnm8a446f-grindelwaldts-projects.vercel.app", // Next.js runs on 3000 by default
    methods: ["GET", "POST"],
    // credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log("Socket.IO server listening on port 4000");
});
