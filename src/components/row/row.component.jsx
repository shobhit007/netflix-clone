import React, { useEffect, useState } from "react";
import "./row.style.css";

import axios from "../../utils/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(fetchUrl);
      setMovies(data.results);
    }

    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__movies">
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
      </div>
    </div>
  );
}

export default Row;
