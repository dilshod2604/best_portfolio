import React from "react";
import Welcome from "./HomePageSections/Welcome";
import About from "./HomePageSections/About";

const HomePage = () => {
  return (
    <React.Fragment>
      <Welcome />
      <About />
    </React.Fragment>
  );
};

export default HomePage;
