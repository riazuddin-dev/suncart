"use client"

import { useParams } from "next/navigation";
import products from "../../../../data/Product/Details.json";
import { ImSteam } from "react-icons/im";

const DetailsPage = ({ params }) => {
    
    const {id} =useParams()
    console.log(id);
   const item= products.find(f=> f.id == id)

  


  if (!item) {
    return <p className="text-center mt-10">Product not found</p>;
  }

  return (
    <section className="container mx-auto px-4 py-12">

      {/* 🧱 Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* 🖼️ Image */}
        <div className="bg-[#f8f5ef] rounded-2xl flex items-center justify-center h-[400px]">
          <img
            src={item.image}
            alt={item.name}
            className="max-h-full object-contain p-6"
          />
        </div>

        {/* 📄 Details */}
        <div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-green-900 mb-2">
            {item.name}
          </h1>

          {/* Brand */}
          <p className="text-gray-500 mb-2">
            Brand: {item.brand}
          </p>

          {/* ⭐ Rating */}
          <div className="text-yellow-500 mb-3">
            ⭐⭐⭐⭐⭐ ({item.rating})
          </div>

          {/* 💰 Price */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-2xl font-bold text-green-700">
              ${item.price}
            </p>
            <p className="text-gray-400 line-through">
              ${(item.price + 10).toFixed(2)}
            </p>
          </div>

          {/* 📦 Stock */}
          <p className="mb-3 text-sm text-gray-600">
            Stock: {item.stock} available
          </p>

          {/* 📝 Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {item.description}
          </p>

          {/* 🔘 Buttons */}
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              🛒 Add to Cart
            </button>

          </div>

        </div>
      </div>

    </section>

   
  );
};

export default DetailsPage;