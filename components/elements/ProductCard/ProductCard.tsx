import React from "react";
import styles from "./ProductCard.module.scss";
import Product from "../../../interface/Product";
import Image from "next/image";

const ProductCard = (props: Product): JSX.Element => {
  return (
    <div className={styles.productCard}>
      <div>
        <Image
          src={props.img}
          alt={props.id}
          height={350}
          width={350}
          loader={() => {
            return props.img;
          }}
          placeholder="blur"
          blurDataURL={props.img ? props.img : "/images/unavailable.png"}
        />
      </div>
      <div className="px-10">
        <h3 className={props.id ? "" : "text-center"}>{props.name}</h3>
        {props.id ? (
          <div>
            <p>Id: {props.id}</p>
            <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
