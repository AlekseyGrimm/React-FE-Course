import React, { useState, useEffect } from "react"
import "./app.css"
import ErrorBoundary from "./components/errorBoundary/errorBoundary"
import Header from "./components/header/Header"
import Body from "./components/Body/body"
import TopText from "./components/topText/topText"
import MovieDetails from "./components/MovieDeteils/MovieDeteils"

const App = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [currentId, setCurrentId] = useState('')

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const setId = (e) => {
    if (!e.target.id) return;
    setCurrentId(e.target.id);
    setShowDetails(true);
  }

  useEffect(() => {
    document.addEventListener('click', setId);
    return () => {
      document.removeEventListener('click', setId);
    }
  })

  return (
    <>
      <ErrorBoundary>
        <div className="app">

        {(showDetails && <MovieDetails movieId={currentId} handleClick={handleClick} />) || <Header />}
          <Body />
          <TopText />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
