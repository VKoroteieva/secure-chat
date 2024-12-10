const WebSocket = require('ws');
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
    socket.send('Hello, server!');
};

socket.onmessage = (event) => {
    console.log('Message from server:', event.data);
};


const socket = new WebSocket('ws://localhost:8080');
const sessionId = 'unique-session-id';
const username = 'JohnDoe';

socket.onopen = () => {
    socket.send(JSON.stringify({ sessionId, username }));
};
