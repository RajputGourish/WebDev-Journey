const express = require('express')
const app = express()
const port = 3000

app.use(express.static('Public'))
app.use(express.static('Public2'))



// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World2212!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.get('/Contact', (req, res) => {
  res.send('Hello Contact me!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
  //  logic to fetch slug from the db
  console.log(req.params);   //will output { slug: 'ruster' },
  console.log(req.query);   //will output query: 'mode=dark&region=in',  
  res.send(`Hello ${req.params.slug}!`);
})


// app.get('/blog/intro-to-js', (req, res) => {
//   //  logic to fetch intro to js from the db
//   res.send('Hello intro to js!')
// })

// app.get('/blog/intro-to-py', (req, res) => {
//   //  logic to fetch intro to python from the db
//   res.send('Hello intro python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
