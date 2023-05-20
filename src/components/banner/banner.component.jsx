import "./banner.style.css";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { requests } from "../../utils/requests";

const trancate = (str, n) => {
  return str?.length > n ? str.substring(0, n - 1) + "..." : str;
};

function Banner({ onPlay }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchMovie();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {trancate(movie?.title, 20) ||
            trancate(movie?.name, 20) ||
            trancate(movie?.original_name, 20)}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => onPlay(movie?.id, "Netflix Originals")}
          >
            Play
          </button>
          <button className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {trancate(movie?.overview, 150)}
        </h2>
      </div>

      <div className="banner__fadebottom"></div>
    </header>
  );
}

export default Banner;
