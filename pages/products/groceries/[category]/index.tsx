import Head from "next/head";
import React, { useEffect, useState } from "react";
import DefaultLoader from "../../../../components/elements/DefaultLoader/DefaultLoader";
import BrandPage from "../../../../components/templates/Groceries/BrandPage";
import { api } from "./../../../../lib/woocommerceApi";

const Category = ({ category }) => {
  const [parent, setParent] = useState({});
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(false);

  const getParent = async () => {
    try {
      const { data } = await api.get("products/categories", {
        slug: category,
      });
      return { parentId: data[0].id, parentName: data[0].name };
    } catch (err) {
      console.log(err);
    }
  };

  const getBrands = async () => {
    const { parentId } = await getParent();
    try {
      setLoading(true);
      const { data } = await api.get("products/categories", {
        parent: parentId,
        orderby: "name",
        per_page: 30,
      });
      setLoading(false);

      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const storeState = async (fetchData, setState) => {
      try {
        const data = await fetchData();
        if (isMounted) {
          setState(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    storeState(getBrands, setBrands);

    storeState(getParent, setParent);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{parent["parentName"]} | Tacloban ANJ</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize text-center">{parent["parentName"]}</h1>
          {!loading ? (
            <BrandPage category={category} brands={brands} />
          ) : (
            <DefaultLoader />
          )}
        </div>
      </section>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { category } = params;
  return { props: { category } };
};

export default Category;
