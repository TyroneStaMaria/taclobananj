import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Groceries.module.scss";

interface GroceryCategory {
  id: string;
  slug: string;
  name: string;
  image: string;
}

const GroceryCategoryCard = (props: GroceryCategory) => {
  return (
    <Link
      href="/products/groceries/[category]"
      as={`/products/groceries/${props.slug}`}
      passHref
    >
      <a>
        <div className={styles.groceryCardContainer}>
          <div>
            <Image
              src={props.image}
              width={350}
              height={350}
              quality={100}
              alt={props.name}
              placeholder="blur"
              blurDataURL={
                props.image ? props.image : "/images/unavailable.png"
              }
            />
          </div>
          <div className={styles.groceryCardText}>
            <p>Grocery Products</p>
            <h2>{props.name}</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default GroceryCategoryCard;
