import React from "react";
import Catalogue from "../../components/templates/Home/Catalogue";
import Seo from "../../components/elements/Seo/Seo";
import seoData from "../../seo.json";

const Products = () => {
  return (
    <div>
      <Seo data={seoData.products} />
      <Catalogue />
    </div>
  );
};

export default Products;
