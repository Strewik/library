import React, { useState } from 'react';

import '../css/home.css';
import Dashboard from '../components/Dashboard.js';
import BookList from '../components/BookList';
import Users from '../components/Users';
import IssueReturn from '../components/IssueReturn';
function Home() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="Home">
      <aside className="sidebar">
        <nav>
          <ul>
            <li onClick={() => handleMenuItemClick("Dashboard")}>Dashboard</li>
            <li onClick={() => handleMenuItemClick("Users")}>Users</li>
            <li onClick={() => handleMenuItemClick("Books")}>Books</li>
            <li onClick={() => handleMenuItemClick("Issue/Return")}>Issue/Return</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
  {selectedMenuItem === "Dashboard" && <Dashboard />}
  {selectedMenuItem === "Users" && <Users />}
  {selectedMenuItem === "Books" && <BookList />}
  {selectedMenuItem === "Issue/Return" && <IssueReturn />}
</main>
    </div>
  );
}

export default Home;

