"use client";

import Link from "next/link";
import "animate.css";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">

      {/* 😎 Big Icon */}
      <div className="text-7xl mb-4 animate__animated animate__bounce">
        🕶️
      </div>

      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-4 animate__animated animate__fadeInDown">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-4">
        Lost your <span className="text-yellow-400">shades?</span>
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-md mb-8">
        The page you are looking for doesn’t exist or has been moved.
        Let’s get you back to something stylish 😎
      </p>

      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">

        <Link href="/">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition duration-300 hover:scale-105">
            🏠 Back Home
          </button>
        </Link>

        <Link href="/products">
          <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300 hover:scale-105">
            🛍️ Browse Products
          </button>
        </Link>

      </div>

      {/* Bottom small text */}
      <p className="text-xs text-gray-600 mt-10">
        SunCart • Premium Sunglasses Store
      </p>

    </div>
  );
};

export default NotFound;