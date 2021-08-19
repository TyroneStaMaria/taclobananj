import React, { useState, useEffect } from "react";
import PilmicoProductTemplate from "../../elements/PilmicoProductTemplate/PilmicoProductTemplate";
import { api } from "../../../lib/woocommerceApi";
import ProductCard from "./../../elements/ProductCard/ProductCard";
import styles from "./Pilmico.module.scss";

interface AquaSubCategory {
  id: number;
  name: string;
  description: string;
  products: [];
}

const AquaProductLayout = ({ categoryId, fetchProducts }) => {
  const [subCategories, setSubCategories] = useState([]);

  const fetchAquaSubCategories = async () => {
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

  subCategories.sort((a, b) => {
    return a.id - b.id;
  });

  const convertDescriptionToJSX = (description): string => {
    const descriptionArray: Array<string> = description.split("●");
    const mainDescription = descriptionArray[0];
    const bulletedList = descriptionArray.slice(1, -1);
    bulletedList.forEach((bullet) => {
      bullet.replace("●", "");
    });
    console.log(mainDescription, bulletedList);

    return `
      <div>
        <p>${mainDescription}</p>
        <ul class="list-disc pl-8 mt-4 text-body font-body">
          ${bulletedList
            .map((bullet, index) => {
              return `<li key=${index}>${bullet}</li>`;
            })
            .join("")}
        </ul>
      </div>`;
  };

  useEffect(() => {
    fetchAquaSubCategories().then((subCategories) => {
      subCategories.map(async (singleSubCategory) => {
        const products = await fetchProducts(singleSubCategory.id);
        const subCategoryItem: AquaSubCategory = {
          id: singleSubCategory.id,
          name: singleSubCategory.name,
          description: convertDescriptionToJSX(singleSubCategory.description),
          products: products,
        };
        setSubCategories((categories) => [...categories, subCategoryItem]);
      });
    });
  }, []);

  return (
    <div>
      {subCategories.map(
        ({ id, name, description, products }: AquaSubCategory) => {
          // console.log(products);
          return (
            <div key={id}>
              <PilmicoProductTemplate
                productName={name}
                productDescription={description}
                imageUrl={undefined}
              />
              <div className={styles.aquaProductsContainer}>
                {products.map(({ id, name, images }: any) => {
                  return (
                    <ProductCard
                      key={id}
                      name={name}
                      id={null}
                      description={null}
                      img={images[0].src}
                    />
                  );
                })}
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default AquaProductLayout;
