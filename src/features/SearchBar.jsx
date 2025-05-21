import React from "react";
import SearchInput from "../features/SearchInput";
import SearchCheck from "../features/SearchCheck";
import "../style/search.css";
import "../style/productTable.css";
const SearchBar = () => {
  return (
    <div className="searchBar">
      <SearchInput></SearchInput>
      <SearchCheck></SearchCheck>
    </div>
  );
};

export default SearchBar;
