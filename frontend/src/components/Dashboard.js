import React from "react";
import "../css/Dashboard.css";
// import Button from "./button";
function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-header">Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Number of Books</h3>
          <p className="card-value">3000</p>
        </div>
        <div className="card">
          <h3 className="card-title">Number of Users</h3>
          <p className="card-value">700</p>
        </div>
        <div className="card">
          <h3 className="card-title">Books Overdue</h3>
          <p className="card-value">48</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card">
          <h3 className="card-title">Number of Books (Genre)</h3>
          <p className="card-value">3000</p>
          {/* <Button page="/another-page" buttonName="Learn More" /> */}
        </div>
        <div className="card">
          <h3 className="card-title">Popular genres</h3>
          <p className="card-value">700</p>
        </div>
        <div className="card">
          <h3 className="card-title">Popular books</h3>
          <p className="card-value">48</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
