import express from "express"
import { MongoClient } from "mongodb";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const url = "mongodb://localhost:27017"

const client = new MongoClient(url);
client.connect();

app.get('/', (req, res) => {
    res.send('Hello World hai!')
})

app.post('/', async (req, res) => {
    const body = await req.body;

    const database = client.db('createformreact')
    const collection = database.collection('users');

    const findresult = await collection.insertOne(body)
    res.send({
        success: true, error: false, result: findresult, message: "Submitted Successfully"
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
