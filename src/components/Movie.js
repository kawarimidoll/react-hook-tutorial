import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => (
  <div className="pt-1 pb-2 px-5 sm:max-w-full my-auto sm:mx-auto md:mx-0 md:max-w-1/2 lg:max-w1/3">
    <h2>{movie.Title}</h2>
    <div>
      <img
        width="200"
        alt={`The Movie titled: ${movie.Title}`}
        src={movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster}
      />
    </div>
    <p>({movie.Year})</p>
  </div>
);

export default Movie;
