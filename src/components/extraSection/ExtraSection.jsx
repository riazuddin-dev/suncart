import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import rayban from "../../assets/rayban.png"
import Gucci from "../../assets/gucchi.png"
import okly from "../../assets/oakly.png"
import parada from "../../assets/parada.png"


const brands = [
  {
    name: "Ray-Ban",
    logo: rayban,
  },
  {
    name: "Gucci",
    logo:Gucci ,
  },
  {
    name: "Prada",
    logo: parada,
  },
  {
    name: "Oakley",
    logo:okly,
  },
];

const ExtraSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 space-y-16">

      {/* 🌞 SUMMER CARE TIPS */}
      <div>
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          🌞 Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-gradient-to-br from-[#f8f5ef] to-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">💧 Stay Hydrated</h3>
            <p className="text-gray-600 text-sm">
              Drink enough water to stay fresh and active in summer.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f8f5ef] to-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">🧴 Use Sunscreen</h3>
            <p className="text-gray-600 text-sm">
              Protect your skin from UV rays with quality sunscreen.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#f8f5ef] to-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-lg font-semibold mb-2">🕶️ Wear Sunglasses</h3>
            <p className="text-gray-600 text-sm">
              Keep your eyes safe and stylish with UV sunglasses.
            </p>
          </div>

        </div>
      </div>

      {/* 🏷️ TOP BRANDS (ANIMATED) */}
      <div>
        <h2 className="text-3xl font-bold text-green-900 text-center mb-10">
          🏷️ Our Partners
        </h2>

        <div className="overflow-hidden">

       <Marquee>
           <div className="flex  text-centerjustify-center gap-6 animate-scroll">

            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="min-w-[180px] h-24 bg-white rounded-xl shadow flex items-center justify-center hover:shadow-xl transition p-4"
              >
               

                 <Image
                  src={b.logo}
                  alt={b.name}
                  width={100}
                  height={50}
                  className="grayscale hover:grayscale-0 transition"
                />
               
              </div>
            ))}

          </div>
       </Marquee>

        </div>
      </div>

    </section>
  );
};

export default ExtraSection;