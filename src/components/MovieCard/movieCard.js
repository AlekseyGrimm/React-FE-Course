import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movie-wrap">
      <div className="movie-poster">
        <img className="movie-card" id={props.id} src={props.url} alt={props.name} />
      </div>
      <div className="movie-description">
        <div className="movie-title">
          <h3>{props.title}</h3>
          <p className="movie-date-realise">{props.date}</p>
        </div>
        <div className="movie-genre">{props.genre}</div>
      </div>
    </div>
  );
};

export default MovieCard;
