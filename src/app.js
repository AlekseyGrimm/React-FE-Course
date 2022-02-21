import React from "react";
import ErrorBoundary from "./components/errorBoundary/errorBoundary";
import Header from "./components/header/Header";
import Body from "./components/Body/body";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <div>
          <Header />
          <Body />
        </div>
      </ErrorBoundary>
    </>
  );
};

export default App;
