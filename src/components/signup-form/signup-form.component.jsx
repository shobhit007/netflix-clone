import React, { useState } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import Input from "../input/input.component";

import {
  signupWithEmailAndPassword,
  createUserDoc,
} from "../../utils/firebase.config";

function Signupform() {
  const { state: userEmail } = useLocation();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState({
    email: userEmail ? userEmail : "",
    password: "",
  });

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

    try {
      const { user } = await signupWithEmailAndPassword(email, password);

      await createUserDoc(user);
      navigate("/signup/plan");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("email has already been used");
      } else {
        console.log(error);
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
              autoFocus
              onChange={handleFormInuptChange}
            />
            <Button type="submit">Next</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signupform;
