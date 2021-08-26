import React from "react";
import ProductCard from "../../elements/ProductCard/ProductCard";
import Product from "../../../interface/Product";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";

const FeaturedProducts = (): JSX.Element => {
  const products: Array<Product> = [
    {
      name: "Cobra Energy Drink",
      id: "CAF03",
      description: `<div>
          <p>Measurement: 30L</p>
          <p>Quantity: 30 pcs</p>
        </div>`,
      img: "/images/sample.png",
    },
    {
      name: "Emperador Light",
      id: "EMP03",
      description: `<div>
          <p>Measurement: 30L</p>
          <p>Quantity: 30 pcs</p>
        </div>`,
      img: "/images/sample.png",
    },
    {
      name: "San Mig Light",
      id: "SML03",
      description: `<div>
          <p>Measurement: 30L</p>
          <p>Quantity: 30 pcs</p>
        </div>`,
      img: "/images/sample.png",
    },
  ];
  return (
    <section>
      <div className="container mx-auto ">
        <h2 className="text-center mb-5">Featured Products</h2>
        <FlexContainer className="flex-wrap items-center justify-center">
          {products.map((product, index) => {
            const { name, id, description, img } = product;
            return (
              <div key={index} className="mb-5 mr-0 lg:mr-5">
                <ProductCard
                  name={name}
                  id={id}
                  description={description}
                  img={img}
                />
              </div>
            );
          })}
        </FlexContainer>
      </div>
    </section>
  );
};

export default FeaturedProducts;
