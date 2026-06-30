const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authMiddleware = require('../middleware/authMiddlware')

// login
router.post('/login', async(req,res,next) => {
  try {
    const {email,password} = req.body
    const user = await User.findOne({email}).select('+password')

    if(!user){
      return res.status(404).json({message: 'user not found'})
    }

    const isMatch = await bcrypt.compare(password, user.password)
    
    if(!isMatch){
      return res.status(401).json({message: "Invalid Credentials"})
    }

    const token = jwt.sign(
      {id: user.id, role: user.role},
      process.env.JWT_SECRET,
      {expiresIn: '7d'}
    )
    user.password = undefined
    res.status(200).json({token, user})

  } catch (error) {
    next(error)
  }
})

router.post('/register', async(req,res,next) => {
  try{
    const { name, email, phone, password } = req.body
    const newUser = await User.create({ name, email, phone, password })
    newUser.password = undefined
    res.status(201).json(newUser)
  }catch (error){
    next(error)
  }
})

//profile
router.get('/profile', authMiddleware, (req,res,next) => {
  res.status(200).json({message: 'profile data', user:req.user})
})
module.exports = router;