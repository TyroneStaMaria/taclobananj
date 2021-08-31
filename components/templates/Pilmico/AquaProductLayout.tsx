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

// TODO: refactor this so that when filtered into subcategories marread siya

const AquaProductLayout = ({ categoryId, fetchProducts, searchKey }) => {
  const [subCategories, setSubCategories] = useState([]);
  const aquaId = 24;

  const fetchAquaSubCategories = async () => {
    try {
      const { data } = await api.get("products/categories", {
        parent: categoryId,
        orderby: "id",
        search: searchKey,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSingleSubCategory = async () => {
    try {
      const { data } = await api.get(`products/categories/${categoryId}`, {
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

  const convertDescriptionToHtml = (description): string => {
    const descriptionArray: Array<string> = description.split("●");
    const mainDescription = descriptionArray[0];
    const bulletedList = descriptionArray.slice(1, -1);

    return `
      <div>
        <p>${mainDescription}</p>
        <ul class="list-disc pl-8 mt-4 text-body font-body">
          ${bulletedList
            .map((bullet, index) => {
              bullet.replace("●", "");
              return `<li key=${index}>${bullet}</li>`;
            })
            .join("")}
        </ul>
      </div>`;
  };

  const initializeSubCategory = (
    subCategoryItem,
    products
  ): AquaSubCategory => {
    return {
      id: subCategoryItem.id,
      name: subCategoryItem.name,
      description: convertDescriptionToHtml(subCategoryItem.description),
      products: products,
    };
  };

  useEffect(() => {
    const fetchAquaProducts = async () => {
      if (aquaId === categoryId) {
        const subCategories = await fetchAquaSubCategories();
        subCategories.map(async (singleSubCategory) => {
          const products = await fetchProducts(singleSubCategory.id);
          const subCategoryItem: AquaSubCategory = initializeSubCategory(
            singleSubCategory,
            products
          );
          setSubCategories((categories) => [...categories, subCategoryItem]);
        });
      } else {
        const subCategory = await fetchSingleSubCategory();
        const products = await fetchProducts(subCategory.id);
        const subCategoryItem: AquaSubCategory = initializeSubCategory(
          subCategory,
          products
        );
        setSubCategories((categories) => [...categories, subCategoryItem]);
      }
    };
    fetchAquaProducts();
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
