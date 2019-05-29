const db = require('./conn');

class User {

    constructor(id, roomId, name, points, answer) {
        this.id = id;
        this.roomId = roomId;
        this.name = name;
        this.points = points;
        this.answer = answer;
    }

    // get all data from all users
    static getAllUsers() {
        return db.any(`select * from users`)
            .then((arrayOfUsers) => {
                return arrayOfUsers.map((userData) => {
                    const userInstance = new User(
                        userData.id, 
                        userData.points, 
                        userData.name
                    );
                    return userInstance;
                })
            })
    }

    // gets a user by their Room ID
    static getUserByRoomId(roomId) {
        return db.any(`select * from users where room_id='${roomId}' ORDER BY id ASC`)
            .then((arrayOfUsers) => {
                return arrayOfUsers.map((userData) => {
                    const userInstance = new User(
                        userData.id, 
                        roomId,
                        userData.name,
                        userData.points, 
                        userData.answer
                    );
                    return userInstance;
                })
            })
    }

    // Adds new user to the databass
    static add(roomId, name) {
        return db.one(`
        insert into users
            (room_id, name, points, answer)
        values
            ($1, $2, $3, $4)
        returning id, room_id, name, points, answer
        `,[roomId, name, 0, ''])
    }

    // Gets all answers by room_id
    static getAllAnswers(roomId) {
        return db.any(`select answer from users where room_id='${roomId}'`)
    }

    // Increment point based on answer and roomId
    static givePoint(room_id, answer){
        return db.any(`
            UPDATE users
            SET points = points + 1
            WHERE room_id='${room_id}' AND answer='${answer}'
        `)
    }

    // Update user's answer
    static updateAnswer(name, newAnswer) {
        return db.any(`
            UPDATE users
            SET answer = '${newAnswer}'
            WHERE name='${name}'
        `)
    }

    // Rmove a user based on Room ID and ID
    static removeAUser(roomId, id) {
        return db.none(`
            DELETE FROM users
            WHERE room_id='${roomId}' and id='${id}';
        `)
    }

    // Remove all users
    static removeUsers() {
        return db.none(`
            DELETE FROM users;
        `)
    }

    static resetAnswers(roomId) {
        return db.none(`
            UPDATE users 
            SET answer='' 
            WHERE room_id='${roomId}'
            `)
    }

}

module.exports = User;