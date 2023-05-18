import React, { useState } from "react";
import "./signin-form.style.css";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  loginWithEmailAndPassword,
  isUserActive,
} from "../../utils/firebase.config";

import Input from "../input/input.component";

const form_fields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(form_fields);

  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((preValues) => ({ ...preValues, [name]: value }));
  };

  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    try {
      await loginWithEmailAndPassword(email, password);
      const isActive = await isUserActive(email);

      if (isActive) {
        navigate("/");
        return;
      }

      navigate("/signup/plan");
    } catch (error) {}
  };

  return (
    <div className="signin__form">
      <div className="signin__form-container">
        <h1>Sign In</h1>
        <form onSubmit={onHandleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Sign In</button>
        </form>
        <h4 className="form__nav-link">
          <span>New to Netflix?</span>
          <Link className="form__nav-link__item" to="/signup/registration">
            Sign up now.
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default SignInForm;
