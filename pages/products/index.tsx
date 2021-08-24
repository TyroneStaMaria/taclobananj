import Head from "next/head";
import React from "react";
import Catalogue from "../../components/templates/Home/Catalogue";

const Products = () => {
  return (
    <div>
      <Head>
        <title>Products | Tacloban ANJ</title>
      </Head>
      <Catalogue />;
    </div>
  );
};

export default Products;
