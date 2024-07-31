import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="container">
        <p>Please log in to view the dashboard.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Welcome, {user.user_firstname}!</h1>
      <p>Email: {user.user_email}</p>
      <p>Phone: {user.user_phone}</p>
      <p>City: {user.user_city}</p>
      <p>Zipcode: {user.user_zipcode}</p>
    </div>
  );
};

export default Dashboard;
