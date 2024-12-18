const { WebSocketServer, WebSocket } = require('ws');
const { ChatServer } = require('./server/ChatServer');

const wss = new WebSocketServer({ port: 8080 });
const chatServer = new ChatServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    console.log('new connection');

    ws.on('message', function message(data) {
        console.log('received msg from client: %s', data);

        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });

    ws.on('error', console.error);
});
chatServer.init();