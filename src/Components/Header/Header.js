import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>

        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
