// Dashboard.jsx
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="dashboard">
     
      <Navbar></Navbar>
      {/* Additional dashboard content here */}
    </div>
  );
};


export default Dashboard;
