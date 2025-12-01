const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
  console.log("Hey its a GET request");
  res.send('Hello World GET!')
}).post('/', (req, res) => {
  console.log("Hey its a POST request");
  res.send('Hello World POST!')
}).put('/', (req, res) => {
  console.log("Hey its a PUT request");
  res.send('Hello World PUT!')
}).delete('/', (req, res) => {
  console.log("Hey its a DELETE request");
  res.send('Hello World DELETE!')  
})

app.get("/index", (req, res) => {
  res.sendFile('Template/index.html', { root: __dirname })
  console.log("Hey its a index");
})

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harrypoter", "Gurish"] });
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
