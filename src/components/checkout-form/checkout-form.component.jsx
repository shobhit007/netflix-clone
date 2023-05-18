import "./checkout-form.style.css";
import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import Button from "../button/button.component";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:8888/signup/paymentSuccess",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("payment successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="mt">
        <Button disabled={!stripe}>Next</Button>
      </div>
      {errorMessage && (
        <span className="mt text-light fs-300">{errorMessage}</span>
      )}
    </form>
  );
};

export default CheckoutForm;
