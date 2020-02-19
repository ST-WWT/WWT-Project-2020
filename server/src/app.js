const express = require('express')
const app = express()
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const uri = "mongodb+srv://jeremypeck:8KKRYo61wP5dIDEu@wwtgraphite-pb78m.mongodb.net/graphite?retryWrites=true&w=majority";
console.log(uri)

let client;
let mongoClient = new MongoClient(uri, {
    // reconnectTries: Number MAX VALUE,
    //autoReconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoClient.connect((err, db) => {
    if (err !== null) {
        console.log(err);
        return;
    }
    console.log(db);
    client = db;
})



app.get('/assignments', (req, res) => {
    const collection = client.db('Graphite').collection('assignments');
    collection.find().toArray(function (err, results) {
        if (err) {
            console.log(err)
            res.send([])
            return
        }

        res.send(results)
    })
})