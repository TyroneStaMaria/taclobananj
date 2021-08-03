import React from "react";
import ProductCard from "../../elements/ProductCard/ProductCard";
import Product from "../../../interface/Product";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";

const FeaturedProducts = (): JSX.Element => {
  const products: Array<Product> = [
    {
      name: "Cobra Energy Drink",
      id: "CAF03",
      measurement: "50g",
      quantity: 30,
      img: "/images/sample.png",
    },
    {
      name: "Emperador Light",
      id: "EMP03",
      measurement: "1L",
      quantity: 30,
      img: "/images/sample.png",
    },
    {
      name: "San Mig Light",
      id: "SML03",
      measurement: "500mL",
      quantity: 30,
      img: "/images/sample.png",
    },
  ];
  return (
    <section>
      <div className="container mx-auto ">
        <h2 className="text-center mb-5">Featured Products</h2>
        <FlexContainer className="flex-wrap items-center justify-center">
          {products.map((product, index) => {
            const { name, id, quantity, measurement, img } = product;
            return (
              <div key={index} className="mb-5 mr-0 lg:mr-5">
                <ProductCard
                  name={name}
                  id={id}
                  quantity={quantity}
                  measurement={measurement}
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
