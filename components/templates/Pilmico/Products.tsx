import React, { useEffect, useState } from "react";
import PilmicoProductTemplate from "../../elements/PilmicoProductTemplate/PilmicoProductTemplate";
import { api } from "./../../../lib/woocommerceApi";
import ProductFilter from "./ProductFilter";
import Loader from "react-loader-spinner";

const Products = () => {
  const [products, setProducts] = useState([]);
  const category = 19;
  const [loading, setLoading] = useState(false);
  // const [category, setCategory] = useState(20);

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
    storeProducts(category);
  }, []);
  return (
    <section>
      <div className="container mx-auto">
        <h2>Pilmico</h2>
        <div className="flex justify-center">
          <div className="w-1/5 relative">
            <ProductFilter storeProducts={storeProducts} />
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
            ) : (
              products.map(({ name, description, images }, index) => {
                return (
                  <PilmicoProductTemplate
                    key={index}
                    productName={name}
                    productDescription={description}
                    imageUrl={images[0].src}
                  />
                );
              })
            )}
          </div>
          {/* <PilmicoProductTemplate
            productName="Wooden Spoon All-Purpose Flour"
            productDescription="Premium quality all-purpose flour suitable for all types of home baking. Best used in batter-type cakes, steamed breads, and various types of soft breads. Moisture: Not more that 14% Protein: Not less than 9.5%"
            imageUrl="/"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Products;
