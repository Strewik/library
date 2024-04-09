const express = require("express");
const router = express.Router();

// Importing model schemas
const Book = require("../models/bookModel");

router.get("/books", async (req, res) => {
  try {
    let items = await Book.find({});
    res.status(200).json(items);
    // res.render("Booklist", { title: "Upload Product", bookItems: items });
  } catch (err) {
    res.status(400).send("Unable to find items in the database");
  }
});

router.post("/book", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    console.log(req.body);
    res.status(201).json(book);
    //   res.redirect("/book");
  } catch (err) {
    res.status(400).send("Sorry! Something went wrong with posting your book.");
    console.log(err);
  }
});

// router.post("/book/:_id", async (req, res) => {
//   try {
//     await User.findOneAndUpdate({ _id: req.query.id }, req.body);
//     // res.redirect('/');
//     res.status(200).send("Book updated successfully");
//   } catch (err) {
//     res.status(404).send("Unable to update book details");
//   }
// });

router.patch('/books/:_id', async (request, response) => {
    try {
    //   if (
    //     !request.body.title ||
    //     !request.body.author ||
    //     !request.body.publishYear
    //   ) {
    //     return response.status(400).send({
    //       message: 'Send all required fields: title, author, publishYear',
    //     });
    //   }
  
      const { _id } = request.params;
  
      const result = await Book.findByIdAndUpdate(_id, request.body);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book updated successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  router.delete('/books/:_id', async (request, response) => {
    try {
      const { _id } = request.params;
  
      const result = await Book.findByIdAndDelete(_id);
  
      if (!result) {
        return response.status(404).json({ message: 'Book not found' });
      }
  
      return response.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

module.exports = router;
