"use client";

import { useParams } from "next/navigation";
import products from "../../../../data/Product/Details.json";

const DetailsPage = () => {

  const { id } = useParams();
  const item = products.find((f) => f.id == id);

  if (!item) {
    return (
      <p className="text-center mt-10 text-white">
        Product not found
      </p>
    );
  }

  return (
    <section className="w-full  px-4 py-20 bg-black text-white">

      {/* Layout */}
      <div className="grid md:grid-rows-2 gap-10 items-center justify-center">

        {/* 🖼️ Image */}
        <div className="bg-gray-900 rounded-2xl flex items-center justify-center h-[400px] border border-white/10">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full object-contain p-6"
          />
        </div>

        {/* 📄 Details */}
        <div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white mb-2">
            {item.name}
          </h1>

          {/* Brand */}
          <p className="text-gray-400 mb-2">
            Brand: {item.brand}
          </p>

          {/* ⭐ Rating */}
          <div className="text-yellow-400 mb-3">
            ⭐⭐⭐⭐⭐ ({item.rating})
          </div>

          {/* 💰 Price */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-bold text-yellow-400">
              ${item.price}
            </p>
            <p className="text-gray-500 line-through">
              ${(item.price + 10).toFixed(2)}
            </p>
          </div>

          {/* 📦 Stock */}
          <p className="mb-3 text-sm text-gray-400">
            Stock: {item.stock} available
          </p>

          {/* 📝 Description */}
          <p className="text-gray-400 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* 🔘 Button */}
          <div className="flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition font-semibold">
              🛒 Add to Cart
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};

export default DetailsPage;