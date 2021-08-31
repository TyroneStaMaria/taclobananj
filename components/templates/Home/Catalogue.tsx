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
              title="Our Product Catalogue"
              img="/images/home/catalogue/groceries.png"
              name="groceries"
              link="/products/groceries"
            />
          </div>
          <div className="mr-0 lg:mr-5">
            <CatalogCard
              title="Our Product Catalogue"
              img="/images/home/catalogue/pilmico.png"
              name="pilmico"
              link="/products/pilmico"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
