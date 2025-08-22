import io from "socket.io-client";

socket = io("https://coffeev4.onrender.com");

socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
});