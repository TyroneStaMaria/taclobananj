import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { BRANDS_API_URL } from "../../../lib/constants";
import axios from "axios";
import CustomDots from "../../elements/Carousel/CustomDots/CustomDots";
import styles from "./Home.module.scss";

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

  const [brands, setBrands] = useState([]);

  const getBrands = async () => {
    try {
      const brandsData = await axios.get(BRANDS_API_URL);
      return brandsData;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrands().then((b) => {
      const { data } = b;
      setBrands(data);
      console.log(brands);
    });
  }, []);

  return (
    <section className="">
      <div className="container mx-auto">
        <Carousel
          customDot={<CustomDots items={brands.values} />}
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
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
            // console.log(brand);
            return (
              <div key={index} className={styles.carouselImageContainer}>
                {/* {brand._embedded} */}
                <Image
                  src={brand._embedded["wp:featuredmedia"][0].source_url}
                  alt={brand.title.rendered}
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
