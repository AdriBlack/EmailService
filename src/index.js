import express from 'express'
import _ from './env.js'
import routes from './routes/index.js'

const app = express()
const port = 3000

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})







