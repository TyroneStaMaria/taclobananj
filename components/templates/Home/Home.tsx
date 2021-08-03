import React from "react";
import Hero from "./Hero";
import About from "./About";
import FeaturedProducts from "./FeaturedProducts";
import Catalogue from "./Catalogue";
import TrainingCenter from "./TrainingCenter";
import Brands from "./Brands";
import ContactBanner from "../../elements/ContactBanner/ContactBanner";

const HomeTemplate = (): JSX.Element => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProducts />
      <Catalogue />
      <TrainingCenter />
      <Brands />
      <ContactBanner />
    </>
  );
};

export default HomeTemplate;
