import React from "react";
import "./signin-form.style.css";
import { Link } from "react-router-dom";

import Input from "../input/input.component";

function SignInForm() {
  return (
    <div className="signin__form">
      <div className="signin__form-container">
        <h1>Sign In</h1>
        <form>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
        <h4 className="form__nav-link">
          <span>New to Netflix?</span>
          <Link className="form__nav-link__item" to="/">
            Sign up now
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default SignInForm;
