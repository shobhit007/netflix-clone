import "./navbar.style.css";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import { Link } from "react-router-dom";

const logo_url =
  "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

function Navbar({ background = "transparent", buttonEnabled, short }) {
  const { user } = useContext(AuthContext);

  return (
    <nav
      className={`primary-navbar ${short && "navbar-short"}`}
      style={{ backgroundColor: background }}
    >
      <Link to="/" className="navbar-logo-link">
        <img src={logo_url} alt="logo" className="navbar-logo" />
      </Link>
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
