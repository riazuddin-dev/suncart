"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ✅ Email/Password Login
  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const res = await authClient.signIn.email({
        email,
        password,
      });

      if (res?.data) {
        router.push("/");
      } else {
        alert("Login failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong ❌");
    }
  };

  // ✅ Google Login
  const handleGoogle = async () => {
    try {
      const res = await authClient.signIn.social({
        provider: "google",
      });

      if (res?.data) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("Google login failed ❌");
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* form card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 😎
        </h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-white text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-green-400"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">Password is required</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition font-semibold"
          >
            Login
          </button>
          {/* Social Buttons */}
          <div className="flex justify-center items-center gap-3">
            <span className="text-sm text-white"> Login With Google</span>
            {/* Google */}
            <button
              type="button"
              onClick={handleGoogle}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Login with Google
            </button>

    
          </div>
        </form>

        {/* Register Link */}
        <div className="text-center mt-4 text-gray-200 text-sm">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-green-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;