import "./signup-plan-form.style.css";
import React, { useState } from "react";

import Checkmark from "../checkmark/checkmark.component";

function SignupPlanForm() {
  const [selectedValue, setSelectedValue] = useState("2");

  const isSelected = (val) => val === selectedValue;

  const onHandleChange = (e) => setSelectedValue(e.target.value);

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
                value="1"
                checked={isSelected("1")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">Mobile</span>
            </label>
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="2"
                checked={isSelected("2")}
                onChange={onHandleChange}
              />
              <span className="spf-plan__label text-white fw-500">Basic</span>
            </label>
            <label htmlFor="spf-plan__input" className="spf-plan__selector">
              <input
                id="spf-plan__input"
                type="radio"
                className="spf-plan__choice-input"
                value="3"
                checked={isSelected("3")}
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
                value="4"
                checked={isSelected("4")}
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
                <td className="spf-plan__list-item text-center fw-600 text-light">
                  149
                </td>
                <td className="spf-plan__list-item text-center fw-600 text-light">
                  199
                </td>
                <td className="spf-plan__list-item text-center fw-600 text-light">
                  499
                </td>
                <td className="spf-plan__list-item text-center fw-600 text-light">
                  649
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SignupPlanForm;
