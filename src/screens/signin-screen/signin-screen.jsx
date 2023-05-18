import "./signin-style.css";

import SignInForm from "../../components/signin-form/signin-form.component";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in__wrapper">
        <header className="sign-in__header">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
            className="nav__logo"
          />
        </header>

        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
