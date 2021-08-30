import React, { useEffect } from "react";
import styles from "./BackToTop.module.scss";
import { BiUpArrowCircle } from "react-icons/bi";
const BackToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.scrollingElement.scrollHeight);
      const backToTop = document.querySelector("#backToTop");
      window.scrollY >= 400 && document.scrollingElement.scrollHeight >= 1450
        ? backToTop.classList.remove(styles.hide)
        : backToTop.classList.add(styles.hide);
    });
  }, []);
  return (
    <button
      className={`${styles.backToTopContainer} ${styles.hide}`}
      id="backToTop"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="text-h1 ">
        <BiUpArrowCircle />
      </div>
      <div>
        <p className="text-yellow">Back To Top</p>
      </div>
    </button>
  );
};

export default BackToTop;
