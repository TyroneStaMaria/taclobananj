import React, { useEffect, useState } from "react";
import PilmicoProductTemplate from "../../elements/PilmicoProductTemplate/PilmicoProductTemplate";
import { api } from "./../../../lib/woocommerceApi";
import ProductFilter from "./ProductFilter";
import AquaProductLayout from "./AquaProductLayout";
import Loader from "react-loader-spinner";

const Products = ({ category, setCategory, name }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (categoryId) => {
    try {
      const { data } = await api.get("products", {
        orderby: "id",
        category: categoryId,
        per_page: 30,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const storeProducts = async (categoryId) => {
    setLoading(true);
    const products = await fetchProducts(categoryId);
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    storeProducts(category.id);
  }, []);
  return (
    <>
      {/* <Hero image={banner} /> */}
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize text-center mb-3">{name}</h1>
          <div className="flex justify-center  items-center flex-col lg:items-stretch lg:flex-row">
            <div className="w-full lg:w-1/5 lg:relative">
              <ProductFilter
                categoryId={category.id}
                setCategory={(category) => {
                  setCategory(category);
                  storeProducts(category.id);
                  window.scrollTo(0, 700);
                }}
              />
            </div>
            <div className="w-4/5">
              {loading ? (
                <div className="flex justify-center items-center">
                  <Loader
                    type="TailSpin"
                    color="#bf2626"
                    height={80}
                    width={80}
                  />
                </div>
              ) : category.name.includes("aqua") ||
                category.name.includes("arya") ? (
                <AquaProductLayout
                  categoryId={category.id}
                  fetchProducts={fetchProducts}
                />
              ) : (
                products.map(({ name, description, images }, index) => {
                  return (
                    <PilmicoProductTemplate
                      key={index}
                      productName={name.toLowerCase()}
                      productDescription={description}
                      imageUrl={images[0].src}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
