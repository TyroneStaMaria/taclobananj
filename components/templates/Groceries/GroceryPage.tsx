import React, { useEffect, useState } from "react";
import { api } from "../../../lib/woocommerceApi";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";
import GroceryCategoryCard from "./GroceryCategoryCard";
const GroceryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const groceryId = 22;
  const getCategories = async (categoryId) => {
    try {
      const { data } = await api.get("products/categories", {
        parent: categoryId,
        orderby: "id",
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCategories = async (categoryId) => {
      setLoading(true);
      const categoryItems = await getCategories(categoryId);
      setCategories(categoryItems);
      setLoading(false);
    };
    fetchCategories(groceryId);
  }, []);

  // console.log(categoriesp);

  return (
    <section>
      <h1 className="text-center mb-5">Groceries</h1>
      <div className="flex flex-wrap items-center justify-center">
        {!loading ? (
          categories.map(({ id, name, slug, image }) => {
            return (
              <div className="mb-3 lg:mx-4" key={id}>
                <GroceryCategoryCard
                  id={id}
                  slug={slug}
                  name={name}
                  image={image ? image.src : "/images/unavailable.png"}
                />
              </div>
            );
          })
        ) : (
          <DefaultLoader />
        )}
      </div>
    </section>
  );
};

export default GroceryPage;
