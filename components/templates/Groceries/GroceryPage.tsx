import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { api } from "../../../lib/woocommerceApi";
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
              <div className="mb-3 lg:mx-3" key={id}>
                <GroceryCategoryCard
                  id={id}
                  slug={slug}
                  name={name}
                  image={image ? image.src : "/images/anj-logo.png"}
                />
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center">
            <Loader type="TailSpin" color="#bf2626" height={80} width={80} />
          </div>
        )}
      </div>
    </section>
  );
};

export default GroceryPage;
