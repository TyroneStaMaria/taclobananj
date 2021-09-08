import React, { useEffect, useState } from "react";
import { api } from "./../../../../lib/woocommerceApi";
import Product from "../../../../interface/Product";
import ProductCard from "../../../../components/elements/ProductCard/ProductCard";
import Head from "next/head";

// TODO: add redirects to the slugs

const Brand = ({ brand }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [parentBrand, setParentBrand] = useState({});

  const getBrand = async () => {
    try {
      const { data } = await api.get("products/categories", { slug: brand });
      return { brandId: data[0].id, brandName: data[0].name };
    } catch (err) {
      console.log(err);
    }
  };

  const getProducts = async () => {
    const { brandId } = await getBrand();
    try {
      const { data } = await api.get("products", { category: brandId });
      // console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const storeProducts = async () => {
      try {
        const products = await getProducts();

        products.map((singleProduct: any) => {
          const product: Product = {
            id: singleProduct.sku,
            name: singleProduct.name,
            description: singleProduct.description,
            img: singleProduct.images
              ? singleProduct.images[0].src
              : "/images/anj-logo.png",
          };
          setProducts((p) => [...p, product]);
        });
      } catch (err) {
        console.log(err);
      }
    };

    const storeBrand = async () => {
      try {
        const brand = await getBrand();
        setParentBrand(brand);
      } catch (err) {
        console.log(err);
      }
    };

    storeProducts();
    storeBrand();
  }, []);

  return (
    <div>
      <Head>
        <title>{parentBrand["brandName"]} | Tacloban ANJ</title>
      </Head>
      <section>
        <div className="container mx-auto">
          <h1 className="capitalize text-center">{parentBrand["brandName"]}</h1>
          <div className="flex flex-wrap justify-center">
            {products.map(({ id, name, description, img }) => {
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
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const { brand } = params;
  console.log(params);
  return { props: { brand } };
};
export default Brand;
