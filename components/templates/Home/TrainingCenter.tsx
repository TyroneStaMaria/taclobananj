import React from "react";
import Image from "next/image";
import styles from "./Home.module.scss";
import Button from "../../elements/Button/Button";

const TrainingCenter = () => {
  return (
    <section className="banner">
      <div className={styles.heroBanner}>
        <Image
          src="/images/home/banners/training-center-banner.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="banner"
        />
        <div className={styles.textContainer}>
          <h2 className={styles.bannerHeading}>Training Center</h2>
          <p className={styles.heroBody}>
            Get access to our training videos that are crafted to help improve
            your baking skills, provide livelihood opportunities for your, and
            achieve long term partnerships with you.
          </p>
          <Button href="#" btnStyle="redFill">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingCenter;
