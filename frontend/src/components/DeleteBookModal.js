import React from 'react';
import Modal from 'react-modal';

function DeleteBookModal({ isOpen, onClose, onDelete, bookId }) {
  const handleDelete = () => {
    onDelete(bookId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this book?</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
}

export default DeleteBookModal;
