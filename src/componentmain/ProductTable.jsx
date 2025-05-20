import React from "react";
import ProductTableRow from "../component/ProductTableRow";
import { ProductCategory } from "../component/ProductCategory";
import { Products } from "../component/Products";
import "../style/productTable.css";
const ProductTable = () => {
  return (
    <div className="productTable">
      <ProductTableRow></ProductTableRow>
      <ProductCategory text="Fruits"></ProductCategory>
      <Products text="Apple" price="$1" />
      <ProductCategory text="Vegetables"></ProductCategory>
      <Products text="Cucumber" price="$2"></Products>
    </div>
  );
};

export default ProductTable;
