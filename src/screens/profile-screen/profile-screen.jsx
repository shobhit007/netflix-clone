import "./profile-screen.style.css";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/auth.context";
import { isUserActive } from "../../utils/firebase.config";

import { Link, useNavigate } from "react-router-dom";

import { paymentHandler } from "../../utils/stripe";

import Navbar from "../../components/navbar/navbar.component";
import Spinner from "../../components/spinner/spinner.component";

const plans = {
  mobile: 149,
  basic: 199,
  standard: 499,
  premium: 649,
};

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const currentPlan = (plan) => userInfo?.currentPlan === plan;

  const handlePayment = async (selectedValue) => {
    try {
      setLoading(true);
      const client_secret = await paymentHandler(plans[selectedValue]);
      setLoading(false);

      navigate("/signup/paymentPicker", {
        state: { clientSecret: client_secret },
      });
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;

    const getUserInfo = async () => {
      const data = await isUserActive(user.email);
      setUserInfo(data);
    };

    getUserInfo();
  }, [user]);

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="profile-screen">
      <Navbar short />
      <div className="profile-screen__wrapper">
        <div className="profile-screen__container">
          <div className="profile-heading__container">
            <h1 className="text-white profile-heading">Edit Profile</h1>
          </div>
          <div className="profile-row mt">
            <div className="profile-avatar-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="avatar"
                className="profile-avatar"
              />
            </div>
            <div className="profile__content">
              <header className="profile__content-header">
                <span>{user?.email}</span>
              </header>
              <div className="profile__plans">
                <span className="text-white">{`Plans (Current Plan: ${userInfo?.currentPlan})`}</span>
              </div>
              <p className="text-white mt">{`Renewal Date: ${Date(
                userInfo?.payment?.created
              )}`}</p>
              {/* rows */}
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Mobile</p>
                  <span className="text-white fw-600 fs-300">480p</span>
                </div>
                <div className="right">
                  <button
                    onClick={() => handlePayment("mobile")}
                    disabled={currentPlan("Mobile")}
                    className={`btn-plan-subscribe ${
                      currentPlan("Mobile") && "bg-light"
                    }`}
                  >
                    {currentPlan("Mobile") ? "Current Package" : "Subscribe"}
                  </button>
                </div>
              </div>
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Basic</p>
                  <span className="text-white fw-600 fs-300">720p</span>
                </div>
                <div className="right">
                  <button
                    onClick={() => handlePayment("basic")}
                    disabled={currentPlan("Basic")}
                    className={`btn-plan-subscribe ${
                      currentPlan("Basic") && "bg-light"
                    }`}
                  >
                    {currentPlan("Basic") ? "Current Package" : "Subscribe"}
                  </button>
                </div>
              </div>
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Standard</p>
                  <span className="text-white fw-600 fs-300">1080p</span>
                </div>
                <div className="right">
                  <button
                    onClick={() => handlePayment("standard")}
                    disabled={currentPlan("Standard")}
                    className={`btn-plan-subscribe ${
                      currentPlan("Standard") && "bg-light"
                    }`}
                  >
                    {currentPlan("Standard") ? "Current Package" : "Subscribe"}
                  </button>
                </div>
              </div>
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Premium</p>
                  <span className="text-white fw-600 fs-300">4k+hdr</span>
                </div>
                <div className="right">
                  <button
                    onClick={() => handlePayment("premium")}
                    disabled={currentPlan("Premium")}
                    className={`btn-plan-subscribe ${
                      currentPlan("Premium") && "bg-light"
                    }`}
                  >
                    {currentPlan("Premium") ? "Current Package" : "Subscribe"}
                  </button>
                </div>
              </div>

              <Link to="/signout" className="sign-out-link">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <div className="spinner-modal">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default ProfileScreen;
