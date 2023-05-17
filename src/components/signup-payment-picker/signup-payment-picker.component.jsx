import "./signup-payment-picker.style.css";
import { useLocation } from "react-router-dom";

import { Elements } from "@stripe/react-stripe-js";

import { stripePromise } from "../../utils/stripe";

import CheckoutForm from "../checkout-form/checkout-form.component";

const PaymentPicker = () => {
  const {
    state: { clientSecret },
  } = useLocation();

  const options = {
    clientSecret,
  };

  return (
    <div className="overlay__wrapper">
      <div className="ms-overlay">
        <div className="ms-overlay__content">
          <div
            className="step__counts text-light uppercase fw-500"
            style={{ fontSize: "0.8rem" }}
          >
            Step 3 of 3
          </div>
          <h2 className="mb">Set up your credit or debit card</h2>
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default PaymentPicker;
