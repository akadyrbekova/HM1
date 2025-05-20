import React from "react";

export const Products = ({ text, price }) => {
  return (
    <div className="products">
      <div className="productsRow">
        <div className="productsRow2">
          <p>{text}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};
