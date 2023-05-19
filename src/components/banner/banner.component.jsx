import "./banner.style.css";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import { requests } from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    };

    fetchMovie();
  }, []);

  const trancate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
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
