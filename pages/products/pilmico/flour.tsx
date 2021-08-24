import React, { useState } from "react";
import Hero from "../../../components/templates/Pilmico/Hero";
import Products from "../../../components/templates/Pilmico/Products";

const Flour = () => {
  const [category, setCategory] = useState({ id: 19, name: "Flour" });
  const banner = "/images/pilmico/flour.png";
  return (
    <div>
      <Hero image={banner} />
      <Products category={category} setCategory={setCategory} name="Flour" />
    </div>
  );
};

export default Flour;
