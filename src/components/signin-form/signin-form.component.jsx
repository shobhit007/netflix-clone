import "./signin-form.style.css";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  loginWithEmailAndPassword,
  isUserActive,
} from "../../utils/firebase.config";

import Input from "../input/input.component";
import Button from "../button/button.component";
import { AuthContext } from "../../context/auth.context";

const form_fields = {
  email: "",
  password: "",
};

function SignInForm() {
  const { errorMessage, setErrorMessage } = useContext(AuthContext);
  const [formFields, setFormFields] = useState(form_fields);
  const [loading, setLoading] = useState(false);

  const { email, password } = formFields;

  // just for clean up error message while back to previous page
  useEffect(() => {
    if (!errorMessage) return;
    return () => setErrorMessage("");
  }, [errorMessage, setErrorMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((preValues) => ({ ...preValues, [name]: value }));
  };

  const navigate = useNavigate();

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Fields can't be empty.");
      return;
    }

    try {
      setLoading(true);

      await loginWithEmailAndPassword(email, password);
      const isActive = await isUserActive(email);

      setLoading(false);
      setErrorMessage("");

      if (isActive) {
        navigate("/");
        return;
      }

      navigate("/signup/plan");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage("Invalid email or password.");
        setLoading(false);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
        setLoading(false);
      }
    }
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
          <Button disabled={loading} loading={loading}>
            Sign In
          </Button>
        </form>
        {/* Handle error message */}

        {errorMessage && <div className="mt">{errorMessage}</div>}

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
