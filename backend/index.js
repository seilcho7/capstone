require('dotenv').config();
const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');
const User = require('./models/user');
const Drawing = require('./models/drawing');
const Host = require('./models/host');
const path = require('path');

const server = http.createServer(app);      // create a plain http server that uses the express app
const wss = new WebSocket.Server({
    path: '/ws',
    server // piggyback the websocket server onto our http server
}); 

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '..', 'build')));

const PORT = process.env.PORT;
let newUsers = [];
let roomPin = '';
let userAnswers = [];
let pointsArray = [];
let showHostButton = true;
let showJoinButton = false;
let selectedUser = '';
let users = [];

wss.on('connection', function connection(socket) {
    console.log('new connection');
    socket.send(JSON.stringify({
        roomPin,
        showHostButton,
        showJoinButton
    }))
    // on new connection if db .length is greater than one needs to send a stringified version of db[db.length-1]
    socket.on('message', async (data) => {   
        const {drawData, name, gamePin, roomId, start, saveRoomId, answer, selectedAnswer, timerOn, showHost, kickUsers, showJoin, changeClass, toggleAnswers, endGame, resetGame, resetUserAnswer} = JSON.parse(data);
        let {nextPlayer} =JSON.parse(data)

        // Adds new user to the databass
        const newUser = await Object.keys(JSON.parse(data));
        if(newUser[0]==='name' && newUser[1]==='gamePin') {
            const confirmedNewUser= await User.add(gamePin, name);
            console.log(confirmedNewUser);
        }
        // Adds all users inside users array
        if (name) {
            if (!users.includes(name)) {
                users.push(name);
            } else if (resetGame) {
                users = [];
            }   
        }
        // Pushes answer to array and removes answers if everyone has submitted 
        if(answer && name) {
            await User.updateAnswer(name, answer)
            userAnswers.push(answer) 

            if (userAnswers.length > newUsers.length-1) {
                userAnswers.splice(0,newUsers.length-1) 
            } 
        } else if (endGame || resetUserAnswer) {
            userAnswers = [];
        }
        // if nextPlayer reaches last player, nextPlayer is p.0 
        //  This also now is used for determining who receives a point based 
        //  on room number as well as what the activePlayer selected 

        if(nextPlayer && selectedAnswer && timerOn === false ) {
            const awardPoint= await User.givePoint(roomPin, selectedAnswer)
            const userData = await User.getUserByRoomId(roomPin);
            oldPoints = []
            userData.forEach((user)=>{
                oldPoints.push(user.points)
            })
            // Looks through and updates Pointsarray based on sql query
            for(let i=0; i< userData.length; i++) {
                pointsArray[i] = oldPoints[i]
                if (userData[i].answer == selectedAnswer){
                    selectedUser = i
                }
                console.log(selectedUser);
            }
            
            if(nextPlayer >= newUsers.length) {
                console.log('IF STATEMENT TRIGGEERED')
                nextPlayer = 0
            }
        }
        // When host click host button, save roomId inside database
        if (roomId) {
            await Host.createHost(roomId);
            roomPin = roomId;
        }
        
        if (showJoin && !showHost) {
            showJoinButton = true;
            showHostButton = false;
        } else if (!showJoin && showHost) {
            showJoinButton = false;
            showHostButton = true;
        }

        if (saveRoomId) {
            await Host.removeHost(saveRoomId);
            await User.removeUsers();
        }

        if (start) {
            const userData = await User.getUserByRoomId(roomId);
            userData.map((user) => {
                if (!users.includes(user)) {
                    newUsers.push(user.name);
                    pointsArray.push(user.points);
                }
            });
        } 
        
        if (kickUsers) {
            await Drawing.removeDrawing();
            await User.removeUsers();
            newUsers = [];
            pointsArray = [];
            users = [];
        }

        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    roomPin,
                    users,
                    drawData,
                    start,
                    newUsers,
                    userAnswers,
                    nextPlayer,
                    pointsArray,
                    timerOn,
                    showHostButton,
                    kickUsers,
                    showJoinButton,
                    selectedUser,
                    changeClass,
                    endGame,
                    resetGame,
                    toggleAnswers,
                    selectedAnswer
                }))
            }
        });    
    });
});


server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});