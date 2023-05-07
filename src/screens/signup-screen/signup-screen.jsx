import "./signup-style.css";
import React, { useContext } from "react";

import { AuthContext } from "../../context/auth.context";

import { signOutUser } from "../../utils/firebase.config";

import { Link, Outlet } from "react-router-dom";

function Signup() {
  const { user } = useContext(AuthContext);

  const handleSignOutUser = () => signOutUser();

  return (
    <React.Fragment>
      <header className="signup__header">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          className="nav__logo"
        />
        {!user ? (
          <Link to="/signin" className="signup__nav-link">
            Sign In
          </Link>
        ) : (
          <span className="signup__nav-link fw-500" onClick={handleSignOutUser}>
            Logout
          </span>
        )}
      </header>

      <Outlet />
    </React.Fragment>
  );
}

export default Signup;
