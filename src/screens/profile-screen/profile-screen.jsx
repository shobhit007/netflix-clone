import "./profile-screen.style.css";
import React, { useContext } from "react";

import { AuthContext } from "../../context/auth.context";

import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/navbar.component";

function ProfileScreen() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="profile-screen">
      <Navbar />
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
                <span className="text-white">{`Plans (Current Plan: premium)`}</span>
              </div>
              <p className="text-white mt">Renewal Date: 04/05/2023</p>
              {/* rows */}
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Standard</p>
                  <span className="text-white fw-600 fs-300">1080p</span>
                </div>
                <div className="right">
                  <div className="plan-status-box">Subscribe</div>
                </div>
              </div>
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Basic</p>
                  <span className="text-white fw-600 fs-300">480p</span>
                </div>
                <div className="right">
                  <div className="plan-status-box">Subscribe</div>
                </div>
              </div>
              <div className="profile-content__row ">
                <div className="left">
                  <p className="text-white fw-600">Netflix Premium</p>
                  <span className="text-white fw-600 fs-300">4k+hdr</span>
                </div>
                <div className="right">
                  <div className="plan-status-box bg-light">
                    Current Package
                  </div>
                </div>
              </div>

              <Link to="/signout" className="sign-out-link">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
