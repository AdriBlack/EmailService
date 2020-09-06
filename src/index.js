
require('dotenv').config({path: __dirname + '/.env'})
const express = require('express')
const app = express()
const port = 3000

const routes = require('./routes/index')

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







