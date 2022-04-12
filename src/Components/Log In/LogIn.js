import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/icons8-google-48.png";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="container">
      <div>
        <h1>Log In</h1>
        <div className="input-container">
          <div>
            <p>Email</p>
            <input type="text" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" />
          </div>
        </div>
        <button className="btn">Login</button>
        <p className="new-account">
          New to Ema-john? <Link to="/signup">Create A New Account</Link>
        </p>
        <p className="hr">Or</p>
        <button className="google">
          <img src={google} alt="" /> <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
