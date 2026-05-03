"use client";

import Link from "next/link";
import React from "react";
import products from "@/data/products.json";

const AllProducts = () => {
  return (
    <section className="w-full px-4 py-12 bg-black text-white">

      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold">
          🕶️ Summer <span className="text-yellow-400">Sunglasses</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Discover trendy styles for your summer vibe
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="relative bg-gray-900 rounded-2xl shadow-md hover:shadow-yellow-400/20 transition-all duration-500 overflow-hidden group border border-white/10"
          >
            {/* Badge */}
            <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full z-20 font-medium">
              {index % 2 === 0 ? "NEW" : "-20%"}
            </span>

            {/* Image */}
            <div className="h-64 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h2 className="font-semibold text-lg text-white group-hover:text-yellow-400 transition-colors">
                {product.name}
              </h2>

              <p className="text-sm text-gray-400 mb-2">
                {product.brand}
              </p>

              {/* Rating */}
              <div className="flex items-center text-yellow-400 text-sm mb-3">
                ⭐ {product.rating}
                <span className="text-gray-500 ml-2 text-xs">
                  ({product.rating})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <p className="text-yellow-400 font-bold text-2xl">
                  ${product.price}
                </p>
                <p className="text-gray-500 line-through text-sm">
                  ${(product.price + 10).toFixed(2)}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Link href={`/products/${product.id}`} className="flex-1">
                  <button className="w-full bg-yellow-400 text-black py-3 rounded-xl hover:bg-yellow-300 transition font-medium">
                    View Details
                  </button>
                </Link>

                <button className="bg-black border-2 border-yellow-400 text-yellow-400 px-4 rounded-xl hover:bg-yellow-400 hover:text-black transition">
                  🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;