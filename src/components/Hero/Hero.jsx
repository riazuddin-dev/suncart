"use client";

import React from "react";
import bg from "../../assets/Hero-baner.png";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative grid md:grid-cols-2 items-center min-h-[620px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        {/* Dark Gradient Overlay - Better Depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-transparent"></div>
        
        {/* Subtle Yellow Accent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>

        {/* Left Content - Main Text */}
        <div className="relative z-10 px-6 md:px-16 lg:px-20 py-12 md:py-0 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="uppercase tracking-[4px] text-yellow-400 text-sm font-medium mb-4">
              SUMMER COLLECTION 2026
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-[82px] font-black leading-none text-white mb-4">
              SHINE <span className="text-yellow-400">BRIGHT</span>
            </h1>

            <h2 className="text-4xl md:text-5xl font-bold text-white/90 mb-6">
              This Summer
            </h2>

            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 w-16 bg-yellow-400 rounded-full"></div>
              <p className="text-2xl font-semibold text-yellow-300">UP TO 50% OFF</p>
            </div>

            <p className="text-lg text-gray-200 mb-10 max-w-md">
              Premium UV-protected sunglasses crafted for style and comfort. 
              Limited summer drops — don’t miss out.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/products">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-green-950 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 shadow-lg">
                  Shop Summer Collection
                </button>
              </Link>

              <Link href="#featured">
                <button className="border-2 border-white/80 hover:border-white text-white font-medium px-8 py-4 rounded-2xl text-lg transition-all duration-300">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side - Floating Elements */}
        <div className="relative z-10 hidden md:flex items-center justify-center pr-10">
          <div className="relative">
            {/* Floating Discount Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-3xl p-6 shadow-2xl w-56 text-center transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <p className="text-green-700 text-sm font-semibold">LIMITED TIME</p>
              <h3 className="text-5xl font-black text-red-600 leading-none my-1">50%</h3>
              <p className="text-gray-600 font-medium">OFF EVERYTHING</p>
              <div className="text-[10px] text-gray-400 mt-3 tracking-widest">HURRY UP • ENDS SOON</div>
            </div>

            {/* Small Sunglasses Floating Accent (Optional) */}
            <div className="absolute -bottom-8 left-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/30">
              <p className="text-white text-xs text-center">✦ UV 400 Protection ✦</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 hidden md:flex flex-col items-center gap-2 text-white/70">
          <p className="text-xs tracking-widest">SCROLL TO EXPLORE</p>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;