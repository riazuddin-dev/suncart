"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { CiLogin } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const Navigation = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-3xl font-bold tracking-wide">
              SUN<span className="text-yellow-400">CART</span>
            </h1>
          </Link>

          {/* 🔥 DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">
            <li><Navbar href="/">Home</Navbar></li>
            <li><Navbar href="/products">Products</Navbar></li>
            <li><Navbar href="/profile">Profile</Navbar></li>
          </ul>

          {/* RIGHT */}
          <div className="flex items-center gap-5">

            <FaSearch className="cursor-pointer hover:text-yellow-400 transition" />

            <Link href="/cart" className="relative">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs px-1 rounded-full">
                
              </span>
            </Link>

            {isPending ? (
              <span className="loading loading-ring loading-md"></span>
            ) : user ? (
              <div className="flex items-center gap-3">

                <Link href="/profile">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      width={40}
                      height={40}
                      alt="user"
                      className="rounded-full border-2 border-yellow-400"
                    />
                  ) : (
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black font-bold">
                      {user?.name?.charAt(0)}
                    </div>
                  )}
                </Link>

                <button
                  onClick={() => authClient.signOut()}
                  className="hover:text-red-400"
                >
                  <CiLogin size={20} />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex gap-4">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </div>
            )}

            <button onClick={() => setOpen(!open)} className="lg:hidden">
              <FiMenu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <ul className="px-4 py-4 flex flex-col gap-4 text-gray-300">
            <li><Navbar href="/">Home</Navbar></li>
            <li><Navbar href="/products">Products</Navbar></li>
            <li><Navbar href="/profile">Profile</Navbar></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;