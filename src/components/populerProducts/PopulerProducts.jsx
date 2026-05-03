"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdShoppingCart } from "react-icons/md";
import "animate.css";

const reviews = [
  { name: "Rahim", text: "Amazing quality! Looks premium.", rating: 5 },
  { name: "Karim", text: "Very comfortable and stylish.", rating: 4 },
  { name: "Nusrat", text: "Worth the price. Loved it!", rating: 5 },
];

const PopulerProducts = ({products}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="bg-black text-white py-16 px-4">

      {/* TITLE */}
      <h1 className="text-center text-5xl font-extrabold mb-12 animate__animated animate__fadeInDown">
        🔥 Popular <span className="text-yellow-400">Products</span>
      </h1>

      <div className="space-y-10 max-w-6xl mx-auto">

        {products.slice(0, 3).map((g) => (
          <div
            key={g.id}
            className="grid md:grid-cols-4 gap-6 items-center bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-5 border border-white/10 shadow-md hover:shadow-yellow-400/30 hover:scale-[1.01] transition-all duration-500 group animate__animated animate__fadeInUp"
          >

            {/*  IMAGE */}
            <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden rounded-xl">
              <div className="absolute w-32 h-32 bg-yellow-400/20 blur-3xl rounded-full"></div>

              <Image
                src={g.image}
                width={280}
                height={200}
                alt={g.name}
                className="object-contain z-10 group-hover:scale-105 group-hover:-rotate-1 transition duration-500"
              />
            </div>

            {/*  CONTENT */}
            <div className="md:col-span-2">
              <h2 className="text-lg font-semibold group-hover:text-yellow-400 transition duration-300">
                {g.name}
              </h2>

              <p className="text-sm text-gray-400 mb-1">{g.brand}</p>

              {/*  rating */}
              <div className="text-yellow-400 text-sm mb-2">
                {"⭐".repeat(Math.round(g.rating))}
                <span className="text-gray-500 ml-2 text-xs">
                  ({g.rating})
                </span>
              </div>

              {/* 💰 price */}
              <div className="flex items-center gap-2 mb-4">
                <p className="text-yellow-400 font-bold text-xl">
                  ${g.price}
                </p>
                <p className="text-gray-500 line-through text-sm">
                  ${(g.price + 10).toFixed(2)}
                </p>
              </div>

              {/* buttons */}
              <div className="flex gap-3">
                <Link href={`/products/${g.id}`} className="flex-1">
                  <button className="w-full bg-yellow-400 text-black py-2 rounded-xl hover:bg-yellow-300 transition duration-300 font-semibold hover:shadow-lg hover:shadow-yellow-400/30">
                    View Details
                  </button>
                </Link>

                <button
                  onClick={() => {
                    setSelectedProduct(g);
                    setQuantity(1);
                  }}
                  className="border border-yellow-400 text-yellow-400 px-4 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300 text-xl hover:shadow-md hover:shadow-yellow-400/30"
                >
                  <MdShoppingCart />
                </button>
              </div>
            </div>

            {/*  REVIEWS */}
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 h-52 overflow-y-auto">
              <h3 className="text-sm font-semibold mb-3 text-yellow-400">
                ⭐ Reviews
              </h3>

              <div className="space-y-3">
                {reviews.map((r, i) => (
                  <div
                    key={i}
                    className="bg-black/40 p-3 rounded-lg hover:bg-black/70 transition duration-300"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-yellow-400 text-black flex items-center justify-center rounded-full text-xs font-bold">
                        {r.name[0]}
                      </div>
                      <p className="text-xs font-semibold">{r.name}</p>
                      <span className="text-[10px] text-yellow-400 ml-auto">
                        ✔ Verified
                      </span>
                    </div>

                    <div className="text-yellow-400 text-xs">
                      {"⭐".repeat(r.rating)}
                    </div>

                    <p className="text-xs text-gray-400 mt-1">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🛒 MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 animate__animated animate__fadeIn">

          <div className="bg-gray-900 text-white rounded-2xl p-6 w-[350px] shadow-2xl border border-yellow-400/30 animate__animated animate__zoomIn hover:shadow-yellow-400/20">

            <h2 className="text-xl font-bold mb-2">
              {selectedProduct.name}
            </h2>

            <p className="text-gray-400 mb-4">
              Price: ${selectedProduct.price}
            </p>

            {/* quantity */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() =>
                  setQuantity(quantity > 1 ? quantity - 1 : 1)
                }
                className="px-3 py-1 bg-gray-700 rounded"
              >
                -
              </button>

              <span className="text-lg font-bold">{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-700 rounded"
              >
                +
              </button>
            </div>

            {/* actions */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  const cartItem = { ...selectedProduct, quantity };
                  console.log("Added to cart:", cartItem);
                  setSelectedProduct(null);
                }}
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg w-full font-semibold hover:bg-yellow-300 transition"
              >
                Add to Cart
              </button>

              <button
                onClick={() => setSelectedProduct(null)}
                className="border border-gray-500 px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PopulerProducts;