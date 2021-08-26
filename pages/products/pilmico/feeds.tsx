import Head from "next/head";
import React, { useState } from "react";
import Hero from "../../../components/templates/Pilmico/Hero";
import Products from "../../../components/templates/Pilmico/Products";
const Feeds = () => {
  const [category, setCategory] = useState({ id: 20, name: "feeds" });

  const banners = ["/images/pilmico/feeds.png", "/images/pilmico/gamefowl.png"];
  const [banner, setBanner] = useState(banners[0]);

  return (
    <div>
      <Head>
        <title>Feeds | Tacloban ANJ</title>
      </Head>
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
        parentCategoryId={20}
      />
    </div>
  );
};

export default Feeds;
