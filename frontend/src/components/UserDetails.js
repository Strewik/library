import React from "react";
import { Link } from 'react-router-dom';

import ".../css/UserDetails.css"; // Import CSS file for styling

// function UserDetails({ user }) {
function UserDetails() {
  // Sample user data
  const user = {
    id: "JD123",
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country",
    idType: "Passport",
    idNumber: "ABC123456",
    accountStatus: "Active",
  };
  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div className="user-details">
        <div className="user-detail">
          <label htmlFor="name">Name:</label>
          <span>{user.name}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="email">Email:</label>
          <span>{user.email}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="phone">Phone number:</label>
          <span>{user.phone}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="address">Address:</label>
          <span>{user.address}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="idType">ID type:</label>
          <span>{user.idType}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="idNumber">ID number:</label>
          <span>{user.idNumber}</span>
        </div>
        <div className="user-detail">
          <label htmlFor="accountStatus">Account status:</label>
          <span>{user.accountStatus}</span>
        </div>
      </div>
      <Link to={`/edit-user/${user.id}`} className="edit-button">Edit</Link>

      {/* <div className="user-books">
        <h3>Books Currently Borrowed</h3>
        <ul>
          {user.borrowedBooks.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </div>

      <div className="user-violations">
        <h3>Violations (Overdue Books)</h3>
        <ul>
          {user.violations.map((violation, index) => (
            <li key={index}>{violation}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default UserDetails;
