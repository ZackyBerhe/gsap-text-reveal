import React from "react";
import Contact from "../sections/Contact";
import Body from "../layout/Body";
import Hero from "../sections/Hero";
import About from "../sections/About";

const Home = () => {
  return (
    <>
      <Body>
        <Hero />
        <Contact />
        <About />
      </Body>
    </>
  );
};

export default Home;
