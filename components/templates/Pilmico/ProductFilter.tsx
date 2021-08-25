import React, { useEffect, useState } from "react";
import { api } from "../../../lib/woocommerceApi";
import styles from "./Pilmico.module.scss";
import { MdFilterList } from "react-icons/md";

interface Category {
  id: number;
  name: string;
  subCategories: Array<Object>;
}

const ProductFilter = ({ categoryId, setCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showFilter ? "hidden" : "scroll";
  }, [showFilter]);

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
    <div>
      <div className="px-10 mb-4">
        <button
          className="flex items-center text-h3 text-body w-full px-3 py-2 md:hidden "
          style={{ borderWidth: `1px`, borderColor: `#D3D3D3` }}
          onClick={() => {
            setShowFilter(!showFilter);
            window.scrollTo(0, 245);
          }}
        >
          <MdFilterList /> Filter
        </button>
      </div>
      <div
        className={`${styles.filterContainer} ${
          showFilter ? "left-0 bg-white h-screen z-10 px-5" : "-left-full"
        }`}
      >
        <button
          className={`block ml-auto pr-5 lg:hidden`}
          onClick={() => setShowFilter(!showFilter)}
        >
          &#10005;
        </button>
        <h2 className="text-body border-b-2 border-body w-3/5 mb-3 ">
          Categories
        </h2>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h3
                onClick={() => {
                  setCategory({
                    id: category.id,
                    name: category.name,
                  });
                  setShowFilter(false);
                  window.scrollTo(0, 150);
                }}
                className={`${
                  category.id === categoryId ? styles.active : ""
                } ${category.subCategories.length > 0 ? "font-bold" : ""}`}
              >
                {category.name}
              </h3>
              {category.subCategories.length > 0 ? (
                <ul>
                  {category.subCategories.map((subCategory: Category) => {
                    return (
                      <li
                        key={subCategory.id}
                        onClick={() => {
                          setCategory({
                            id: subCategory.id,
                            name: subCategory.name,
                          });
                          setShowFilter(false);
                          window.scrollTo(0, 150);
                        }}
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
    </div>
  );
};

export default ProductFilter;
