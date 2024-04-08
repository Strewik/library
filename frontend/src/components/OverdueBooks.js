import React, { useState } from 'react';
import axios from 'axios';
import '../css/OverdueBooks.css'; // Import CSS file for styling

function AddUserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    idType: '',
    idNumber: '',
    accountStatus: 'Active'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('your-endpoint-url', formData);
      // Clear form fields after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        idType: '',
        idNumber: '',
        accountStatus: 'Active'
      });
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <div className="add-user-form">
        <h2>Add new user</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone number</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="idType">ID type</label>
            <input type="text" id="idType" name="idType" value={formData.idType} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="idNumber">ID number</label>
            <input type="text" id="idNumber" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="accountStatus">Account status</label>
            <select id="accountStatus" name="accountStatus" value={formData.accountStatus} onChange={handleChange}>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <button type="submit" className="add-user-button">Add new user</button>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
