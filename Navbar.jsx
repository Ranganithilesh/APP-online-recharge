import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; // Assuming you have some basic styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        MobileRecharge
      </div>
      <ul className="navbar-links">
      
        <li>
          <NavLink to="/recharge" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/history" activeClassName="active">
            History
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
