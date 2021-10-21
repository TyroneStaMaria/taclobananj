import React, { useState } from "react";
import Hero from "../../../components/templates/Pilmico/Hero";
import Products from "../../../components/templates/Pilmico/Products";
import Seo from "../../../components/elements/Seo/Seo";
import seoData from "../../../seo.json";

const Flour = () => {
  const [category, setCategory] = useState({ id: 19, name: "Flour" });
  const parentCategory = { id: 19, name: "Flour" };
  const banner = "/images/pilmico/flour.png";
  return (
    <div>
      <Seo data={seoData.flour} />
      <Hero image={banner} />
      <Products
        category={category}
        setCategory={setCategory}
        name="Flour"
        parentCategory={parentCategory}
      />
    </div>
  );
};

export default Flour;
