import React from "react";
import "./input.style.css";

function Input({ ...props }) {
  return <input className="form__input" {...props} />;
}

export default Input;
