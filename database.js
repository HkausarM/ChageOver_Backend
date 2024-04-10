const { MongoClient } = require('mongodb');
require('dotenv').config()
const uri = process.env.DB_STRING;

const client = new MongoClient(uri);

let dbConnection = client.connect();
console.log("Connected to MongoDB Atlas");
let database = client.db('ChangeOver_DB');
module.exports = { database }