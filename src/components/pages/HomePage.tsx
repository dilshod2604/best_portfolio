import React from "react";
import Welcome from "./HomePageSections/Welcome";
import About from "./HomePageSections/About";
import Education from "./HomePageSections/Education";
import Experience from "./HomePageSections/Experience";
import Skills from "./HomePageSections/Skills";
import Contacts from "./HomePageSections/Contacts";
import AboutPortfolio from "./HomePageSections/AboutPortfolio";
import Projects from "./HomePageSections/Projects";
import ContactForm from "./HomePageSections/ContactForm";
const HomePage = () => {
  return (
    <React.Fragment>
      <Welcome />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contacts />
      <ContactForm />
      <AboutPortfolio />
    </React.Fragment>
  );
};

export default HomePage;
