import React, { useEffect, useState } from "react";
import { api } from "../../../utils/woocommerceApi";
import Product from "../../../interface/Product";
import ProductCard from "../../../components/elements/ProductCard/ProductCard";
import DefaultLoader from "../../../components/elements/DefaultLoader/DefaultLoader";

const Products = ({ brand }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      const { data } = await api.get("products", { category: brand.id });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const storeProducts = async () => {
      try {
        setLoading(true);
        if (brand.id) {
          const products = await getProducts();
          products.map((singleProduct: any) => {
            const product: Product = {
              id: singleProduct.sku,
              name: singleProduct.name,
              description: singleProduct.description,
              img:
                singleProduct.images.length > 0
                  ? singleProduct.images[0].src
                  : "/images/unavailable.png",
            };
            setProducts((p) => [...p, product]);
            setLoading(false);
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    storeProducts();
  }, [brand]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {!loading ? (
          products.map(({ id, name, description, img }) => {
            return (
              <div key={id} className="items-stretch mx-3 mb-5">
                <ProductCard
                  id={id}
                  name={name}
                  description={description}
                  img={img}
                />
              </div>
            );
          })
        ) : (
          <DefaultLoader />
        )}
      </div>
    </div>
  );
};

export default Products;
