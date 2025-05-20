import React from "react";

export const ProductCategory = ({ text }) => {
  return (
    <div className="productCategory">
      <p>
        <b>{text}</b>
      </p>
    </div>
  );
};
