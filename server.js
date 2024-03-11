const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://hennakausarformal:Henna%40atlas09@cluster0.inydhlk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const database = client.db('<database-name>'); 
        const collection = database.collection('<collection-name>'); 
        const cursor = collection.find({});
        await cursor.forEach(console.log);

    } catch (error) {
        console.error("Error connecting to MongoDB Atlas", error);
    } finally {
        await client.close();
    }
}

connectToDatabase().catch(console.error);
