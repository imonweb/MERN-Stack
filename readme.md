## MERN Stacck

### To setup (Please note, cors is important as it won't work without it)
```JavaScript
npm init -y
npm i -D nodemon
npm i express dotenv colors cors
```
### Create folder: backend
### backend/server.js
```JavaScript
const express = require('express')
const dotenv = require('dotenv').config()
const cors = require("cors")

const app = express()
app.use(cors())
app.get('/api/goals', (req, res) => {
  res.send('Get goals')
})
app.listen(port, () => console.log(`Server started on port ${port}`))
```
### root folder: .env
```JavaScript
NODE_ENV = development
PORT = 5000
```
### to run
```JavaScript
> npm start
```
### Postman (must be online/logon) otherwise, won't work!
```JavaScript
http://localhost:5000/api/goals
```