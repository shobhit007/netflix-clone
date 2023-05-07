import React from "react";

import { useNavigate, useLocation } from "react-router-dom";

import RedButton from "../red-button/red-button.component";

function SignupOverview() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleNextScreen = () => navigate("/signup/regform", { state });

  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay">
        <div className="ms-overlay__content text-center">
          <span className="screen-logo"></span>
          <h1 className="step__heading">Finish setting up your account</h1>
          <p className="step__sub-heading">Netflix is personalised for you.</p>
          <p className="step__sub-heading mb" style={{ "--mb": "1.5rem" }}>
            Create a password to watch on any device at any time.
          </p>
          <RedButton text="Next" onClick={handleNextScreen} />
        </div>
      </div>
    </div>
  );
}

export default SignupOverview;
