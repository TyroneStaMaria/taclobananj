import React from "react";
import Image from "next/image";
import Link from "next/link";
const BrandCard = ({ brand, category }) => {
  return (
    <Link
      href="/products/groceries/[category]/[brand]"
      as={`/products/groceries/${category}/${brand.slug}`}
      passHref
    >
      <a>
        <div>
          <Image
            src={brand.image ? brand.image.src : "/images/unavailable.png"}
            alt={brand.name}
            width={400}
            height={400}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={
              brand.image ? brand.image.src : "/images/unavailable.png"
            }
          />
        </div>
      </a>
    </Link>
  );
};

export default BrandCard;
