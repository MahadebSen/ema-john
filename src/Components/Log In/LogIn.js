import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/icons8-google-48.png";
import "./LogIn.css";

const LogIn = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  const handleSetEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleSetPasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleGoogleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div className="container">
      <form>
        <h1>Log In</h1>
        <div className="input-container">
          <div>
            <p>Email</p>
            <input onBlur={handleSetEmailOnBlur} type="text" />
          </div>
          <div>
            <p>Password</p>
            <input onBlur={handleSetPasswordOnBlur} type="password" />
          </div>
        </div>
        <button onClick={handleLogIn} className="btn">
          Login
        </button>
        <p className="new-account">
          New to Ema-john? <Link to="/signup">Create A New Account</Link>
        </p>
        <p className="hr">Or</p>
        <button onClick={handleGoogleSignIn} className="google">
          <img src={google} alt="" /> <span>Continue with Google</span>
        </button>
      </form>
    </div>
  );
};

export default LogIn;
