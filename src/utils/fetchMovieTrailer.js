import axios from "./axios";

export const fetchMovieTrailer = async (movieId, title) => {
  try {
    if (title === "Netflix Originals") {
      const {
        data: { results },
      } = await axios.get(
        `/tv/${movieId}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
      );

      return results;
    }
    const {
      data: {
        videos: { results },
      },
    } = await axios.get(
      `/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&append_to_response=videos`
    );

    return results;
  } catch (error) {
    return error;
  }
};
