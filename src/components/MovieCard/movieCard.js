import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {

  return (
    <div className="movie-wrap">
      <div className="movie-poster">
        <img className="movie-card" id={props.data.id} src={props.data.poster_path} alt={props.data.title} />
      </div>
      <div className="movie-description">
        <div className="movie-title">
          <h3>{props.data.title}</h3>
          <p className="movie-date-realise">{props.data.release_date}</p>
        </div>
        <div className="movie-genre">{props.data.genres}</div>
      </div>
    </div>
  );
};

export default MovieCard;
