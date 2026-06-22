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
  isApproved: {
    type: Boolean,
    default: false
  },
})

const Driver = mongoose.model("Driver", driverSchema)
module.exports = Driver 