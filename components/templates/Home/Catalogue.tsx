import React from "react";
import Image from "next/image";
import CatalogCard from "../../elements/CatalogCard/CatalogCard";

const Catalogue = () => {
  return (
    <section className="bg-alternate">
      <div className="container mx-auto">
        <h2 className="text-center mb-5">Check out our Full Catalogue Here</h2>
        <div className="flex flex-wrap justify-center">
          <div className="mr-0 lg:mr-5">
            <CatalogCard
              img="/images/home/catalogue/groceries.png"
              name="groceries"
            />
          </div>
          <div className="mr-0 lg:mr-5">
            <CatalogCard
              img="/images/home/catalogue/pilmico.png"
              name="pilmico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
