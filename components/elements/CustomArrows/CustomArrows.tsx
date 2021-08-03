import React from "react";
import styles from "./CustomArrows.module.scss";

const CustomRightArrow = ({ onClick = () => {}, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className={`${styles.heroBannerRightArrow} ${styles.heroBannerArrow}`}
    ></button>
  );
};

const CustomLeftArrow = ({ onClick = () => {}, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      onClick={() => onClick()}
      className={`${styles.heroBannerLeftArrow} ${styles.heroBannerArrow}`}
    ></button>
  );
};

export { CustomRightArrow, CustomLeftArrow };
