const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://hennakausarformal:<pwd>@cluster0.inydhlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

let dbConnection = client.connect();
console.log("Connected to MongoDB Atlas");
let database = client.db('ChangeOver_DB');
module.exports = { database }