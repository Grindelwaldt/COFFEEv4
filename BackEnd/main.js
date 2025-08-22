const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const PORT = 3000;

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    console.log('WebSocket client connected');

    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send(`Echo from server: ${message}`);
    });

    ws.on('close', () => {
        console.log('WebSocket client disconnected');
    });

    ws.send('Welcome WebSocket client!');
});

server.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else 
        console.log("Error occurred, server can't start", error);
    }
);

