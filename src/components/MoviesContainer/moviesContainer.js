import React, { useState, useEffect } from "react";
import "./moviesContainer.css";
import MovieCard from "../MovieCard/movieCard";
import {Data} from "../MocData/mocData";

const MoviesContainer = () => {

    const [movies, setMovies] = useState([])
    const [showDropdown, setshowDropdown] = useState({})

    const handleOpenClick = (event, id) => {
      const item = movies.filter((movie) => movie.id == id)[0]; // данные одного выбранного фильма
      event.stopPropagation();
      setshowDropdown((item.id === id) ? { [item.id]: true } : null);
    }
  
    const handleCloseClick = () => {
      setshowDropdown(movies.map((movie) => ({ [movie.id]: false })));
    }
  
    useEffect(() => {
      setMovies([...Data])
      document.addEventListener('click', handleCloseClick)
      return () => {
        document.removeEventListener('click', handleCloseClick)
      }
    }, [])

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
            handleClick={handleOpenClick}
            showDropdown={showDropdown[movie.id]}
          />
        ))}
      </div>
    </div>
  )
}

export default MoviesContainer;
