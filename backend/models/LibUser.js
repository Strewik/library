// Connect to MongoDB
const mongoose = require('mongoose');

// Define Schema Model
const libUserSchema = new mongoose.Schema({
    // Product Schema
    name: {
      type: String,
    },
    email: {
      type: String,
    },
     phoneNumber:{type:String},
    idType: {
      type: String,
    },
    idNumber: {
      type: Number,
    },
    address: String,
    
  });
    
  module.exports = mongoose.model('LibUsers', libUserSchema);