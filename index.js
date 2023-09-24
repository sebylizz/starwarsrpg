const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const pool = [{id: 0, color: "white"}]; // This will store the shared pool of objects.

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
    ws.send(JSON.stringify(pool));

 
    ws.on('message', (message) => {
        switch (message.toString()){
            case "remove":
                pool.pop();
                break;
            case "add":
                pool.push({id: pool.length, color: "white"});
                break;
            default:
                let point = pool[message.toString()];
                if (point.color == "black"){
                    point.color = "white";
                }
                else{
                    point.color = "black";
                }
        }

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(pool));
            }
        });
    })
});

const PORT = 6969;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
