import React, { useEffect, useState } from "react";
import PilmicoProductTemplate from "../../elements/PilmicoProductTemplate/PilmicoProductTemplate";
import { api } from "./../../../lib/woocommerceApi";
import ProductFilter from "./ProductFilter";

const Products = () => {
  const [products, setProducts] = useState([]);
  const category = 19;
  // const [category, setCategory] = useState(20);

  const fetchProducts = async (categoryId) => {
    try {
      const { data } = await api.get("products", {
        orderby: "id",
        category: categoryId,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const storeProducts = async (categoryId) => {
    const products = await fetchProducts(categoryId);
    setProducts(products);
  };

  useEffect(() => {
    storeProducts(category);
  }, []);
  return (
    <section>
      <div className="container mx-auto">
        <h2>Pilmico</h2>
        <div className="flex">
          {/* <div style={{ width: `300px`, height: `300px` }}></div> */}
          <ProductFilter storeProducts={storeProducts} />
          <div>
            {products.map((product, index) => {
              return (
                <PilmicoProductTemplate
                  key={index}
                  productName={product.name}
                  productDescription={product.description}
                  imageUrl="/"
                />
              );
            })}
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
