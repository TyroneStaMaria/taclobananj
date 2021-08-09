import React from "react";
import styles from "./CustomDots.module.scss";

const CustomDots = ({ onClick = () => {}, items, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // const carouselItems = [CarouselItem1, CaourselItem2, CarouselItem3];
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={`${styles.dots} ${active ? styles.active : styles.inactive}`}
      onClick={() => onClick()}
    >
      {React.Children.toArray(items)[index]}
    </button>
  );
};

export default CustomDots;
