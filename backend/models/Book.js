// Connect to MongoDB
const mongoose = require('mongoose');

// Define Schema Model
const shopSchema = new mongoose.Schema({
    // Product Schema
    booktName: {
      type: String,
    },
    image: {
      type: String,
    },
     author:{type:String},
    bookCode: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    yearofPublication: {type:Date},
    
  });
    
  // Create & Export a Model called Shop which has a schema shopSchema
  module.exports = mongoose.model('Shop', shopSchema);