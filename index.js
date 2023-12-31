const express = require('express')
const app = express()
require('dotenv').config();
const port = process.env.EXPRESS_PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('Hey this is a test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})