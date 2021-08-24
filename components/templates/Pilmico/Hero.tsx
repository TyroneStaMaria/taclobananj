import React from "react";
import Image from "next/image";
import styles from "./Pilmico.module.scss";
const Hero = ({ image }) => {
  return (
    <section className="banner">
      <div className={styles.heroBanner}>
        <Image
          src={image}
          alt="Feeds"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
    </section>
  );
};

export default Hero;
