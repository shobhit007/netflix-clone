import "./payment-status.style.css";
import React, { useState, useEffect, useContext } from "react";

import Checkmark from "../checkmark/checkmark.component";
import { useStripe, Elements } from "@stripe/react-stripe-js";
import { setUserPaymentStatus } from "../../utils/firebase.config";

import { AuthContext } from "../../context/auth.context";

import { stripePromise } from "../../utils/stripe";

import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";

const CheckoutStatus = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe || !user) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    const saveUserStatus = async (payment) => {
      try {
        await setUserPaymentStatus(user, payment);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          saveUserStatus(paymentIntent);
          setSuccessMessage("Payment received.");
          break;

        case "processing":
          setErrorMessage(
            "Payment processing. We'll update you when payment is received."
          );
          break;

        case "requires_payment_method":
          // Redirect your user back to your payment page to attempt collecting
          // payment again
          setErrorMessage("Payment failed. Please try another payment method.");
          break;

        default:
          setErrorMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe, user]);

  const redirectHomePage = () => navigate("/");

  const redirectPlanForm = () => navigate("/signup/planform");

  return (
    <React.Fragment>
      <div className="checkmark-row">
        <Checkmark />
      </div>
      {successMessage && (
        <div className="text-center">
          <h1 className="mt text-light">Welcome to Netflix</h1>
          <p
            className="text-light mt mb"
            style={{ "--mt": "0.5rem", "--mb": "1.5rem" }}
          >
            Ready to Watch? Click Next!
          </p>
        </div>
      )}
      {errorMessage && (
        <span className="mt text-light fs-300 mb">{errorMessage}</span>
      )}
      {successMessage && <Button onClick={redirectHomePage}>Next</Button>}
      {errorMessage && <Button onClick={redirectPlanForm}>Try again</Button>}
    </React.Fragment>
  );
};

const PaymentStatus = () => {
  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay__content">
        <Elements stripe={stripePromise}>
          <CheckoutStatus />
        </Elements>
      </div>
    </div>
  );
};

export default PaymentStatus;
