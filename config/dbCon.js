const mongoClient = require('mongoose');

let dbc;
const mongoDBUrl = "mongodb+srv://sushil:4thpointer@cluster0-2avdp.mongodb.net/tt?retryWrites=true&w=majority";

exports.dbCon = async() => {
    try {
        if (dbc) {
            console.log("Connection already established");
        } else {
            console.log('Connection establishing')
            const db = await mongoClient.connect(mongoDBUrl, { useNewUrlParser: true });
            dbc = true;
            console.log("Connection established");
            return db;
        }
    } catch (error) {
        throw (["Something happen wrong", "MC500", false])
    }
}