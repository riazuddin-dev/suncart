"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    

    formState: { errors },
  } = useForm();

     const handleGoogle = async () => {
    try {
      const res = await authClient.signIn.social({
        provider: "google",
      });

      if (res?.data) {
        toast.success("Google Login successful 🎉")
        router.push("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Google login failed ❌");
    }
  };

  const handleRegister = async (data) => {
    const { name, email, password, image } = data;

    const res = await authClient.signUp.email({
      name,
      email,
      password,
      image
    });

    if (res?.data) {
      toast.success("Login successful 🎉")
      router.push("/login");
    } else {
      toast.error("already you have a account ❌");
    }

    
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account 🕶️
        </h2>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-white text-sm">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
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
              placeholder="Enter password"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("password", { required: true, minLength: 8 })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">
                Password must be at least 6 characters
              </p>
            )}
          </div>

{/* Photo URL */}
<div>
  <label className="text-white text-sm">Photo URL</label>
  <input
    type="text"
    placeholder="Enter your photo URL"
    className="w-full mt-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
    {...register("photo")}
  />
</div>

  
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 rounded-lg font-semibold transition"
          >
            Register
          </button>
 <div className="flex justify-center items-center gap-3">
            
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


        {/* link */}
        <div className="text-center mt-4 text-gray-200 text-sm">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;