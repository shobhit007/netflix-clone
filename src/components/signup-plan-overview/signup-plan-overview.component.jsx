import "./signup-plan-overview.style.css";
import React from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import { ReactComponent as Checkmark } from "../../assets/icons/checkmark.svg";

function SignupPlanOverview() {
  const navigate = useNavigate();

  const goToPlanForm = () => navigate("/signup/planform");

  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay">
        <div className="ms-overlay__content text-center">
          <div className="step-logo-container">
            <span className="step-logo__checkmark"></span>
          </div>
          <div
            className="step__counts text-light uppercase fw-500 text-center"
            style={{ fontSize: "0.8rem" }}
          >
            Step 2 of 3
          </div>
          <h1 className="text-light">Choose your plan</h1>
          <div className="plan__rows mt text-left">
            <div className="plan__row">
              <Checkmark />
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                No commitments, cancel anytime.
              </span>
            </div>
            <div className="plan__row">
              <Checkmark />
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                Everything on Netflix for one low price.
              </span>
            </div>
            <div className="plan__row">
              <Checkmark />
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                No ads and no extra fees. Ever.
              </span>
            </div>
          </div>
          <Button onClick={goToPlanForm}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default SignupPlanOverview;
