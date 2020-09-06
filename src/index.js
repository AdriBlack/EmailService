import express from 'express'

import dotenv from 'dotenv'
// dotenv.config({path: __dirname + '/.env'})
dotenv.config()

import routes from './routes/index.js'
const app = express()
const port = 3000

// const routes = require('./routes/index')

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







