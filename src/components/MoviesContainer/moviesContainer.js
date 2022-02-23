import React, { useState} from "react";
import "./moviesContainer.css";
import MovieCard from "../MovieCard/movieCard";
import { Data } from "../MocData/mocData";

const MoviesContainer = (props) => {

    const [movies, setMovies] = useState([]);


  return (
    <div className="movie-container">
      <div className="result">
        <span className="result-count">39</span>
        <span> movies found</span>
      </div>
      <div className="container-card">
        {Data.map((movie) => (
          <MovieCard
            data={movie}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default MoviesContainer;
