import "./signup-style.css";
import React, { useContext } from "react";

import { AuthContext } from "../../context/auth.context";

import { Link, Outlet } from "react-router-dom";

const logo_url =
  "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

function Signup() {
  const { user } = useContext(AuthContext);

  return (
    <React.Fragment>
      <header className="signup__header">
        <Link className="signup__logo-nav-link" to="/">
          <img src={logo_url} alt="logo" className="nav__logo" />
        </Link>
        {!user ? (
          <Link to="/signin" className="signup__nav-link">
            Sign In
          </Link>
        ) : (
          <Link className="signup__nav-link fw-500" to="/signout">
            Sign Out
          </Link>
        )}
      </header>

      <Outlet />
    </React.Fragment>
  );
}

export default Signup;
