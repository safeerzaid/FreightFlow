const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    select: false
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

UserSchema.pre('save', async function (){
  this.password = await bcrypt.hash(this.password, 10);
})


const User = mongoose.model('User', UserSchema )
module.exports = User;