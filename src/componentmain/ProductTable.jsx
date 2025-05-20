import React from "react";
import ProductTableRow from "../component/ProductTableRow";
import { ProductCategory } from "../component/ProductCategory";
import { Products } from "../component/Products";
import "../style/productTable.css";
const ProductTable = () => {
  return (
    <div className="productTable">
      <ProductTableRow></ProductTableRow>
      <ProductCategory></ProductCategory>
      <Products></Products>
      <ProductCategory></ProductCategory>
      <Products></Products>
    </div>
  );
};

export default ProductTable;
