const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");
const blog = require("./routes/blog");

app.use('/blog', blog);
// app.use(express.static("public"));
// middleware 1 - logger for our application
app.use((req, res, next) => {
    // console.log(req.headers);
    req.harry = "\ni am harry bhai ka fan";

    fs.appendFileSync("log.txt", `${Date(Date.now()).toString()} is a ${req.method}\n`);
    console.log(`${Date(Date.now()).toString()} is a ${req.method} `);
    // res.send("Hacked by middleware!@!@!@!")
    next();
})

// middleware 2
app.use((req, res, next) => {
    req.harry = "But i am also fan of rohandas";
    console.log("m2");
    next();
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})

app.get('/Contact', (req, res) => {
    res.send('Hello Contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
