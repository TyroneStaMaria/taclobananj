import React, { useEffect, useState } from "react";
import { api } from "../../../lib/woocommerceApi";
import styles from "./Pilmico.module.scss";
import { MdFilterList } from "react-icons/md";
import ProductSearch from "./ProductSearch";
import { useMediaQuery } from "react-responsive";

interface Category {
  id: number;
  name: string;
  subCategories: Array<Object>;
}

const ProductFilter = ({ currentCategory, filterProducts, parentCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [showFilter, setShowFilter] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });
  const filterScrollValue = isDesktop ? 800 : 150;

  useEffect(() => {
    document.body.style.overflowY = showFilter ? "hidden" : "scroll";
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
    let isMounted = true;
    const fetchCategories = async (categoryId) => {
      const categoryItems = await getCategories(categoryId);
      categoryItems.map(async (singleCategory) => {
        const subCategories = await getCategories(singleCategory.id);
        const categoryItem: Category = {
          id: singleCategory.id,
          name: singleCategory.name,
          subCategories: subCategories,
        };
        if (isMounted) {
          setCategories((categories) => [...categories, categoryItem]);
        }
      });
    };

    fetchCategories(parentCategory.id);
    // toggleProductFilterPosition();

    return () => {
      isMounted = false;
    };
    // console.log("filtering");
  }, []);

  categories.sort((a, b) => {
    return a.id - b.id;
  });

  return (
    <div className={styles.filterContainer} id="prodFilter">
      <ProductSearch
        currentCategory={currentCategory}
        filterProducts={filterProducts}
        parentCategory={parentCategory}
      />
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
        className={`${styles.filterItems} ${
          showFilter
            ? "left-0 bg-white h-screen z-10 px-5"
            : "-left-full lg:left-0"
        }`}
      >
        <button
          className={`block ml-auto pr-5 lg:hidden`}
          onClick={() => setShowFilter(!showFilter)}
        >
          &#10005;
        </button>
        <h2 className="text-body border-b-2 border-body w-9/12 mb-3 ">
          Categories
        </h2>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <h3
                onClick={() => {
                  filterProducts({
                    id: category.id,
                    name: category.name,
                    searchKey: "",
                  });
                  setShowFilter(false);
                  window.scrollTo(0, filterScrollValue);
                }}
                className={`${
                  category.id === currentCategory.id ? styles.active : ""
                } ${
                  category.subCategories.length > 0 ||
                  category.name.includes("gamefowl")
                    ? "font-bold"
                    : ""
                }`}
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
                          filterProducts({
                            id: subCategory.id,
                            name: subCategory.name,
                            searchKey: "",
                          });
                          setShowFilter(false);
                          window.scrollTo(0, filterScrollValue);
                        }}
                        className={
                          subCategory.id === currentCategory.id
                            ? styles.active
                            : ""
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
