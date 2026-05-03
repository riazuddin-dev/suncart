"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ProfileUpdateModal = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const HandelUpdate = async (data) => {
    try {
      setLoading(true);

      const { name, url } = data;

      await authClient.updateUser({
        name,
        image: url, // 🔥 important (url → image)
      });

      // success
      reset();

      document.getElementById("profile_modal").close();

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔘 Button */}
      <button
        className="btn bg-yellow-400 text-black hover:bg-yellow-300 transition"
        onClick={() => document.getElementById("profile_modal").showModal()}
      >
        Update Profile
      </button>

      {/* 🪟 Modal */}
      <dialog id="profile_modal" className="modal">
        <div className="modal-box bg-gray-900 text-white border border-yellow-400/20">

          {/* Title */}
          <h3 className="font-bold text-xl mb-5 text-center">
            Update <span className="text-yellow-400">Profile</span>
          </h3>

          {/* FORM */}
          <form onSubmit={handleSubmit(HandelUpdate)} className="space-y-4">

            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-black text-white border-white/20 focus:border-yellow-400"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  Name is required
                </p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <input
                type="text"
                placeholder="Enter image URL"
                className="input input-bordered w-full bg-black text-white border-white/20 focus:border-yellow-400"
                {...register("url")}
              />
            </div>

            {/* 🔥 Buttons */}
            <div className="modal-action flex gap-2">

              {/* cancel */}
              <button
                type="button"
                className="btn bg-gray-700 hover:bg-gray-600"
                onClick={() =>
                  document.getElementById("profile_modal").close()
                }
              >
                Cancel
              </button>

              {/* submit */}
              <button
                type="submit"
                className="btn bg-yellow-400 text-black hover:bg-yellow-300 flex items-center gap-2"
                disabled={loading}
              >
                {loading && (
                  <span className="loading loading-spinner loading-sm"></span>
                )}
                {loading ? "Updating..." : "Save Changes"}
              </button>

            </div>

          </form>
        </div>
      </dialog>
    </>
  );
};

export default ProfileUpdateModal;