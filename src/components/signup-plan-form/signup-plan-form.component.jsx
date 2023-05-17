import "./signup-plan-form.style.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Checkmark from "../checkmark/checkmark.component";
import RedButton from "../red-button/red-button.component";

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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Phone"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("mobile") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Tablet"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Phone"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Tablet"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("basic") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Phone"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Tablet"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("standard") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Phone"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 0C4.89543 0 4 0.895431 4 2V22C4 23.1046 4.89543 24 6 24H18C19.1046 24 20 23.1046 20 22V2C20 0.89543 19.1046 0 18 0H6ZM6 2L18 2V22H6V2ZM13.5 18.5C13.5 17.6716 12.8284 17 12 17C11.1716 17 10.5 17.6716 10.5 18.5C10.5 19.3284 11.1716 20 12 20C12.8284 20 13.5 19.3284 13.5 18.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Phone
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Tablet"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM18.5 13.5C19.3284 13.5 20 12.8284 20 12C20 11.1716 19.3284 10.5 18.5 10.5C17.6716 10.5 17 11.1716 17 12C17 12.8284 17.6716 13.5 18.5 13.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Tablet
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div
                      className={`fs-300 fw-600 text-light ${
                        isSelected("premium") && "selected"
                      }`}
                    >
                      Computer
                    </div>
                  </div>
                  <div className="mt" style={{ "--mt": "0.5rem" }}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="planGrid__supportedDevicesIcon"
                      data-name="Laptop"
                      focusable="false"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.99997 3C2.8954 3 1.99997 3.89543 1.99997 5V14C1.99997 15.1046 2.8954 16 3.99997 16H20C21.1045 16 22 15.1046 22 14V5C22 3.89543 21.1045 3 20 3H3.99997ZM3.99997 5L20 5V14H3.99997V5ZM1.11859 20.6355C4.58689 20.2212 8.23466 20 12 20C15.7653 20 19.413 20.2212 22.8813 20.6355L23.1186 18.6497C19.5701 18.2257 15.8431 18 12 18C8.15686 18 4.42984 18.2257 0.881348 18.6497L1.11859 20.6355Z"
                        fill="currentColor"
                      ></path>
                    </svg>
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
          <RedButton text="Next" onClick={paymentHandler} />
        </div>
      </div>
    </div>
  );
}

export default SignupPlanForm;
