import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeaturedProducts from "./FeaturedProducts";
import Catalogue from "./Catalogue";
import TrainingCenter from "./TrainingCenter";

const HomeTemplate = (): JSX.Element => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Catalogue />
      <TrainingCenter />
    </>
  );
};

export default HomeTemplate;
