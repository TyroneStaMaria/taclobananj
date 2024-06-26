import React from "react";
import Image from "next/image";
import styles from "./TrainingCenter.module.scss";

const Banner = () => {
  return (
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
          className={`${styles.heading} text-center`}
          style={{ color: `#282828` }}
        >
          TRAINING CENTER
        </h1>
        <p className="text-white text-center text-h3 py-3 px-5 rounded-md">
          Baking made easier. Learning made better.
        </p>
      </div>
    </div>
  );
};

export default Banner;
