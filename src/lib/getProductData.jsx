
 const getProductData = async () => {
  const res = await fetch("https://suncart-psi.vercel.app/product.json", {cache:"no-cache"} );
  return res.json();
};

export default getProductData;
