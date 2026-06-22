const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["customer", "driver", "admin"],
    default: 'customer'
  },

  isVerified: {
    type: Boolean,
    default: false,
  }, 
}, {timestamps: true})

const User = mongoose.model('User', UserSchema )
module.exports = User;