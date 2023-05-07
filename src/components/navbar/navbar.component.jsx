import "./navbar.style.css";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);

    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);
  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="logo"
          className="nav__logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="nav__avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
