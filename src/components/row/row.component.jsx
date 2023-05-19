import React, { useEffect, useRef, useState } from "react";
import "./row.style.css";

import axios from "../../utils/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    }

    fetchMovies();
  }, [fetchUrl]);

  const nextSlide = () => {
    const sliderWidth = rowRef.current.offsetWidth;
    rowRef.current.scrollLeft = rowRef.current.scrollLeft + sliderWidth;
  };

  const preSlide = () => {
    const sliderWidth = rowRef.current.offsetWidth;
    rowRef.current.scrollLeft = rowRef.current.scrollLeft - sliderWidth;
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__movies" ref={rowRef}>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                src={`${posterBaseUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                className={`row__poster ${isLargeRow && "row__large-poster"}`}
              />
            )
        )}

        <button className="next-slide btn-slide" onClick={nextSlide}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
        <button className="pre-slide btn-slide" onClick={preSlide}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      </div>
    </div>
  );
}

export default Row;
