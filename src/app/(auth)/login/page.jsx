"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "../../../lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;
    setLoading(true);

    try {
      const res = await authClient.signIn.email({
        email: email.trim(),
        password,
      });

      if (res?.error) {
        toast.error(res.error.message || "Login failed");
        return;
      }

      if (res?.data) {
        toast.success("Welcome back to SunCart");
        router.push("/");
        router.refresh();
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setGoogleLoading(true);
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.error(error);
      toast.error("Google login failed");
      setGoogleLoading(false);
    }
  };

  const busy = loading || googleLoading;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
        <div className="text-center mb-6">
          <p className="text-yellow-400 text-xs font-semibold tracking-[0.2em] uppercase">
            SunCart
          </p>
          <h2 className="text-3xl font-bold text-white mt-2">Welcome back</h2>
          <p className="text-white/70 text-sm mt-2">
            Sign in to browse premium sunglasses and manage your profile.
          </p>
        </div>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          <div>
            <label className="text-white text-sm">Email</label>
            <input
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">Email is required</p>
            )}
          </div>

          <div>
            <label className="text-white text-sm">Password</label>
            <input
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2.5 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-yellow-400"
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                Password is required (min 6 characters)
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={busy}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-2.5 rounded-lg transition font-semibold disabled:opacity-70"
          >
            {loading ? "Signing in…" : "Login"}
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="h-px bg-white/20 flex-1" />
            <span className="text-xs text-white/60">OR</span>
            <div className="h-px bg-white/20 flex-1" />
          </div>

          <button
            type="button"
            onClick={handleGoogle}
            disabled={busy}
            className="w-full flex items-center justify-center gap-2 bg-white text-black border border-[#e5e5e5] rounded-lg py-2.5 font-medium hover:bg-gray-50 transition disabled:opacity-70"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>
            {googleLoading ? "Connecting…" : "Continue with Google"}
          </button>
        </form>

        <div className="mt-5 rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-3 text-xs text-white/80 leading-relaxed">
          <p className="font-semibold text-yellow-300 uppercase tracking-wider text-[10px]">
            For reviewers
          </p>
          <p className="mt-1">
            Register a new account, then open{" "}
            <Link href="/products" className="text-yellow-300 underline">
              Products
            </Link>{" "}
            and your{" "}
            <Link href="/profile" className="text-yellow-300 underline">
              Profile
            </Link>
            .
          </p>
        </div>

        <div className="text-center mt-5 text-gray-200 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
