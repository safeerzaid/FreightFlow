const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const User =require('./models/User')
const Driver = require('./models/Driver')
const UserRoutes = require('./routes/UserRoute')

app.use(express.json())
app.use('/api/users', UserRoutes);
connectDB()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running on ${PORT}` );
})
