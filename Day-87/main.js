import express from "express";
import mongoose from "mongoose";
import { Employee } from "./model/employee.js"

mongoose.connect("mongodb://localhost:27017/company");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

let random = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1))
    return arr[rno];
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    let rname = ["Gourish", "Ritik", "Ashish"]
    let rlang = ["python", "C++", "Javascript"]
    let rcity = ["Noida", "Banglore", "Gurugram"]

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: random(rname),
            salary: Math.floor(Math.random() * 22000),
            language: random(rlang),
            city: random(rcity),
            isManager: Math.random() > 0.5 ? true : false
        })
    }
    res.render('index', { foo: 'FOO' });
})

app.get('/clear', async (req, res) => {
    // clear collection before generating
    await Employee.deleteMany({});
    res.render('index', { foo: 'FOO' });
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})   
