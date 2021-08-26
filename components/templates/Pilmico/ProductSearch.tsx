import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

const ProductSearch = ({ currentCategory, filterProducts }) => {
  const [searchKey, setSearchKey] = useState("");
  const handleSearch = (event, searchKey) => {
    if (
      (event.type === "keydown" && event.key === "Enter") ||
      event.type === "click"
    ) {
      filterProducts({ ...currentCategory, searchKey: searchKey });
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setSearchKey(event.target.value);
  };

  return (
    <div className="flex justify-center mb-5 px-10 lg:px-0 lg:justify-start  ">
      <input
        type="text"
        name="search"
        id="search"
        className="border-red border-2 border-r-0 px-3 py-1 w-full rounded-l-xl lg:w-2/3 focus:outline-none "
        placeholder="Search"
        onKeyDown={(event) => {
          handleSearch(event, searchKey);
        }}
        onChange={handleInputChange}
      />
      <button
        className="border-red border-2 border-l-0 text-h3 px-1 rounded-r-xl text-body bg-alternate"
        onClick={(event) => {
          handleSearch(event, searchKey);
        }}
      >
        <MdSearch />
      </button>
    </div>
  );
};

export default ProductSearch;
