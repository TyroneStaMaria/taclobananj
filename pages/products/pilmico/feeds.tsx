import React, { useState } from "react";
import Hero from "../../../components/templates/Pilmico/Hero";
import Products from "../../../components/templates/Pilmico/Products";
import Seo from "../../../components/elements/Seo/Seo";
import seoData from "../../../seo.json";

const Feeds = () => {
  const [category, setCategory] = useState({ id: 20, name: "feeds" });
  const parentCategory = { id: 20, name: "feeds" };
  const banners = ["/images/pilmico/feeds.png", "/images/pilmico/gamefowl.png"];
  const [banner, setBanner] = useState(banners[0]);

  return (
    <div>
      <Seo data={seoData.feeds} />
      <Hero image={banner} />
      <Products
        category={category}
        setCategory={(categ) => {
          setBanner(() => {
            return categ["name"].toLowerCase() !== "gamefowl"
              ? banners[0]
              : banners[1];
          });
          setCategory(categ);
        }}
        name="Feeds"
        parentCategory={parentCategory}
      />
    </div>
  );
};

export default Feeds;
