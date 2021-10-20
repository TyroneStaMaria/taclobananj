import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { GRAPHQL_URI, BRANDS_QUERY } from "../../../lib/constants";
import axios from "axios";
import CustomDots from "../../elements/Carousel/CustomDots/CustomDots";
import styles from "./Home.module.scss";

interface BrandType {
  brandId: number;
  featuredImage: any;
  title: string;
}

const Brands = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 0,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  };

  const [brands, setBrands] = useState<Array<BrandType>>([]);

  const getBrands = async () => {
    try {
      const brandsData = await axios({
        method: "POST",
        url: GRAPHQL_URI,
        data: {
          query: BRANDS_QUERY,
        },
      });
      return brandsData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrands().then((b) => {
      const { data } = b.data;
      const { nodes } = data.brands;

      setBrands(nodes);
    });
  }, []);

  return (
    <section className="">
      <div className="container mx-auto">
        <Carousel
          customDot={<CustomDots items={brands.values} />}
          additionalTransfrom={0}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          centerMode={false}
          className=""
          containerClass={`container ${styles.carousel}`}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {brands.map((brand, index) => {
            return (
              <div key={index} className={styles.carouselImageContainer}>
                <Image
                  src={brand.featuredImage.node.sourceUrl}
                  alt={brand.title}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
