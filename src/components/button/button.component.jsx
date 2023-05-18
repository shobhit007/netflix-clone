import React from "react";
import "./button.style.css";

function Button({ children, ...mainProps }) {
  return (
    <button className="red-button" {...mainProps}>
      {children}
    </button>
  );
}

export default Button;
