"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { CiLogin } from "react-icons/ci";
import { Button } from "@heroui/react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";

const Navigation = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

console.log(user?.image);
  

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4">
            <h1 className="text-3xl font-bold text-green-900">
              SUN<span className="text-yellow-500">CART</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10 text-gray-700 font-medium">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/profile">Profile</Link>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <FaSearch className="text-gray-600" />

            <Link href="/cart" className="relative">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
                3
              </span>
            </Link>

            {isPending ? (
              <span className="loading loading-ring loading-xl"></span>
            ) : user ? (
              <div className="flex  justify-center items-center gap-3">
                <h1>
                  <Link href={"/profile"}>
                 <Image src={user?.image} width={50} height={50} alt="logo" className=" rounded-full"></Image>
                  </Link>
                </h1>
                <button
                  className="btn"
                  onClick={async () => {
                    await authClient.signOut();
                  }}
                >
                  {" "}
                  <CiLogin />
                </button>
              </div>
            ) : (
              <div className="hidden md:flex gap-2">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </div>
            )}

            {/* 🔥 MOBILE BUTTON */}
            <button onClick={() => setOpen(!open)} className="lg:hidden">
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="/profile" onClick={() => setOpen(false)}>
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
