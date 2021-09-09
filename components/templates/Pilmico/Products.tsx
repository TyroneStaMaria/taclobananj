import React, { useEffect, useState } from "react";
import PilmicoProductTemplate from "../../elements/PilmicoProductTemplate/PilmicoProductTemplate";
import { api } from "./../../../lib/woocommerceApi";
import ProductFilter from "./ProductFilter";
import AquaProductLayout from "./AquaProductLayout";
import DefaultLoader from "../../elements/DefaultLoader/DefaultLoader";

const Products = ({ category, setCategory, name, parentCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const aquaId = 24;

  const fetchProducts = async (categoryId: number, searchKey: string) => {
    try {
      const { data } = await api.get("products", {
        orderby: "id",
        category: categoryId,
        per_page: 30,
        search: searchKey,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const storeProducts = async (categoryId: number, searchKey: string) => {
    setLoading(true);
    const products = await fetchProducts(categoryId, searchKey);
    console.log(products);
    setProducts(products);
    setLoading(false);
  };

  const containsAqua = (tags: []) => {
    return (
      tags.filter((tag) => {
        return tag["name"] === "aqua";
      }).length > 0
    );
  };

  useEffect(() => {
    storeProducts(parentCategory.id, searchKey);
  }, []);

  return (
    <>
      {/* <Hero image={banner} /> */}
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize text-center mb-3">{name}</h1>
          {loading ? (
            <DefaultLoader />
          ) : (
            <div className="flex justify-center  items-center flex-col lg:items-stretch lg:flex-row">
              <div
                className="w-full lg:w-1/5 lg:relative"
                style={{ marginBottom: `40rem` }}
              >
                <ProductFilter
                  currentCategory={category}
                  parentCategory={parentCategory}
                  filterProducts={(productDetails) => {
                    setCategory({
                      id: productDetails.id,
                      name: productDetails.name,
                    });
                    setSearchKey(productDetails.searchKey);
                    storeProducts(productDetails.id, productDetails.searchKey);
                    window.scrollTo(0, 700);
                  }}
                />
              </div>
              <div
                className={`w-4/5 ${products.length > 0 ? "" : "h-screen"} `}
              >
                {products.length > 0 ? (
                  category.name.includes("aqua") ||
                  category.name.includes("arya") ? (
                    <AquaProductLayout
                      categoryId={category.id}
                      fetchProducts={fetchProducts}
                      searchKey={searchKey}
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
                  )
                ) : (
                  <div className="flex absolute left-0 justify-center items-center w-full ">
                    <h2>No Results Found</h2>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
