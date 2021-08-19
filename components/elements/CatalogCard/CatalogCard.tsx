import React from "react";
import Image from "next/image";
import styles from "./CatalogCard.module.scss";
import Link from "next/link";

interface Catalog {
  name: string;
  img: string;
  link: string;
}

const CatalogCard = (props: Catalog) => {
  return (
    <Link href={props.link} passHref>
      <div className={styles.catalogCardContainer}>
        <div>
          <Image
            src={props.img}
            // layout="fill"
            width={400}
            height={400}
            objectFit="cover"
            quality={100}
            alt={props.name}
          />
        </div>
        <div className={styles.catalogCardText}>
          <p>Our Product Catalogue</p>
          <h2>{props.name}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CatalogCard;
