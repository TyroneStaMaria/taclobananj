import React, { useEffect, useState } from "react";
import BrandCard from "./BrandCard";

const BrandPage = ({ category, brands }) => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {brands.map((brand) => {
        return <BrandCard key={brand.id} brand={brand} category={category} />;
      })}
    </div>
  );
};

export default BrandPage;
