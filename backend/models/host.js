const db = require('./conn');

class Host {

    constructor(roomId) {
        this.id = id;
        this.roomId = roomId;
    }

    // initialize host
    static createHost(genRoomKey) {
        return db.one(`INSERT INTO host (roomId) 
                       VALUES ($1)`, [genRoomKey]);
    }

}

module.exports = Host;

//  function to generate roomkey 
function generateRoomKey() {
    let random = Math.floor((Math.random() * 500) + 1000)
    let genRoomKey = random.toString();
    return genRoomKey
}