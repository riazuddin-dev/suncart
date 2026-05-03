import React from "react";
import products from "@/data/products.json";
import Link from "next/link";
import AllProducts from "@/components/populerProducts/AllProducts";
import ExtraSection from "@/components/extraSection/ExtraSection";
import getProductData from "@/lib/getProductData";

const ProductsPage = async () => {
 const products= await getProductData()

  return (
  <>
  <AllProducts products={products}></AllProducts>
  <ExtraSection></ExtraSection>
  </>
  );
};

export default ProductsPage;