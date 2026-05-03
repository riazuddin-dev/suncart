"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import "animate.css";

import rayban from "../../assets/rayban.png";
import Gucci from "../../assets/gucchi.png";
import okly from "../../assets/oakly.png";
import parada from "../../assets/parada.png";

const brands = [
  { name: "Ray-Ban", logo: rayban },
  { name: "Gucci", logo: Gucci },
  { name: "Prada", logo: parada },
  { name: "Oakley", logo: okly },
];

const ExtraSection = () => {
  return (
    <section className="bg-black text-white py-20 px-4 space-y-20">

      {/* 🌞 SUMMER CARE */}
      <div>
        <h2 className="text-3xl font-bold text-center animate__animated animate__fadeInDown">
          🌞 Summer <span className="text-yellow-400">Care Tips</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* card */}
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-yellow-400/20 hover:shadow-lg transition duration-500 group">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
              💧 Stay Hydrated
            </h3>
            <p className="text-gray-400 text-sm">
              Drink enough water to stay fresh and active in summer.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-yellow-400/20 hover:shadow-lg transition duration-500 group">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
              🧴 Use Sunscreen
            </h3>
            <p className="text-gray-400 text-sm">
              Protect your skin from UV rays with quality sunscreen.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:shadow-yellow-400/20 hover:shadow-lg transition duration-500 group">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-yellow-400 transition">
              🕶️ Wear Sunglasses
            </h3>
            <p className="text-gray-400 text-sm">
              Keep your eyes safe and stylish with UV sunglasses.
            </p>
          </div>

        </div>
      </div>

      {/* 🏷️ BRANDS */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
          🏷️ Our <span className="text-yellow-400">Partners</span>
        </h2>

        <div className="overflow-hidden">

          <Marquee pauseOnHover speed={40} gradient={false}>
            <div className="flex gap-8">

              {[...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="min-w-[180px] h-24 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center hover:scale-105 hover:border-yellow-400 transition duration-500"
                >
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={100}
                    height={50}
                    className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition duration-500"
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