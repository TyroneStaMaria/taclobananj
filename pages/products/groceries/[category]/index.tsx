import React, { useEffect, useState } from "react";
import Products from "../../../../components/templates/Groceries/Products";
import DefaultLoader from "../../../../components/elements/DefaultLoader/DefaultLoader";
import BrandPage from "../../../../components/templates/Groceries/BrandPage";
import { api } from "../../../../utils/woocommerceApi";
import Seo from "./../../../../components/elements/Seo/Seo";

const Category = ({ parent }) => {
  const [brands, setBrands] = useState([]);

  const [loading, setLoading] = useState(false);

  const getBrands = async () => {
    // const { id } = await getParent();
    try {
      setLoading(true);
      const { data } = await api.get("products/categories", {
        parent: parent.id,
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

    // storeState(getParent, setParent);

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Seo data={{ title: parent.name, description: parent.description }} />
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize text-center">{parent["name"]}</h1>
          {!loading ? (
            parent.slug === "rice" ? (
              <Products brand={parent} />
            ) : (
              <BrandPage category={parent.slug} brands={brands} />
            )
          ) : (
            <DefaultLoader />
          )}
        </div>
      </section>
    </div>
  );
};

export async function getStaticProps(context) {
  const { category } = context.params;
  try {
    const { data } = await api.get("products/categories", {
      slug: category,
    });
    return {
      props: {
        parent: {
          id: data[0].id,
          name: data[0].name,
          slug: category,
          description: data[0].description,
        },
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticPaths() {
  const groceryId = 22;
  try {
    const { data } = await api.get("products/categories", {
      parent: groceryId,
      orderby: "id",
    });
    const paths = data.map(({ slug }) => {
      return {
        params: {
          category: slug,
        },
      };
    });
    return { paths, fallback: false };
  } catch (err) {
    console.log(err);
  }
  // return {  }
}

export default Category;
