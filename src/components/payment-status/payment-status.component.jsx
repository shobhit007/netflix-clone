import "./payment-status.style.css";
import React, { useState, useEffect, useContext } from "react";

import Checkmark from "../checkmark/checkmark.component";
import { useStripe, Elements } from "@stripe/react-stripe-js";
import { setUserPaymentStatus } from "../../utils/firebase.config";

import { AuthContext } from "../../context/auth.context";

import { stripePromise } from "../../utils/stripe";

const PaymentStatus = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const stripe = useStripe();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    // Retrieve the PaymentIntent
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setUserPaymentStatus(user, paymentIntent);
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

  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay__content">
        <Elements stripe={stripePromise}>
          <div className="checkmark-row">
            <Checkmark />
          </div>
          {successMessage && (
            <h1 className="mt text-light">Welcome to Netflix</h1>
          )}
          {errorMessage && (
            <span className="mt text-light fs-300">{errorMessage}</span>
          )}
        </Elements>
      </div>
    </div>
  );
};

export default PaymentStatus;
