import React from "react";
import Welcome from "./HomePageSections/Welcome";
import About from "./HomePageSections/About";
import Education from "./HomePageSections/Education";

const HomePage = () => {
  return (
    <React.Fragment>
      <Welcome />
      <About />
      <Education />
    </React.Fragment>
  );
};

export default HomePage;
