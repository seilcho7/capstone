require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');
const User = require('./models/user');
const Drawing = require('./models/drawing');


const server = http.createServer(app);      // create a plain http server that uses the express app
const wss = new WebSocket.Server({
    path: '/ws',
    server // piggyback the websocket server onto our http server
}); 

app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT;

// This is my "database"
const db = [];

wss.on('connection', function connection(socket) {
    console.log('new connection');
    // socket.send(JSON.stringify(getData()));
    // getData();
    // on new connection if db .length is greater than one needs to send a stringified version of db[db.length-1]
    // socket.send(JSON.stringify(db));
    socket.on('message', async (data) => {
        const {message, name, gamePinm roomId} = JSON.parse(data);
        console.log(data);
        const ashishData = await Object.keys(JSON.parse(data))
        if(ashishData[0]==='name' && ashishData[1]==='gamePin') {
            const testVar= await User.add(gamePin,name)
            console.log(testVar)
        }
        // console.log('received: %s', message);
        // console.log('received: %s', name)
        // console.log('received: %s', gamePin)
        // console.log('received: %s', message);
        db.push(message);
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN && db.length > 0) {
                client.send(JSON.stringify(db[db.length-1]));
            }
        });    
    });
});

// const User = require('./models/user');
// const Drawing = require('./models/drawing');
// async function getData() {
//     const testVar = await User.updateAnswer(2,'heehee');
//     console.log(testVar);
// }

server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});