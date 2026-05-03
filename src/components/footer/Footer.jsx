"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10">

      {/* 🔥 TOP */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* 🌞 Brand */}
        <div>
          <h2 className="text-2xl font-extrabold mb-3">
            SUN<span className="text-yellow-400">CART</span>
          </h2>

          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop shop for premium sunglasses. Stay stylish,
            stay protected, and shine brighter every season 😎
          </p>

          {/* ✨ small glow line */}
          <div className="w-12 h-[2px] bg-yellow-400 mt-4"></div>
        </div>

        {/* 🔗 Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-yellow-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-yellow-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-yellow-400 transition">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* 📞 Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-yellow-400">
            Contact
          </h3>

          <p className="text-sm text-gray-400 mb-1">
            📧 support@suncart.com
          </p>
          <p className="text-sm text-gray-400 mb-1">
            📞 +880 1234-567890
          </p>
          <p className="text-sm text-gray-400">
            📍 Dhaka, Bangladesh
          </p>
        </div>

        {/* 🌐 Social */}
        <div>
          <h3 className="font-semibold mb-4 text-yellow-400">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300 cursor-pointer">
              <FaLinkedin />
            </div>

          </div>
        </div>

      </div>

      {/* 🔻 Bottom */}
      <div className="border-t border-white/10 text-center py-5 text-sm text-gray-500">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-semibold">
            SunCart
          </span>{" "}
          — All rights reserved.
        </p>

        {/* 🔥 small tagline */}
        <p className="text-xs mt-1 text-gray-600">
          Designed with 🖤 for premium style
        </p>

      </div>
    </footer>
  );
};

export default Footer;