// Connect to MongoDB
const mongoose = require("mongoose");

// Define Schema Model
const issueBookSchema = new mongoose.Schema({
  // Product Schema
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LibUser",
    required: true,
  },
  issueDate: { type: Date },
  returnDate: { type: Date },
  fineStatus: {
    type: Boolean,
    default: false,
  },
});

// Create & Export a Model called Shop which has a schema issueBookSchema
module.exports = mongoose.model("IssueBook", issueBookSchema);
