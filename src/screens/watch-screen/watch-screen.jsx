import "./watch-screen.style.css";
import React, { useState, useEffect, useContext } from "react";
import { requests } from "../../utils/requests";
import { useNavigate } from "react-router-dom";

import Banner from "../../components/banner/banner.component";
import Row from "../../components/row/row.component";
import Spinner from "../../components/spinner/spinner.component";

import YoutubePlayer from "react-youtube";

import { fetchMovieTrailer } from "../../utils/fetchMovieTrailer";
import { AuthContext } from "../../context/auth.context";

const logo_url =
  "https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";

function WatchScreen() {
  const [show, handleShow] = useState(false);
  const [play, setPlay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoId, setVideoId] = useState("");
  const { errorMessage, setErrorMessage } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);

    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  //body overflow hidden while video playing
  useEffect(() => {
    play && (document.body.style.overflow = "hidden");
    !play && (document.body.style.overflow = "auto");
  }, [play]);

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const handlePlay = async (id, title) => {
    setPlay(true);
    try {
      setLoading(true);
      const data = await fetchMovieTrailer(id, title);
      const movie = data.find((m) => m.type === "Trailer");
      setVideoId(movie.key);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Maybe the video was not found.");
      setLoading(false);
    }
  };

  const handleClose = () => {
    setPlay(false);
    setErrorMessage("");
    setVideoId("");
  };

  return (
    <div className="watch-screen">
      <div className={`watch_nav  ${show && "nav__black"}`}>
        <div className="nav__content">
          <img src={logo_url} alt="logo" className="watch-nav__logo" />
          <img
            onClick={() => navigate("/profile")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
            className="watch-nav__avatar"
          />
        </div>
      </div>

      <Banner onPlay={handlePlay} />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        onPlay={handlePlay}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        onPlay={handlePlay}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        onPlay={handlePlay}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        onPlay={handlePlay}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        onPlay={handlePlay}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        onPlay={handlePlay}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        onPlay={handlePlay}
      />
      <Row
        title="Documentries Movies"
        fetchUrl={requests.fetchDocumentries}
        onPlay={handlePlay}
      />
      {play && (
        <div className="youtube-wrapper">
          {videoId && (
            <YoutubePlayer
              videoId={videoId}
              className="youtube-container"
              opts={{
                playerVars: { autoplay: 1 },
              }}
            />
          )}

          <button className="btn-close-video" onClick={handleClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
          {errorMessage && (
            <div className="text-white text-center">{errorMessage}</div>
          )}
        </div>
      )}
      {loading && (
        <div className="spinner-modal">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default WatchScreen;
