import React, { useEffect, useState } from "react";
import { api } from "./../../../../lib/woocommerceApi";
import Head from "next/head";
import Products from "../../../../components/templates/Groceries/Products";

// TODO: add redirects to the slugs

const Brand = ({ brand }) => {
  const [parentBrand, setParentBrand] = useState({});

  const getBrand = async () => {
    try {
      const { data } = await api.get("products/categories", { slug: brand });
      return { brandId: data[0].id, brandName: data[0].name };
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;
    const storeBrand = async () => {
      try {
        const brand = await getBrand();
        if (isMounted) {
          setParentBrand(brand);
        }
      } catch (err) {
        console.log(err);
      }
    };
    storeBrand();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{parentBrand["brandName"]} | Tacloban ANJ</title>
      </Head>
      <Products brand={parentBrand} />
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const { brand } = params;
  return { props: { brand } };
};
export default Brand;
