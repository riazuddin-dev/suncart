import React from "react";
import products from "../../data/products.json";
import Link from "next/link";
import Image from "next/image";

const reviews = [
  {
    name: "Rahim",
    text: "Amazing quality! Looks premium.",
    rating: 5,
  },
  {
    name: "Karim",
    text: "Very comfortable and stylish.",
    rating: 4,
  },
  {
    name: "Nusrat",
    text: "Worth the price. Loved it!",
    rating: 5,
  },
];

const PopulerProducts = () => {


    return (
        <div className="space-y-8">
        <h1 className="text-center text-5xl my-7 font-bold underline">🔥 Popular Products </h1>

      {products.slice(0, 3).map((g) => (
        <div
          key={g.id}
          className="grid md:grid-cols-4 gap-6 items-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-4 group"
        >

          {/* 🖼️ Image */}
          <div className="h-52 bg-[#f8f5ef] flex items-center justify-center rounded-xl overflow-hidden">
            <Image
              src={g.image}
              width={350}
              height={300}
              alt={g.name}
              className="object-contain p-4 group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* 📄 Content */}
          <div className="md:col-span-2">

            <h2 className="font-semibold text-lg text-gray-800 group-hover:text-green-700 transition">
              {g.name}
            </h2>

            <p className="text-sm text-gray-500 mb-1">{g.brand}</p>

            {/* ⭐ Rating */}
            <div className="flex items-center text-yellow-500 text-sm mb-2">
              ⭐⭐⭐⭐⭐
              <span className="text-gray-400 ml-2 text-xs">
                ({g.rating})
              </span>
            </div>

            {/* 💰 Price */}
            <div className="flex items-center gap-2 mb-4">
              <p className="text-green-800 font-bold text-xl">
                ${g.price}
              </p>
              <p className="text-gray-400 line-through text-sm">
                ${(g.price + 10).toFixed(2)}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <Link href={`/products/${g.id}`} className="flex-1">
                <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                  View Details
                </button>
              </Link>

              <button className="bg-white border border-green-600 text-green-600 px-4 rounded-xl hover:bg-green-600 hover:text-white transition">
                🛒
              </button>
            </div>
          </div>

          {/* ⭐ ADVANCED REVIEW PANEL */}
          <div className="bg-[#f8f5ef] p-4 rounded-xl shadow-sm h-52 overflow-y-auto">

            <h3 className="font-semibold text-sm mb-3 text-gray-700">
              ⭐ Reviews
            </h3>

            <div className="space-y-3">

              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="bg-white p-3 rounded-lg shadow hover:shadow-md transition"
                >

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full text-xs">
                      {r.name[0]}
                    </div>
                    <p className="text-xs font-semibold">{r.name}</p>
                    <span className="text-[10px] text-green-600 ml-auto">
                      ✔ Verified
                    </span>
                  </div>

                  {/* Stars */}
                  <div className="text-yellow-500 text-xs">
                    {"⭐".repeat(r.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-xs text-gray-600 mt-1">
                    {r.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      ))}

    </div>
  );
};

export default PopulerProducts;