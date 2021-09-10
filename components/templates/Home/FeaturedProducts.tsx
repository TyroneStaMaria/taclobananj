import React, { useState, useEffect } from "react";
import ProductCard from "../../elements/ProductCard/ProductCard";
import Product from "../../../interface/Product";
import FlexContainer from "../../elements/FlexContainer/FlexContainer";
import { api } from "../../../lib/woocommerceApi";
import Carousel from "react-multi-carousel";
import CustomDots from "../../elements/Carousel/CustomDots/CustomDots";
import styles from "./Home.module.scss";
import "react-multi-carousel/lib/styles.css";

const FeaturedProducts = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1280,
      },
      items: 3,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: {
        max: 890,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1280,
        min: 890,
      },
      items: 2,
      // partialVisibilityGutter: 30,
    },
  };
  const getProducts = async () => {
    try {
      const { data } = await api.get("products", { featured: true });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(products);

  useEffect(() => {
    const storeProducts = async () => {
      try {
        const products = await getProducts();
        products.map((singleProduct: any) => {
          const product: Product = {
            id: singleProduct.sku,
            name: singleProduct.name,
            description: singleProduct.description,
            img:
              singleProduct.images.length > 0
                ? singleProduct.images[0].src
                : "/images/unavailable.png",
          };
          setProducts((p) => [...p, product]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    storeProducts();
  }, []);

  return (
    <section>
      <div className="container mx-auto ">
        <h2 className="text-center mb-5">Featured Products</h2>
        {/* <FlexContainer className="flex-wrap items-center justify-center"> */}
        <Carousel
          customDot={<CustomDots items={products.values} />}
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          className=""
          containerClass={`container ${styles.featuredProductCarousel}`}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass="mx-auto"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable={false}
          partialVisbile={true}
        >
          {products.map((product, index) => {
            const { name, id, description, img } = product;
            return (
              <div key={index} className={styles.featuredProductContainer}>
                <ProductCard
                  name={name}
                  id={id}
                  description={description}
                  img={img}
                />
              </div>
            );
          })}
        </Carousel>
        {/* </FlexContainer> */}
      </div>
    </section>
  );
};

export default FeaturedProducts;
