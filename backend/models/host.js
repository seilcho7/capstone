const db = require('./conn');

class Host {

    constructor(roomId) {
        this.id = id;
        this.roomId = roomId;
    }

    // initialize host
    static createHost(genRoomKey) {
        return db.none(`
            INSERT INTO host 
                (roomId) 
            VALUES ($1)
            `, [genRoomKey])
            .then((data) => {
                return data;
            });
    }

}

module.exports = Host;

//  function to generate roomkey 
function generateRoomKey() {
    let random = Math.floor((Math.random() * 500) + 1000)
    let genRoomKey = random.toString();
    return genRoomKey
}