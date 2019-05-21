const db = require('./conn');

class User {

    constructor(id, points, name) {
        this.id = id;
        this.points = points;
        this.name = name;
    }

    // get all data from all users
    static getAll() {
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

    static getAllDrawings() {
        return db.any(`select * from drawing`);
    }
}

module.exports = User;