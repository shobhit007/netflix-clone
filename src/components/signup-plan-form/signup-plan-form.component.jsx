import "./signup-plan-form.style.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as TabletIcon } from "../../assets/icons/tablet.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/computer.svg";
import { ReactComponent as Checkmark } from "../../assets/icons/checkmark.svg";

const plans = {
  mobile: 149,
  basic: 199,
  standard: 499,
  premium: 649,
};

function SignupPlanForm() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("basic");

  const isSelected = (val) => val === selectedValue;

  const onHandleChange = (e) => setSelectedValue(e.target.value);

  const paymentHandler = async () => {
    const response = await fetch("/.netlify/functions/payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: plans[selectedValue] * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    navigate("/signup/paymentPicker", {
      state: { clientSecret: client_secret },
    });
  };

  return (
    <div className="overlay__wrapper spf">
      <div className="spf__container">
        <div
          className="step__counts text-light uppercase fw-500"
          style={{ fontSize: "0.8rem" }}
        >
          Step 3 of 3
        </div>
        <h1 className="spf_heading text-light mb">
          Choose the plan that’s right for you
        </h1>
        <div className="spf__rows">
          <div className="spf__row">
            <Checkmark />
            <span className="text-light fw-500" style={{ fontSize: "1.15rem" }}>
              Watch all you want. Ad-free.
            </span>
          </div>
          <div className="spf__row">
            <Checkmark />
            <span className="text-light fw-500" style={{ fontSize: "1.15rem" }}>
              Recommendations just for you.
            </span>
          </div>
          <div className="spf__row">
            <Checkmark />
            <span className="text-light fw-500" style={{ fontSize: "1.15rem" }}>
              Change or cancel your plan anytime.
            </span>
          </div>
        </div>

        <div className="spf-plan__grid mt">
          <div className="spf-plan__header">
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="mobile"
                checked={isSelected("mobile")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">Mobile</span>
            </label>
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="basic"
                checked={isSelected("basic")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">Basic</span>
            </label>
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="standard"
                checked={isSelected("standard")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">
                Standard
              </span>
            </label>
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="premium"
                checked={isSelected("premium")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">Premium</span>
            </label>
          </div>
          <table className="spf-plan__list">
            <tbody>
              <tr className="spf-plan__list-row mt">
                <td className="spf-plan__list-item wide-col fw-600 text-light">
                  Monthly price
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("mobile") && "selected"
                  }`}
                >
                  &#x20B9; 149
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("basic") && "selected"
                  }`}
                >
                  &#x20B9; 199
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("standard") && "selected"
                  }`}
                >
                  &#x20B9; 499
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("premium") && "selected"
                  }`}
                >
                  &#x20B9; 649
                </td>
              </tr>
              <tr className="spf-plan__list-row mt">
                <td className="spf-plan__list-item wide-col fw-600 text-light">
                  Video quality
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("mobile") && "selected"
                  }`}
                >
                  Good
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("basic") && "selected"
                  }`}
                >
                  Good
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("standard") && "selected"
                  }`}
                >
                  Better
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("premium") && "selected"
                  }`}
                >
                  Best
                </td>
              </tr>
              <tr className="spf-plan__list-row mt">
                <td className="spf-plan__list-item wide-col fw-600 text-light">
                  Resolution
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("mobile") && "selected"
                  }`}
                >
                  480p
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("basic") && "selected"
                  }`}
                >
                  720
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("standard") && "selected"
                  }`}
                >
                  1080
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("premium") && "selected"
                  }`}
                >
                  4k+hdr
                </td>
              </tr>

              <tr className="spf-plan__list-row mt">
                <td className="spf-plan__list-item wide-col fw-600 text-light">
                  Devices you can use to watch
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("mobile") && "selected"
                  }`}
                >
                  <div>
                    <PhoneIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("mobile") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <TabletIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("mobile") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("basic") && "selected"
                  }`}
                >
                  <div>
                    <PhoneIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <TabletIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      TV
                    </div>
                  </div>
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("standard") && "selected"
                  }`}
                >
                  <div>
                    <PhoneIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <TabletIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      TV
                    </div>
                  </div>
                </td>
                <td
                  className={`spf-plan__list-item text-center fw-600 text-light ${
                    isSelected("premium") && "selected"
                  }`}
                >
                  <div>
                    <PhoneIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <TabletIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <ComputerIcon />
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      TV
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="spf-button-container">
          <Button onClick={paymentHandler}>Next</Button>
        </div>
      </div>
    </div>
  );
}

export default SignupPlanForm;
