import React, { useState } from "react";
import Hero from "../../../components/templates/Pilmico/Hero";
import Products from "../../../components/templates/Pilmico/Products";
import Seo from "../../../components/elements/Seo/Seo";
import seoData from "../../../seo.json";

const PetFood = () => {
  const [category, setCategory] = useState({ id: 21, name: "Pet Food" });
  const parentCategory = { id: 21, name: "Pet Food" };

  const banners = {
    maxime: "/images/pilmico/maxime.png",
    maxime_elite: "/images/pilmico/maxime-elite.png",
    woofy: "/images/pilmico/woofy.png",
  };
  const [banner, setBanner] = useState(banners["maxime"]);

  return (
    <div>
      <Seo data={seoData.pet_food} />
      <Hero image={banner} />
      <Products
        category={category}
        setCategory={(categ) => {
          setBanner(banners[categ["name"].toLowerCase().replace(" ", "_")]);
          setCategory(categ);
        }}
        name="Pet Food"
        parentCategory={parentCategory}
      />
    </div>
  );
};

export default PetFood;
