import React from "react";
import CatalogCard from "../../../components/elements/CatalogCard/CatalogCard";
import HeroCarousel from "../../../components/templates/Pilmico/HeroCarousel";
import Seo from "../../../components/elements/Seo/Seo";
import seoData from "../../../seo.json";

const Pilmico = () => {
  const links = [
    {
      name: "Feeds",
      link: "/products/pilmico/feeds",
      img: "/images/pilmico/products/feeds.png",
    },
    {
      name: "Flour",
      link: "/products/pilmico/flour",
      img: "/images/pilmico/products/flour.png",
    },
    {
      name: "Pet Food",
      link: "/products/pilmico/pet-food",
      img: "/images/pilmico/products/pet-food.png",
    },
  ];
  return (
    <div>
      <Seo data={seoData.pilmico} />
      <HeroCarousel />
      <section>
        <h1 className="text-center">Pilmico Products</h1>
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col lg:flex-row">
            {links.map((item, index) => {
              return (
                <div key={index} className="mx-5 mb-3 lg:mb-0">
                  <CatalogCard
                    title="Pilmico Products"
                    name={item.name}
                    img={item.img}
                    link={item.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pilmico;
