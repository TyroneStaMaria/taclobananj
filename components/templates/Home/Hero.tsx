import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "./Home.module.scss";
import Button from "../../elements/Button/Button";

const Hero = (): JSX.Element => {
  return (
    <section className="banner">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
      >
        <div className={styles.heroBanner}>
          <Image
            src="/images/home/banners/banner1.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="banner"
          />
          <div className={styles.textContainer}>
            <h1 className={styles.heroHeading}>Focused on Shared Growth</h1>
            <p className={styles.heroBody}>
              We are always invested into letting you explore opportunities
              leading to your own growth. Get educated online and kickstart to
              honing your skills
            </p>
            <Button href="#" variant="outline" color="red">
              Visit our Training Center &gt;
            </Button>
          </div>
        </div>
        <div className={styles.heroBanner}>
          <Image
            src="/images/home/banners/banner2.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="banner"
          />
          <div className={styles.textContainer}>
            <h1 className={styles.heroHeading}>Focused on Shared Growth</h1>
            <p className={styles.heroBody}>
              We are always invested into letting you explore opportunities
              leading to your own growth. Get educated online and kickstart to
              honing your skills
            </p>
            <Button href="#" variant="outline" color="red">
              Visit our Training Center &gt;
            </Button>
          </div>
        </div>
        <div className={styles.heroBanner}>
          <Image
            src="/images/home/banners/banner3.png"
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="banner"
          />
          <div className={styles.textContainer}>
            <h1 className={styles.heroHeading}>Focused on Shared Growth</h1>
            <p className={styles.heroBody}>
              We are always invested into letting you explore opportunities
              leading to your own growth. Get educated online and kickstart to
              honing your skills
            </p>
            <Button href="#" variant="outline" color="red">
              Visit our Training Center &gt;
            </Button>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Hero;
