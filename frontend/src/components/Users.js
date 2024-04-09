import React, { useState } from 'react';
import '../css/Users.css'; 

function Users() {
  // Sample data array
  const [data] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890", address: "123 Street, City, Country" },
    { id: 2, name: "Jane Doe", email: "jane@example.com", phone: "234-567-8901", address: "456 Avenue, Town, Country" },
    // Add more sample users as needed
  ]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  // Calculate indexes for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = data.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-management">
      <h2 className="header">Users</h2>
      <button className="add-user-button">Add User</button>
      <table className="user-table">
        <thead>
          <tr className="table-header">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td><button>Edit</button></td>
              <td><button>Delete</button></td>
              <td><button>Details</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: Math.ceil(data.length / usersPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default Users;
