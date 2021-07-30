import React from "react";
import styles from "./ProductCard.module.scss";
import Product from "../../../interface/Product";
import Image from "next/image";

const ProductCard = (props: Product): JSX.Element => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image src={props.img} alt={props.id} height={350} width={350} />
      </div>
      <div className="px-10">
        <h3>{props.name}</h3>
        <p>Id: {props.id}</p>
        <p>Measurement: {props.measurement}</p>
        <p>Quantity: {props.quantity} pcs</p>
      </div>
    </div>
  );
};

export default ProductCard;
