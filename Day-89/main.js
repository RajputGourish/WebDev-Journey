const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
const Employee = require("./models/employee");

mongoose.connect('mongodb://127.0.0.1:27017/Scompany');

const getrandom = (arr) => {
    let rno = Math.floor(Math.random() * (arr.length - 1));
    return arr[rno];
}

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async (req, res) => {
    // Clear the old data 
    await Employee.deleteMany({});
    // generate random data
    let randomname = ["Gourish", "Ram", "Mohit", "Sohna"]
    let randomlang = ["python", "Javascript", "java", "c++"]
    let randomcity = ["jabalpur", "uttarPradesh", "Delhi", "Noida"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getrandom(randomname),   
            salary: Math.floor(Math.random() * 22000),
            language: getrandom(randomlang),
            city: getrandom(randomcity),
            isManager: Math.random() > 0.5 ? true : false
        })
        console.log(e);
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
