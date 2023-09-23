const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({ server:server });
const readFile = require('fs').promises;

var points = [{id: 0, color: "black"},{id: 1, color: "white"}, {id: 2, color: "black"}];

app.use(express.static("public"));

wss.on('connection', function connection(ws) {
    console.log('new client connected');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something');
});

app.get('/', async (req, res) => {
    res.send( await readFile('./home.html', 'utf8') );
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))