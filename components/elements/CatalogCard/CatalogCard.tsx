import React from "react";
import Image from "next/image";
import styles from "./CatalogCard.module.scss";
import Link from "next/link";

interface Catalog {
  title: string;
  name: string;
  img: string;
  link: string;
}

const CatalogCard = (props: Catalog) => {
  return (
    <Link href={props.link} passHref>
      <a>
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
            <p>{props.title}</p>
            <h2>{props.name}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CatalogCard;
