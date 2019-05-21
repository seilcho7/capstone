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

    // gets a user by their id
    static getUserById(id) {
        return db.any(`select * from users where id=${id}`)
            // .then((userData) => {
            //     const userInstance = new User(
            //         userData.id,
            //         userData.room_id, 
            //         userData.name,
            //         userData.points,
            //         userData.answer
            //     );
            // return userInstance;
            // })
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
        .then((data) => {
            return data;
        })
    }

    // Gets all answers by room_id
    static getAllAnswers(roomId) {
        return db.any(`select answer from users where room_id='${roomId}'`)
    }

}

module.exports = User;