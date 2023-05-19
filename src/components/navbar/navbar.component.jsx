import "./navbar.style.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import { Link } from "react-router-dom";

function Navbar({ background = "transparent", buttonEnabled, short }) {
  const { user } = useContext(AuthContext);

  return (
    <nav
      className={`primary-navbar ${short && "navbar-short"}`}
      style={{ backgroundColor: background }}
    >
      <img
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="logo"
        className="navbar-logo"
      />
      {!user
        ? buttonEnabled && (
            <Link to="/signin" className="navbar-link-item">
              Sign In
            </Link>
          )
        : buttonEnabled && (
            <Link to="/signout" className="navbar-link-item">
              Sign Out
            </Link>
          )}
    </nav>
  );
}

export default Navbar;
