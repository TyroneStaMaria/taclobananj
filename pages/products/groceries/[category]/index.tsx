import Head from "next/head";
import React, { useEffect, useState } from "react";
import BrandCard from "../../../../components/templates/Groceries/BrandCard";
import { api } from "./../../../../lib/woocommerceApi";

const Category = ({ category }) => {
  const [brands, setBrands] = useState([]);
  const [parent, setParent] = useState({});
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
      const { data } = await api.get("products/categories", {
        parent: parentId,
        orderby: "name",
        per_page: 30,
      });
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

  console.log(brands);

  return (
    <div>
      <Head>
        <title>{parent["parentName"]} | Tacloban ANJ</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize">{parent["parentName"]}</h1>

          <div className="flex flex-wrap justify-center items-center">
            {brands.map((brand) => {
              return (
                <BrandCard key={brand.id} brand={brand} category={category} />
              );
            })}
          </div>
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
