const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/test-user', async(req,res) => {
  try{
    const newUser = await User.create(req.body)
    res.status(201).json(newUser)
  }catch (error){
    res.status(400).json({message: error.message})
  }
})

module.exports = router;