import React from 'react'

function import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditBookModal from './EditBookModal';
import DeleteBookModal from './DeleteBookModal';
import './BookList.css'; 

function BookList() {
  
  const [books, setBooks] = useState([{
    _id: 1,
    bookCode: '001',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic',
    quantity: 10,
    availability: 7,
    yearOfPublication: 1925
  },
  {
    _id: 2,
    bookCode: '002',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic',
    quantity: 8,
    availability: 3,
    yearOfPublication: 1960
  },
  {
    _id: 3,
    bookCode: '003',
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    quantity: 15,
    availability: 10,
    yearOfPublication: 1949
  }]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('your-api-endpoint/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const filteredBooks = books.filter(book =>
    Object.values(book).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const sortedBooks = sortBy ? filteredBooks.sort((a, b) => {
    const fieldA = a[sortBy].toString().toLowerCase();
    const fieldB = b[sortBy].toString().toLowerCase();
    if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
    if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  }) : filteredBooks;

  const handleDelete = async (bookId) => {
    try {
      await axios.delete(`your-api-endpoint/books/${bookId}`);
      fetchBooks();
      alert('Book deleted successfully!');
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book. Please try again.');
    }
  };

  return (
    <div className="book-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by any field..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('bookCode')}>Book Code</th>
            <th onClick={() => handleSort('title')}>Title</th>
            <th onClick={() => handleSort('author')}>Author</th>
            <th onClick={() => handleSort('genre')}>Genre</th>
            <th onClick={() => handleSort('quantity')}>Quantity</th>
            <th onClick={() => handleSort('availability')}>Availability</th>
            <th onClick={() => handleSort('yearOfPublication')}>Year of Publication</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedBooks.map(book => (
            <tr key={book._id}>
              <td>{book.bookCode}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.quantity}</td>
              <td>{book.availability}</td>
              <td>{book.yearOfPublication}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-book-button">Add New Book</button>
       {/* <EditBookModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        book={selectedBook}
      />

      <DeleteBookModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
        bookId={selectedBook ? selectedBook._id : null}
      /> */}
    </div>
  );
}

export default BookList;
Books() {
  return (
    <div>Books</div>
  )
}

export default Books