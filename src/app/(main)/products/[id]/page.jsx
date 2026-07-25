import Link from "next/link";
import getProductData from "@/lib/getProductData";
import ProductDetailActions from "./ProductDetailActions";

const DetailsPage = async ({ params }) => {
  const products = await getProductData();
  const { id } = await params;
  const item = products.find((f) => f.id == id);

  if (!item) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center bg-black text-white px-4 text-center">
        <p className="text-5xl mb-4">🕶️</p>
        <h1 className="text-2xl font-bold mb-2">Product not found</h1>
        <p className="text-gray-400 mb-6 text-sm max-w-sm">
          This product may have been removed or the link is incorrect.
        </p>
        <Link
          href="/products"
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Browse products
        </Link>
      </section>
    );
  }

  return (
    <section className="w-full px-4 py-20 bg-black text-white">
      <div className="grid md:grid-rows-2 gap-10 items-center justify-center max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-2xl flex items-center justify-center h-[400px] border border-white/10">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full object-contain p-6"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{item.name}</h1>
          <p className="text-gray-400 mb-2">Brand: {item.brand}</p>
          <div className="text-yellow-400 mb-3">
            ⭐⭐⭐⭐⭐ ({item.rating})
          </div>
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-bold text-yellow-400">${item.price}</p>
            <p className="text-gray-500 line-through">
              ${(item.price + 10).toFixed(2)}
            </p>
          </div>
          <p className="mb-3 text-sm text-gray-400">
            Stock: {item.stock} available
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {item.description}
          </p>
          <ProductDetailActions product={item} />
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;
