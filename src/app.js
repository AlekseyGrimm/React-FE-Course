import React from "react";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Header from "./components/header/Header";
import Body from "./components/Body/body";
import TopText from "./components/topText/topText";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <div>
          <Header />
          <Body />
          <TopText />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
