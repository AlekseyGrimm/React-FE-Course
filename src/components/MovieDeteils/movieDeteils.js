import React from 'react';
import './MovieDeteilsStyle.css';

const MovieDetails = () => {
  
  return (
    <div className="movieDetails">
      <div className="details">
        <div className="details-header">
          <button className="details-search" type="button"></button>
        </div>
        <div className="details-container">
          <div className="details-image">
            <img src='#' className="image" />
          </div>

          <div className="details-content">

            <div className="content-title">
              <h2 className="content-movieTitle">title</h2>
              <div className="content-voteAverage">average</div>
            </div>

            <div className="content-tagline">tagline</div>

            <div className="content-info">
              <span className="content-infoDate">releaseDate</span>
              <span className="content-infoRuntime">runtime min</span>
            </div>

            <div className="content-overview">overview</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
