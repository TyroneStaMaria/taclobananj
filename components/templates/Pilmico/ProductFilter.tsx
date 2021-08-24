import React, { useEffect, useState } from "react";
import { api } from "../../../lib/woocommerceApi";
import styles from "./Pilmico.module.scss";

interface Category {
  id: number;
  name: string;
  subCategories: Array<Object>;
}

const ProductFilter = ({ categoryId, setCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);

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
      const categoryItems = await getCategories(categoryId);
      categoryItems.map(async (singleCategory) => {
        const subCategories = await getCategories(singleCategory.id);
        const categoryItem: Category = {
          id: singleCategory.id,
          name: singleCategory.name,
          subCategories: subCategories,
        };
        setCategories((categories) => [...categories, categoryItem]);
      });
    };
    fetchCategories(categoryId);
  }, []);

  categories.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div className={styles.filterContainer}>
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <h3
              onClick={() =>
                setCategory({
                  id: category.id,
                  name: category.name,
                })
              }
              className={category.id === categoryId ? styles.active : ""}
            >
              {category.name}
            </h3>
            {category.subCategories.length > 0 ? (
              <ul>
                {category.subCategories.map((subCategory: Category) => {
                  return (
                    <li
                      key={subCategory.id}
                      onClick={() =>
                        setCategory({
                          id: subCategory.id,
                          name: subCategory.name,
                        })
                      }
                      className={
                        subCategory.id === categoryId ? styles.active : ""
                      }
                    >
                      {subCategory.name}
                    </li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
    // <div className={styles.filterContainer}>
    //   {parentCategories.map((parent) => {
    //     return (
    //       <div key={parent.id}>
    //         <h3>{parent.name}</h3>
    //         <ul>
    //           {parent.subCategory.map((subCategory) => {
    //             return (
    //               <div key={subCategory["id"]}>
    //                 <li
    //                   className={
    //                     subCategory["id"] === currentCategory
    //                       ? styles.active
    //                       : ""
    //                   }
    //                   onClick={() => {
    //                     filterProducts(subCategory["id"], subCategory["name"]);
    //                   }}
    //                 >
    //                   {subCategory["name"]}
    //                   {/* <p>{subCategories.get(subCategory["id"])}</p> */}
    //                 </li>
    //                 {subCategories.size > 0 &&
    //                 subCategories.get(subCategory["id"]) ? (
    //                   subCategories.get(subCategory["id"]).map((categ) => {
    //                     return (
    //                       <p
    //                         key={categ.id}
    //                         onClick={() => {
    //                           filterProducts(categ.id, categ.name);
    //                         }}
    //                       >
    //                         {categ.name}
    //                       </p>
    //                     );
    //                   })
    //                 ) : (
    //                   <div></div>
    //                 )}
    //               </div>
    //             );
    //           })}
    //         </ul>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default ProductFilter;
