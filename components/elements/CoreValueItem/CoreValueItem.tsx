import Image from "next/image";
import React from "react";

const CoreValueItem = ({ image, coreValue }) => {
  return (
    <div className="w-1/3 mx-6">
      <div
        className="relative mb-3 mx-auto"
        style={{ width: "65px", height: "65px" }}
      >
        <Image src={image} alt={coreValue} layout="fill" objectFit="contain" />
      </div>
      <div>
        <h4 className="text-center leading-5">{coreValue}</h4>
      </div>
    </div>
  );
};

export default CoreValueItem;
