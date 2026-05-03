export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="flex flex-col items-center gap-4">

        {/* spinner */}
        <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>

        {/* text */}
        <p className="text-gray-400 text-sm">
          Loading Products...
        </p>

      </div>

    </div>
  );
}