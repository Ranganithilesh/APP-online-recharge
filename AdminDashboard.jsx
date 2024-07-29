import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./adminDashboard.css";
import ManageUsers from "./ManageUsers";
import { useDispatch } from "react-redux";

const AdminDashboard = () => {
  const [view, setView] = useState("home");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear user data from Redux store
    dispatch({ type: "LOGOUT" });

    // Redirect to login page
    navigate("/login");
  };

  const renderContent = () => {
    switch (view) {
      case "manageUsers":
        return <ManageUsers />;
      case "settings":
        return <div>Settings content goes here</div>;
      default:
        return (
          <div>
            <h3>Welcome, Admin</h3>
            <p>This is your dashboard where you can manage users, view reports, and configure settings.</p>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
      
        <ul>
          <li>
            <button onClick={() => setView("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => setView("manageUsers")}>Manage Users</button>
          </li>
          <li>
            <button onClick={() => setView("settings")}>Settings</button>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div className="admin-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
