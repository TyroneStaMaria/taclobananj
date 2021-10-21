import React from "react";
import GroceryPage from "../../../components/templates/Groceries/GroceryPage";
import Seo from "../../../components/elements/Seo/Seo";
import seoData from "../../../seo.json";

const Groceries = () => {
  return (
    <div>
      <Seo data={seoData.groceries} />
      <GroceryPage />
    </div>
  );
};

export default Groceries;
