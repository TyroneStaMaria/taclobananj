import React from "react";
import Image from "next/image";
import styles from "./ContactBanner.module.scss";
import Button from "../../elements/Button/Button";
import FlexContainer from "../FlexContainer/FlexContainer";

const ContactBanner = () => {
  return (
    <section className="banner bg-alternate">
      <FlexContainer className="items-center">
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/images/contact-banner.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="banner"
              placeholder="empty"
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <h2>Contact Us!</h2>
          <p className="mb-10">
            Easily reach us for any queries or orders you may have with regards
            to all of our products.
          </p>
          <Button href="#" btnStyle="yellowFill">
            Learn More
          </Button>
        </div>
      </FlexContainer>
    </section>
  );
};

export default ContactBanner;
