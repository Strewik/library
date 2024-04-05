import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Books from './Books';
import Users from './Users';
import IssueReturn from './IssueReturn';
function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState("Dashboard");

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div className="App">
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
  {selectedMenuItem === "Books" && <Books />}
  {selectedMenuItem === "Issue/Return" && <IssueReturn />}
</main>
    </div>
  );
}

export default App;

