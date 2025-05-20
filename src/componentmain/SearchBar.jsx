import React from "react";
import SearchInput from "../component/SearchInput";
import SearchCheck from "../component/SearchCheck";
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
