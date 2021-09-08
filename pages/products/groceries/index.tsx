import Head from "next/head";
import React from "react";
import GroceryPage from "../../../components/templates/Groceries/GroceryPage";
const Groceries = () => {
  return (
    <div>
      <Head>
        <title>Groceries | Tacloban ANJ</title>
      </Head>
      <GroceryPage />
    </div>
  );
};

export default Groceries;
