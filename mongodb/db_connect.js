const { MongoClient } = require("mongodb");

const url = 'mongodb+srv://sangamrobo:TlBr0plrcCgiWCih@cluster0.zikxtpe.mongodb.net';
const mydb = "e-comm"

const client = new MongoClient(url);

async function dbConnection() {
    var connectedClient = await client.connect();
    var db = connectedClient.db(mydb);
    return db.collection("products");
}

module.exports = dbConnection;