import React from "react";
import Button from "../Button/Button";
import styles from "./TrainingItem.module.scss";
import Image from "next/image";

interface TrainingItemData {
  title: string;
  description: string;
  thumbnail: string;
  pageUrl: string;
}

const TrainingItem = (props: TrainingItemData) => {
  return (
    <div className={styles.trainingItem}>
      <div className={styles.imageContainer}>
        <div>
          <Image
            src={props.thumbnail}
            alt={props.title}
            layout="fill"
            objectFit="contain"
            quality={100}
            placeholder="blur"
            blurDataURL={
              props.thumbnail ? props.thumbnail : "/images/unavailable.png"
            }
          />
        </div>
      </div>
      <div className={styles.itemDetail}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Button href={props.pageUrl} btnStyle="redOutline">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default TrainingItem;
