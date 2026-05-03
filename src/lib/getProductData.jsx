import React from "react";

 const getProductData = async () => {
  const res = await fetch("http://localhost:3000/product.json");
  return res.json();
};

export default getProductData;
