const express = require('express')
const app = express()
const mongo = require("mongodb");
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const MongoClient = mongo.MongoClient;
const uri = 'mongodb+srv://jeremypeck:hzU3LCTlbmtNten8@wwtgraphite-pb78m.mongodb.net/Graphite?retryWrites=true&w=majority';
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
    //console.log(db);
    client = db;
})
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

//app.get('/assignments', (req, res) => {
//    res.send([
//        'item 1'
//    ])
//})

app.get('/assignments', (req, res) => {
    const collection = client.db('Graphite').collection('assignments');
    collection.find().toArray(function (err, results) {
        if (err) {
            console.log(err);
            res.send([]);
            return;
         }
 
         res.send(results);
     })
 })

 app.get('/classes', (req, res) => {
    const collection = client.db('Graphite').collection('classes');
    collection.find().toArray(function (err, results) {
        if (err) {
            console.log(err);
            res.send([]);
            return;
         }
 
         res.send(results);
     })
 })

app.listen(process.env.PORT || 8080)