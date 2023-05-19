import "./button.style.css";

import Spinner from "../spinner/spinner.component";

function Button({ loading, children, ...mainProps }) {
  return (
    <button className="red-button" {...mainProps}>
      {loading ? <Spinner /> : children}
    </button>
  );
}

export default Button;
