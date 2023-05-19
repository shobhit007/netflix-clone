import "./signin-style.css";

import SignInForm from "../../components/signin-form/signin-form.component";
import Navbar from "../../components/navbar/navbar.component";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__wrapper">
        <header className="sign-in__header">
          <Navbar short />
        </header>

        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
