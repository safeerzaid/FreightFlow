const mongoose = require('mongoose')

const driverSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  vehicleType: {
    type: String,
    enum: ["two wheeler", "small truck", "medium truck", "large truck"]
  },

  vehicleNumber: {
    type: String,
    unique: true,
     required: true
  },

  licenseNumber: {
    type: String,
    unique: true,
    required: true
  },

  RC:{
    type:String,
    unique:true,
    required:true
  },

  insurance:{
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    default:0
  },

  isApproved: {
    type: Boolean,
    default: false
  },
})

const Driver = mongoose.model("Driver", driverSchema)
module.exports = Driver 