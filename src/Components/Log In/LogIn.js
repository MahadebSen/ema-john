import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="container">
      <div>
        <h1>Log In</h1>
        <div className="input-container">
          <div>
            <p htmlFor="Email">Email</p>
            <input type="text" />
          </div>
          <div>
            <p htmlFor="Password">Password</p>
            <input type="password" />
          </div>
        </div>
        <button className="btn">Login</button>
        <p className="new-account">
          New to Ema-john? <Link to="/signup">Create A New Account</Link>
        </p>
        <p className="hr">Or</p>
      </div>
    </div>
  );
};

export default LogIn;
