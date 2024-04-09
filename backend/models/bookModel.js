const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  code: { type: String },

  quantity: {
    type: Number,
  },
  yearOfPublication: Number,
  language: String,
  genre: {
    type: String,
  },
  timestamp: { type : Date, default: Date.now },
});

module.exports = mongoose.model("Book", bookSchema);
