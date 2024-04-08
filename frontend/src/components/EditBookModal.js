import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

function EditBookModal({ isOpen, onClose, book }) {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({
      ...editedBook,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`your-api-endpoint/books/${editedBook._id}`, editedBook);
      alert('Book updated successfully!');
      onClose();
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book. Please try again.');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="bookCode">Book Code:</label>
          <input type="text" id="bookCode" name="bookCode" value={editedBook.bookCode} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={editedBook.title} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={editedBook.author} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" value={editedBook.genre} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input type="number" id="quantity" name="quantity" value={editedBook.quantity} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="availability">Availability:</label>
          <input type="number" id="availability" name="availability" value={editedBook.availability} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="yearOfPublication">Year of Publication:</label>
          <input type="text" id="yearOfPublication" name="yearOfPublication" value={editedBook.yearOfPublication} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </Modal>
  );
}

export default EditBookModal;
