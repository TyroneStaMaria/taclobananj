import React from "react";
import Image from "next/image";
import FlexContainer from "../FlexContainer/FlexContainer";
import styles from "./PilmicoProductTemplate.module.scss";

interface PilmicoProduct {
  productName: string;
  productDescription: string;
  imageUrl: string;
}

const PilmicoProductTemplate = (props: PilmicoProduct) => {
  return (
    <FlexContainer className={styles.productContainer}>
      {props.imageUrl ? (
        <div className="relative mb-5 lg:mb-0 mr-5">
          <div style={{ width: `300px`, height: `300px` }}>
            <Image
              src={props.imageUrl ? props.imageUrl : "/images/home/about1.jpeg"}
              alt={props.productName}
              layout="fill"
              objectFit="contain"
              quality={100}
              placeholder="blur"
              blurDataURL={
                props.imageUrl ? props.imageUrl : "/images/home/about1.jpeg"
              }
            />
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        <h3>{props.productName}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: props.productDescription }}
        ></div>
        {/* {props.productDescription} */}
      </div>
    </FlexContainer>
  );
};

export default PilmicoProductTemplate;
