import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../../images/icons8-google-48.png";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleSetNameOnBlur = (event) => {
    setName(event.target.value);
  };

  const handleSetEmailOnBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleSetPasswordOnBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleSetConfirmPasswordOnBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      alert("Your password and Confirm Password have not matched");
    }
  };

  const handleGoogleSignup = (event) => {
    event.preventDefault();
    signInWithGoogle();
  };

  if (user) {
    navigate("/shop");
  }

  return (
    <div>
      <div className="container">
        <form>
          <h1>Sign Up</h1>
          <div className="input-container">
            <div>
              <p>Your Name</p>
              <input onBlur={handleSetNameOnBlur} type="text" />
            </div>
            <div>
              <p>Email</p>
              <input onBlur={handleSetEmailOnBlur} type="text" />
            </div>
            <div>
              <p>Password</p>
              <input onBlur={handleSetPasswordOnBlur} type="password" />
            </div>
            <div>
              <p>Confirm Password</p>
              <input onBlur={handleSetConfirmPasswordOnBlur} type="password" />
            </div>
          </div>
          <button onClick={handleOnSubmit} className="btn">
            Sign Up
          </button>
          <p className="new-account">
            Alrady Have an Account? <Link to="/login">Go to Login</Link>
          </p>
          <p className="hr">Or</p>
          <button onClick={handleGoogleSignup} className="google">
            <img src={google} alt="" /> <span>Continue with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
