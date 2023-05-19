import React, { useContext, useState, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import Input from "../input/input.component";

import {
  loginWithEmailAndPassword,
  isUserActive,
} from "../../utils/firebase.config";
import { AuthContext } from "../../context/auth.context";

function SignupPassword() {
  const { errorMessage, setErrorMessage } = useContext(AuthContext);
  const { state: userEmail } = useLocation();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // just for clean up error message while back to previous page
  useEffect(() => {
    if (!errorMessage) return;
    return () => setErrorMessage("");
  }, [errorMessage, setErrorMessage]);

  const handleFormInuptChange = (e) => setPassword(e.target.value);

  const handleSignupPassword = async (e) => {
    e.preventDefault();

    if (!userEmail || !password) {
      setErrorMessage("Fields can't be empty.");
      return;
    }

    try {
      setLoading(true);

      await loginWithEmailAndPassword(userEmail, password);
      const isActive = await isUserActive(userEmail);

      setLoading(false);
      setErrorMessage("");

      if (isActive) {
        navigate("/");
        return;
      }

      navigate("/signup/plan", { replace: true });
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Invalid password.");
        setLoading(false);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setLoading(false);
      }
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
            <Button type="submit" disabled={loading} loading={loading}>
              Next
            </Button>
          </form>
          {errorMessage && <div className="mt">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default SignupPassword;
