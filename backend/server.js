const express = require('express')
const dotenv = require('dotenv').config()
const cors = require("cors")
// const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000


const app = express()

app.use(cors())
app.get('/api/goals', (req, res) => {
  // res.send('Get goals')
  // res.json({ message: 'Get goals'})
  res.status(200).json({ message: 'Get goals'})
})
app.listen(port, () => console.log(`Server started on port ${port}`))