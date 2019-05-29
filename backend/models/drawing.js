const db = require ('./conn');


class Drawing {

    constructor(id, roomid, userid, drawingData) {
        this.id = id;
        this.roomId = roomid;
        this.userId = userid;
        this.drawingData= drawingData;
    }
    // static updateRoomId (roomkey) {
    //     return db.one(`
    //     UPDATE drawing
    //     SET room_id = ($1)
    //     `, [roomkey])
    // }
    static updateUserId (newuserid) {
        return db.any(`
        UPDATE drawing
        SET user_id = ($1)
        `, [newuserid])
    }
    static updateDrawing (userid, drawingData) {
        return db.any(`
        UPDATE drawing 
        SET drawing_data = ($1)
        WHERE user_id= ($2)   
        `,[drawingData, userid] )
    }
    // Remove all drawings
    static removeDrawing() {
        return db.none(`
            DELETE FROM drawing;
        `)
    }
}

module.exports= Drawing; 