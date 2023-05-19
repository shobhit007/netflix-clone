import "./home-screen.css";
import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/auth.context";
import { isUserExits } from "../../utils/firebase.config";

import Button from "../../components/button/button.component";

import Navbar from "../../components/navbar/navbar.component";

function HomeScreen() {
  const { user, errorMessage, setErrorMessage } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => navigate("/signup/plan");

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGetStarted = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Field can't be empty.");
      return;
    }

    try {
      setLoading(true);

      const isEmailExists = await isUserExits(email);

      setLoading(false);
      setErrorMessage("");

      if (isEmailExists) {
        navigate("/signup/password", {
          state: email,
        });
      } else {
        navigate("/signup/registration", {
          state: email,
        });
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage("Something went wrong, Please try again.");
    }
  };

  return (
    <div className="home-screen">
      <header className="hero-section hero-bg">
        <div className="hero-section__wrapper">
          <Navbar buttonEnabled short />
          <div className="section-wrapper">
            <div className="section-container text-center">
              <div className="hero-section__content">
                <h1 className="section-heading text-white">
                  Unlimited movies, TV shows and more
                </h1>
                <p
                  className="section-sub-heading text-white mt"
                  style={{ "--mt": "2rem" }}
                >
                  Watch anywhere. Cancel anytime.
                </p>
                <p className="section-sub-heading text-white mt mb">
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </p>
                {!user ? (
                  <form
                    onSubmit={handleGetStarted}
                    className="hero-section__form"
                  >
                    <input
                      type="email"
                      placeholder="Email address"
                      name="email"
                      value={email}
                      onChange={handleOnChangeEmail}
                    />
                    <Button disabled={loading} loading={loading}>
                      Get Started
                    </Button>
                    {errorMessage && (
                      <div
                        className="mt text-white text-left"
                        style={{ flexBasis: "100%", "--mt": "0.5rem" }}
                      >
                        {errorMessage}
                      </div>
                    )}
                  </form>
                ) : (
                  <div className="fsb-container">
                    <Button onClick={handleClick}>Finish Sign Up</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <hr className="hr" />

      <section className="section-wrapper">
        <div className="section-container">
          <div className="section-row">
            <div className="section-row__content">
              <h1 className="section-heading text-white">Enjoy on your TV</h1>
              <p
                className="section-sub-heading text-white mt"
                style={{ "--mt": "2rem" }}
              >
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
            </div>
            <div className="section-row__img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="Smart tv on the table"
              />
              <div className="row-video-container">
                <video loop autoPlay muted>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="section-wrapper">
        <div className="section-container">
          <div className="section-row">
            <div className="section-row__content order-2">
              <h1 className="section-heading text-white">
                Download your shows to watch offline
              </h1>
              <p
                className="section-sub-heading text-white mt"
                style={{ "--mt": "2rem" }}
              >
                Save your favourites easily and always have something to watch.
              </p>
            </div>
            <div className="section-row__img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="Stranger thing's ele on phone screen"
              />
              <div className="download-card">
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="Stranger things season 1 poster"
                />
                <div className="download-card__content">
                  <div className="dc-content">
                    <h3 className="text-white">Stranger Things</h3>
                    <span className="text-blue">Downloading...</span>
                  </div>
                  <div className="download-animation"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="section-wrapper">
        <div className="section-container">
          <div className="section-row">
            <div className="section-row__content">
              <h1 className="section-heading text-white">Watch everywhere</h1>
              <p
                className="section-sub-heading text-white mt"
                style={{ "--mt": "2rem" }}
              >
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <div className="section-row__img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="apple desktop"
              />
              <div className="row-video-container rvc-2">
                <video loop autoPlay muted>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <section className="section-wrapper">
        <div className="section-container">
          <div className="section-row">
            <div className="section-row__content order-2">
              <h1 className="section-heading text-white">
                Create profiles for kids
              </h1>
              <p
                className="section-sub-heading text-white mt"
                style={{ "--mt": "2rem" }}
              >
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
              </p>
            </div>
            <div className="section-row__img">
              <img
                src="https://occ-0-2590-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABcP49QA_MBbiVxTKVXPBboKPaOe5Lwwk5HwkQ4kgf0B997QbxljlGGmNMua338tvcBEUg-plCFXsCZmkoQoYflHdxgfwjOP5rgeQ.png?r=df8"
                alt="For children poster"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="hr" />

      <footer className="section-wrapper">
        <div className="section-container text-center">
          <p
            className="section-sub-heading text-white mb"
            style={{ "--mb": "2rem" }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!user ? (
            <form onSubmit={handleGetStarted} className="hero-section__form">
              <input
                type="email"
                placeholder="Email address"
                name="email"
                value={email}
                onChange={handleOnChangeEmail}
              />
              <Button loading={loading} disabled={loading}>
                Get Started
              </Button>
              {errorMessage && (
                <div
                  className="mt text-white text-left"
                  style={{ flexBasis: "100%", "--mt": "0.5rem" }}
                >
                  {errorMessage}
                </div>
              )}
            </form>
          ) : (
            <div className="fsb-container">
              <Button onClick={handleClick}>Finish Sign Up</Button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}

export default HomeScreen;
