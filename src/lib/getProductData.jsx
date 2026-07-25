const getProductData = async () => {
  try {
    const res = await fetch("https://suncart-psi.vercel.app/product.json", {
      cache: "no-cache",
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

export default getProductData;
