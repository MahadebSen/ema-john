import React from "react";
import { Link } from "react-router-dom";
import google from "../../images/icons8-google-48.png";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1>Sign Up</h1>
          <div className="input-container">
            <div>
              <p>Your Name</p>
              <input type="text" />
            </div>
            <div>
              <p>Email</p>
              <input type="text" />
            </div>
            <div>
              <p>Password</p>
              <input type="password" />
            </div>
            <div>
              <p>Confirm Password</p>
              <input type="text" />
            </div>
          </div>
          <button className="btn">Login</button>
          <p className="new-account">
            Alrady Have an Account? <Link to="/login">Go to Login</Link>
          </p>
          <p className="hr">Or</p>
          <button className="google">
            <img src={google} alt="" /> <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
