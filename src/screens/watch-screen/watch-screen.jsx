import "./watch-screen.style.css";
import React, { useState, useEffect } from "react";
import { requests } from "../../utils/requests";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/banner/banner.component";
import Row from "../../components/row/row.component";

function WatchScreen() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);

    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <div className="home-screen">
      <div className={`watch_nav  ${show && "nav__black"}`}>
        <div className="nav__content">
          <img
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="logo"
            className="watch-nav__logo"
          />
          <img
            onClick={() => navigate("/profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className="watch-nav__avatar"
          />
        </div>
      </div>

      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries Movies" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default WatchScreen;
