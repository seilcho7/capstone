const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');

const server = http.createServer(app);      // create a plain http server that uses the express app
const wss = new WebSocket.Server({
    path: '/ws',
    server // piggyback the websocket server onto our http server
}); 

app.use(express.urlencoded({extended: true}));

// This is my "database"
const db = [];

wss.on('connection', function connection(socket) {
    console.log('new connection');
    // on new connection if db .length is greater than one needs to send a stringified version of db[db.length-1]
    socket.send(JSON.stringify(db));
    socket.on('message', (data) => {
        const {message} = JSON.parse(data);
        console.log('received: %s', message);
        db.push(message);
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN && db.length > 0) {
                client.send(JSON.stringify(db[db.length-1]));
            }
        });    
    });
});

// // When GET request comes in,
// // send back all the messages.
// app.get('/api', (req, res) => {
//     res.json(db);
// });

// // When POST request comes in,
// // add message to array of messages.
// app.post('/api', (req, res) => {
//     // what do we do here?
//     console.log(req.body);
//     console.log(req.body.message);
//     db.push(req.body.message);
//     res.json({
//         'message': req.body.message
//     })
// });

// app.listen(31337, () => {
server.listen(31337, () => {
    console.log(`You're cooking with gasoline!`);
});