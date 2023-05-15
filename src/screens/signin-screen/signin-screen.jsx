import "./signin-style.css";
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { isUserExits } from "../../utils/firebase.config";

import { AuthContext } from "../../context/auth.context";

import SignInForm from "../../components/signin-form/signin-form.component";

function SignIn() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [email, setEmail] = useState("");
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignInModal = () => setShowSignInModal(true);

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = async () => {
    if (!email) {
      console.log("field required");
      return;
    }

    const isEmailExists = await isUserExits(email);

    if (user) {
      navigate("/signup/plan");
    } else if (isEmailExists) {
      navigate("/signup/password", {
        state: email,
      });
    } else {
      navigate("/signup/registration", {
        state: email,
      });
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in__wrapper">
        <header className="sign-in__header">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
            className="nav__logo"
          />
          <button onClick={handleSignInModal} className="sign-in__button">
            Sign in
          </button>
        </header>

        <div className="sign-in__content">
          {showSignInModal ? (
            <SignInForm />
          ) : (
            <div className="sign-in__content-wrapper">
              <h1>Unlimited films, TV programmes and more.</h1>
              <h2>Watch anywhere. Cancle any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="sign-in__input-row">
                <div className="form">
                  <input
                    type="email"
                    placeholder="Enter address"
                    value={email}
                    onChange={handleOnChange}
                  />
                  <button onClick={handleGetStarted}>Get started</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
