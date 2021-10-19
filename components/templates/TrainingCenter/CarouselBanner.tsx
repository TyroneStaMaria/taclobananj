import React from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import styles from "./TrainingCenter.module.scss";
import {
  CustomRightArrow,
  CustomLeftArrow,
} from "../../elements/Carousel/CustomArrows/CustomArrows";
import Button from "../../elements/Button/Button";
import { useMediaQuery } from "react-responsive";
interface CarouselData {
  heroImageSrc: string;
  heroHeading: string;
  heroBody: string;
  heroButton: JSX.Element;
}

const CarouselBanner = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

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
        <div className={styles.carouselBanner}>
          <Image
            src="/images/training-center/1.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="banner"
          />
          <div className={styles.textContainer}>
            <h1
              className={`${styles.heading}  text-center`}
              style={{ color: `#282828` }}
            >
              TRAINING CENTER
            </h1>
            <p className="text-white text-center text-h3 py-3 px-5 rounded-md">
              Baking made easier. Learning made better.
            </p>
          </div>
        </div>
        {isDesktop ? (
          <div className={styles.carouselBanner}>
            <Image
              src="/images/training-center/2.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="banner"
            />
            <div className={`${styles.recipeBookDesktop} ${styles.recipeBook}`}>
              <div>
                <h2 className={styles.heading}>
                  HELLO, SUNSHINE! <br /> RECIPE BOOK
                </h2>
                <p className={styles.longDescription}>
                  Achieving long term partnerships through teaching and helping
                  improve baking skills and provide more livelihood
                  opportunities.
                </p>
                <div className="flex items-center justify-between mt-5">
                  <p className={styles.availability}>
                    Hard and Soft Copy Available.
                  </p>
                  <div className={styles.buyNow}>
                    <Button href="/login" btnStyle="orangeFill">
                      Buy Now! &gt;
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.carouselBanner}>
            <Image
              src="/images/training-center/3.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="banner"
            />
            <div className={`${styles.recipeBook} ${styles.recipeBookMobile}`}>
              <div>
                <p>Improve your baking skills.</p>
                <p>Explore livelihood opportunities.</p>
                <div className="my-5">
                  <Button href="/login" btnStyle="orangeFill">
                    Buy Now
                  </Button>
                </div>
                <p className={styles.availability}>
                  *Hard and Soft Copy Available.
                </p>
              </div>
            </div>
          </div>
        )}
      </Carousel>
    </section>
  );
};

export default CarouselBanner;
