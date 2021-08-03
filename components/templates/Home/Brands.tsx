import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

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
      partialVisibilityGutter: 30,
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

  return (
    <section>
      <div className="container mx-auto">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container"
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
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div style={{ width: `250px`, height: `250px` }}>
            <Image
              src="/images/home/brands/Del Monte Logo.png"
              alt="Del monte"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div style={{ width: `250px`, height: `250px` }}>
            <Image
              src="/images/home/brands/Emperador Logo.png"
              alt="Del monte"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div style={{ width: `250px`, height: `250px` }}>
            <Image
              src="/images/home/brands/Lucky Me Logo.png"
              alt="Del monte"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div style={{ width: `250px`, height: `250px` }}>
            <Image
              src="/images/home/brands/Nestle Logo.png"
              alt="Del monte"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
          <div style={{ width: `250px`, height: `250px` }}>
            <Image
              src="/images/home/brands/Oishi Logo.jpeg"
              alt="Del monte"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Brands;
