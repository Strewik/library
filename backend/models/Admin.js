// Connect to MongoDB
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Define Schema Model
const Admin = new mongoose.Schema({
    
 // SignUp / Login Schema
  name: {
    type: String,
    required: 'Please enter first & last name',
  },
  username: {
    type: String,
    unique: true,
    required: 'Please enter username',
  },
  password: {
    type: String,
    required: 'Please enter password',
  },
  

// User Registration Schema
    
    regDate: Date,
    gender: String,
    phone: {
      type: Number,
      unique: true,
    },

    address:{
      type: String,
    },
  });
  
  // Create Model & Export it
  Admin.plugin(passportLocalMongoose);
  // module.exports = mongoose.model('FarmerOneReg', foRegistration);
  module.exports = mongoose.model('Admin', Admin);
 