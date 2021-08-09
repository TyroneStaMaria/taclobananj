import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import styles from "./Home.module.scss";
import Button from "../../elements/Button/Button";
import {
  CustomRightArrow,
  CustomLeftArrow,
} from "../../elements/Carousel/CustomArrows/CustomArrows";

interface HeroData {
  heroImageSrc: string;
  heroHeading: string;
  heroBody: string;
  heroButton: JSX.Element;
}

const Hero = (): JSX.Element => {
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

  const heroData: Array<HeroData> = [
    {
      heroImageSrc: "/images/home/banners/banner1.png",
      heroHeading: "Focused on Shared Growth",
      heroBody:
        "We are always invested into letting you explore opportunities leading to your own growth. Get educated online and kickstart to honing your skills.",
      heroButton: (
        <Button href="#" btnStyle="redOutline">
          Visit our Training Center &gt;
        </Button>
      ),
    },
    {
      heroImageSrc: "/images/home/banners/banner2.png",
      heroHeading: "Commited to Provide the Best",
      heroBody:
        "With our sole purpose to provide you with your day-to-day essentials, we only choose to partner with the best. Sustain all your needs with Tacloban AnJ Marketing!",
      heroButton: (
        <Button href="#" btnStyle="redOutline">
          Learn More about Our Products &gt;
        </Button>
      ),
    },
    {
      heroImageSrc: "/images/home/banners/banner3.png",
      heroHeading: "Going Beyond your Experience",
      heroBody:
        "We are aimed to see what's beyond our products. It's always the customer experiences that matters to us. Our products make those experience memorable!",
      heroButton: (
        <Button href="#" btnStyle="redOutline">
          Check out our Full Catalogue &gt;
        </Button>
      ),
    },
  ];

  return (
    <section className="banner">
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        additionalTransfrom={0}
        arrows
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
        {heroData.map((item, index) => {
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
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
