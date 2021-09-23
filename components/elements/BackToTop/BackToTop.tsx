import React, { useEffect } from "react";
import styles from "./BackToTop.module.scss";
import { BiUpArrowCircle } from "react-icons/bi";
const BackToTop = () => {
  const showBackToTop = (backToTop) => {
    if (
      window.scrollY >= 400 &&
      document.scrollingElement.scrollHeight >= 1450
    ) {
      backToTop.classList.remove(styles.hide);
      return;
    }
    backToTop.classList.add(styles.hide);
  };

  const changeOnFooter = (backToTop: HTMLElement) => {
    if (
      window.innerHeight + window.scrollY <
      document.scrollingElement.scrollHeight - 350
    ) {
      backToTop.classList.remove(styles.yellow);
      return;
    }
    backToTop.classList.add(styles.yellow);
    // ? (backToTop.style.color = "#bf2626")
    // : (backToTop.style.color = "#fed700");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(document.scrollingElement.scrollHeight);
      const backToTop: HTMLElement = document.querySelector("#backToTop");
      showBackToTop(backToTop);
      changeOnFooter(backToTop);
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
      <div>
        <BiUpArrowCircle />
      </div>
    </button>
  );
};

export default BackToTop;
