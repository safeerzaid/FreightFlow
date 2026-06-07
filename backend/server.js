const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('../backend/config/db')

app.use(express.json())
connectDB()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running on ${PORT}` );
})