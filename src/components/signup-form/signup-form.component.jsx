import React, { useContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import Input from "../input/input.component";

import {
  signupWithEmailAndPassword,
  createUserDoc,
} from "../../utils/firebase.config";
import { AuthContext } from "../../context/auth.context";

function Signupform() {
  const [loading, setLoading] = useState(false);
  const { errorMessage, setErrorMessage } = useContext(AuthContext);
  const { state: userEmail } = useLocation();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    email: userEmail ? userEmail : "",
    password: "",
  });

  // just for clean up error message while back to previous page
  useEffect(() => {
    if (!errorMessage) return;
    return () => setErrorMessage("");
  }, [errorMessage, setErrorMessage]);

  const { email, password } = formFields;

  const handleFormInuptChange = (e) => {
    const { value, name } = e.target;

    setFormFields((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Fields can't be empty.");
      return;
    }

    try {
      setLoading(true);

      const { user } = await signupWithEmailAndPassword(email, password);

      await createUserDoc(user);

      setLoading(false);
      setErrorMessage("");
      navigate("/signup/plan");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("email has already been used.");
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
            Create a password to start your membership
          </h1>
          <p
            className="step__sub-heading mt text-light"
            style={{ "--mt": "0.5rem" }}
          >
            Just a few more steps and you're done!
          </p>
          <p
            className="step__sub-heading mt mb text-light"
            style={{ "--mt": "0.5rem" }}
          >
            We hate paperwork, too.
          </p>
          <form onSubmit={handleSignup} className="signup__input-form">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={handleFormInuptChange}
            />
            <Input
              type="password"
              placeholder="Add a password"
              value={password}
              name="password"
              onChange={handleFormInuptChange}
            />
            <Button type="submit" loading={loading} disabled={loading}>
              Next
            </Button>
          </form>
          {errorMessage && <div className="mt">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
}

export default Signupform;
