import React from "react";
import styles from "./Forms.module.scss";

const Error = ({ error }) => {
  return <div>{error && <p className={styles.error}>{error.message}</p>}</div>;
};

export default Error;
