import React from 'react'
import './MovieDeteilsStyle.css'
import { Data } from '../MocData/mocData'

const MovieDetails = (props) => {
  let id = props.movieId;
  const item = Data.filter((movie) => movie.id == id)[0];
  
  return (
    <div className="movieDetails">
      <div className="details">
        <div className="details-header">
          <button className="details-search" type="button"></button>
        </div>
        <div className="details-container">
          <div className="details-image">
            <img src={item.poster_path} className="image" />
          </div>

          <div className="details-content">

            <div className="content-title">
              <h2 className="content-movieTitle">{item.title}</h2>
              <div className="content-voteAverage">{item.vote_average}</div>
            </div>

            <div className="content-tagline">{item.tagline}</div>

            <div className="content-info">
              <span className="content-infoDate">{item.release_date.split('-')[0]}</span>
              <span className="content-infoRuntime">{item.runtime} min</span>
            </div>

            <div className="content-overview">{item.overview}</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
