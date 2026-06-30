const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const User =require('./models/User')
const Driver = require('./models/Driver')
const UserRoutes = require('./routes/UserRoute')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const errorHandler = require('./middleware/errorHandler')

app.use(helmet())
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use('/api/users', UserRoutes);
app.use(errorHandler)
connectDB()


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`server running on ${PORT}` );
})
