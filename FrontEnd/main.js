// import { io } from "socket.io-client";

const socket = io("https://coffeev4.onrender.com");
const coffee_toggle = document.getElementById("machine-toggle");
let bOn = false;

coffee_toggle.addEventListener("change", () => {
    bOn = coffee_toggle.checked;
    if (socket.connected) {
        socket.emit("set-bon-status", bOn);
    }
});

socket.on("connect", () => {
    console.log("Connected to server:", socket.id);

    socket.on("bOn-status", (newbOn) => {
        bOn = newbOn;
        coffee_toggle.checked = bOn;

    });  
});