import React from "react";
import ProductTable from "../componentmain/ProductTable";
import SearchBar from "../componentmain/SearchBar";
export const FilterableTab = () => {
  return (
    <div className="productTab">
      <SearchBar></SearchBar>
      <ProductTable></ProductTable>
    </div>
  );
};
