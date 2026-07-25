"use client";
import ProfileUpdateModal from "@/components/ProfileUpdateModal";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

import {
  MdOutlineDriveFileRenameOutline,
  MdOutlineMailOutline,
} from "react-icons/md";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-yellow-400 border-t-transparent" />
          <p className="text-sm text-gray-400">Loading profile…</p>
        </div>
      </div>
    );
  }
  
  const user = session?.user;
  
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
        <div className="max-w-sm text-center rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-xl font-semibold">Not logged in</p>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to view and update your SunCart profile.
          </p>
          <Link
            href="/login"
            className="mt-6 inline-flex rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black hover:bg-yellow-300 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    );
  }
  
  const HandelLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="w-full max-w-md p-6 rounded-3xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl">
        {/* Avatar */}
     <div className="flex justify-center mb-4">
  {user?.image ? (
    <img
      src={user.image}
      alt="user"
      className="w-20 h-20 rounded-full object-cover border-2 border-yellow-400 shadow-lg"
    />
  ) : (
    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-3xl font-bold shadow-lg">
      {user?.name?.charAt(0) || "U"}
    </div>
  )}
</div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-center">
          {user?.name || "Unknown User"}
        </h2>

        {/* Email */}
        <p className="text-center text-gray-300 text-sm mb-6">{user?.email}</p>

        {/* Tag */}
        <p className="text-center text-xs text-yellow-400 mb-6">
          🕶 Premium Sunglass Member
        </p>

        {/* Info Card */}
        <div className="bg-white/10 p-4 rounded-xl mb-6 border border-white/10">
          <p className="text-sm flex justify-center items-center gap-2">
            <MdOutlineDriveFileRenameOutline /><span className="font-semibold">{user?.name}</span>
          </p>
          <p className="text-sm mt-2 flex justify-center items-center gap-2">
            <MdOutlineMailOutline />{" "}
            <span className="font-semibold">{user?.email}</span>
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-3 mb-6 text-center">
          <div className="bg-white/10 p-3 rounded-xl">
            <p className="text-lg font-bold">12</p>
            <p className="text-xs text-gray-400">Orders</p>
          </div>
          <div className="bg-white/10 p-3 rounded-xl">
            <p className="text-lg font-bold">5</p>
            <p className="text-xs text-gray-400">Wishlist</p>
          </div>
          <div className="bg-white/10 p-3 rounded-xl">
            <p className="text-lg font-bold">⭐4.8</p>
            <p className="text-xs text-gray-400">Rating</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
         <ProfileUpdateModal></ProfileUpdateModal>

          <button
            onClick={() =>HandelLogout()}
            className="w-full bg-red-500 py-2 rounded-xl font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
