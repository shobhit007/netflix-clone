import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import RedButton from "../red-button/red-button.component";
import Input from "../input/input.component";

import { loginWithEmailAndPassword } from "../../utils/firebase.config";

function SignupPassword() {
  const { state: userEmail } = useLocation();
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleFormInuptChange = (e) => setPassword(e.target.value);

  const handleSignupPassword = async (e) => {
    e.preventDefault();

    if (!userEmail || !password) return;

    try {
      await loginWithEmailAndPassword(userEmail, password);
      navigate("/signup/plan", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay">
        <div className="ms-overlay__content">
          <span className="step__counts text-light mb uppercase fw-500">
            Step 1 of 3
          </span>
          <h1 className="step__heading text-light">
            Welcome back! Joining Netflix is easy.
          </h1>
          <p
            className="step__sub-heading mt text-light"
            style={{ "--mt": "0.5rem" }}
          >
            Enter your password and you'll be watching in no time.
          </p>
          <form onSubmit={handleSignupPassword} className="signup__input-form">
            <div>
              <p className="text-dark">Email</p>
              <p className="text-light fw-600" style={{ fontSize: "0.8rem" }}>
                {userEmail}
              </p>
            </div>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              name="password"
              onChange={handleFormInuptChange}
            />
            <RedButton text="Next" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPassword;
