## MERN Stack

### To setup (Please note, cors is important as it won't work without it)
```JavaScript
npm init -y
npm i -D nodemon
npm i express dotenv colors cors mongoose express-async-handler
```

### Create folder: backend
### backend/server.js
```JavaScript
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require("cors")
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))
```

### root folder: .env
```JavaScript
NODE_ENV = development
PORT = 5000
MONGO_URI = 'mongodb+srv://imon:<password>@imoncluster.lpa1d.mongodb.net/<dbname>?retryWrites=true&w=majority'
```
### to run
```JavaScript
> npm start
```
### Postman (must be online/logon) otherwise, won't work!
```JavaScript
http://localhost:5000/api/goals
```

## Mongoose (db.js)
```JavaScript
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}` .cyan.underline)
  } catch (error) {
      console.log(error)
      process.exit(1)
  }
}

module.exports = connectDB
```
