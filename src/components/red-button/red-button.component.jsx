import React from "react";
import "./red-button.style.css";

function RedButton({ text, ...mainProps }) {
  return (
    <button className="red-button" {...mainProps}>
      {text}
    </button>
  );
}

export default RedButton;
