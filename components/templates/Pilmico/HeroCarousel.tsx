import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {
  CustomRightArrow,
  CustomLeftArrow,
} from "../../elements/Carousel/CustomArrows/CustomArrows";
import Image from "next/image";
import styles from "./Pilmico.module.scss";

const HeroCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 1,
      // partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 768,
        min: 0,
      },
      items: 1,
      // partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 768,
      },
      items: 1,
      // partialVisibilityGutter: 30,
    },
  };

  const images = [
    "/images/pilmico/flour.png",
    "/images/pilmico/feeds.png",
    "/images/pilmico/gamefowl.png",
    "/images/pilmico/maxime.png",
    "/images/pilmico/maxime-elite.png",
    "/images/pilmico/woofy.png",
  ];

  return (
    <section className="banner">
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        slidesToSlide={1}
        swipeable
      >
        {images.map((image, index) => {
          return (
            <div key={index} className={styles.heroBanner}>
              <Image
                src={image}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="banner"
              />
            </div>
          );
        })}
        {/* {heroData.map((item, index) => {
          // console.log(item.heroImageSrc);
          return (
            <div key={index} className={styles.heroBanner}>
              <Image
                src={item.heroImageSrc}
                layout="fill"
                objectFit="cover"
                quality={100}
                alt="banner"
              />
              <div className={styles.textContainer}>
                <h1 className={styles.heroHeading}>{item.heroHeading}</h1>
                <p className={styles.heroBody}>{item.heroBody}</p>
                {item.heroButton}
              </div>
            </div>
          );
        })} */}
      </Carousel>
    </section>
  );
};

export default HeroCarousel;
