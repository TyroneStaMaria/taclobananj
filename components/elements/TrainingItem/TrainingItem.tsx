import React from "react";
import Button from "../Button/Button";
import styles from "./TrainingItem.module.scss";

interface TrainingItemData {
  title: string;
  description: string;
  videoUrl: string;
  pageUrl: string;
}

const TrainingItem = (props: TrainingItemData) => {
  return (
    <div className={styles.trainingItem} style={{ height: `300px` }}>
      <div>
        <div
          style={{ width: `200px`, height: `200px` }}
          className="bg-body"
        ></div>
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
