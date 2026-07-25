"use client";

import Link from "next/link";
import { toast } from "react-toastify";

export default function ProductDetailActions({ product }) {
  const addToCart = () => {
    try {
      const existing = JSON.parse(localStorage.getItem("suncart_cart") || "[]");
      const next = Array.isArray(existing) ? existing : [];
      next.push({ ...product, quantity: 1 });
      localStorage.setItem("suncart_cart", JSON.stringify(next));
      toast.success(`${product.name} added to cart`);
    } catch {
      toast.error("Could not add to cart");
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        onClick={addToCart}
        className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition font-semibold"
      >
        Add to Cart
      </button>
      <Link
        href="/products"
        className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition font-semibold"
      >
        Back to products
      </Link>
    </div>
  );
}
