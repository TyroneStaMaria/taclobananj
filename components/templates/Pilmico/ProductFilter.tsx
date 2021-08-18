import React, { useEffect, useState } from "react";
import { api } from "../../../lib/woocommerceApi";

interface Category {
  id: number;
  name: string;
  subCategory: [];
}

const ProductFilter = ({ storeProducts }) => {
  const [parentCategories, setParentCategories] = useState<Category[]>([]);
  // const [categoryId, setCategoryId] = useState(20);
  // const [subCategories, setSubCategories] = useState<Category[]>([]);

  const filterProducts = (categoryId) => {
    storeProducts(categoryId);
  };

  const pilmicoId = 18;
  const getCategories = async (parentId) => {
    try {
      const { data } = await api.get("products/categories", {
        parent: parentId,
        orderby: "id",
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories(pilmicoId).then((category) => {
      // sets the main categories
      category.map(async (singleCategory) => {
        const subCategories = await getCategories(singleCategory.id);
        const categoryItem: Category = {
          id: singleCategory.id,
          name: singleCategory.name,
          subCategory: subCategories,
        };
        setParentCategories((categories) => [...categories, categoryItem]);
      });
    });
  }, []);

  parentCategories.sort((a, b) => {
    return a.id - b.id;
  });
  return (
    <div style={{ width: `300px`, height: `auto` }}>
      <div>
        {parentCategories.map((parent) => {
          return (
            <div key={parent.id}>
              <h3
                onClick={() => {
                  filterProducts(parent.id);
                }}
              >
                {parent.name}
              </h3>
              <ul>
                {parent.subCategory.map((subCategory) => {
                  return (
                    <li
                      key={subCategory["id"]}
                      onClick={() => {
                        filterProducts(subCategory["id"]);
                      }}
                    >
                      {subCategory["name"]}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
