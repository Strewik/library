const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: { type: Number },

  idType: {
    type: Number,
  },
  idNumber: String,
  address: String,
  accountStatus: { 
    type: String,
  },
  timestamp: { type : Date, default: Date.now },
});

module.exports = mongoose.model("User", userSchema);
