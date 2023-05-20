import "./signout-screen.style.css";
import React, { useEffect } from "react";

import Navbar from "../../components/navbar/navbar.component";
import { Link, useNavigate } from "react-router-dom";

import { signOutUser } from "../../utils/firebase.config";

function Signout() {
  const navigate = useNavigate();

  useEffect(() => {
    const signout = async () => {
      await signOutUser();
    };

    signout();

    const timeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 30 * 1000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="signout">
      <div className="signout__wrapper">
        <Navbar short buttonEnabled />
        <div className="signout-background-image"></div>
        <div className="signout__card">
          <div className="signout__card-container">
            <h1 className="signout__card-heading text-black">
              Leaving So Soon?
            </h1>
            <p className="card-sub-heading">
              Just so you know, you don't always need to sign out of Netflix.
              It's necessary If you're on a shared or public computer.
            </p>
            <p className="card-sub-heading">
              You'll be redirected to Home in 30 seconds.
            </p>
            <Link to="/" className="btn-go-now" replace={true}>
              Go Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signout;
