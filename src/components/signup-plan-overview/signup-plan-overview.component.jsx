import "./signup-plan-overview.style.css";
import React from "react";

import { useNavigate } from "react-router-dom";

import RedButton from "../red-button/red-button.component";

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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark-group--icon"
                data-name="Checkmark"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                No commitments, cancel anytime.
              </span>
            </div>
            <div className="plan__row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark-group--icon"
                data-name="Checkmark"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                Everything on Netflix for one low price.
              </span>
            </div>
            <div className="plan__row">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="checkmark-group--icon"
                data-name="Checkmark"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-light" style={{ fontSize: "1.25rem" }}>
                No ads and no extra fees. Ever.
              </span>
            </div>
          </div>
          <RedButton text="Next" onClick={goToPlanForm} />
        </div>
      </div>
    </div>
  );
}

export default SignupPlanOverview;
