import React from "react";
import products from "@/data/products.json";
import Link from "next/link";
import AllProducts from "@/components/populerProducts/AllProducts";
import ExtraSection from "@/components/extraSection/ExtraSection";

const ProductsPage = () => {
  return (
  <>
  <AllProducts></AllProducts>
  <ExtraSection></ExtraSection>
  </>
  );
};

export default ProductsPage;