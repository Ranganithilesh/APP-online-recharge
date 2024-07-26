// Login.jsx
import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        dispatch({ type: "LOGIN", payload: user });
        navigate("/dashboard");
      } else {
        console.error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have an Account? </p>
        <Link to="/" className="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
