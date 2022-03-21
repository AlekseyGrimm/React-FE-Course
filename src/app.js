import React from "react";
import "./app.css";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Header from "./components/header/Header";
import Body from "./components/Body/body";
import TopText from "./components/topText/topText";
import MovieDetails from "./components/MovieDeteils/movieDeteils";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <div className="app">
          <Header />
          <Body />
          <TopText />
          <MovieDetails />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
