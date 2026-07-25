export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 h-10 w-56 animate-pulse rounded-lg bg-white/10" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="h-56 animate-pulse bg-white/10" />
              <div className="space-y-3 p-5">
                <div className="h-5 w-2/3 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-1/3 animate-pulse rounded bg-white/10" />
                <div className="h-10 w-full animate-pulse rounded-lg bg-white/10" />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Loading products…
        </p>
      </div>
    </div>
  );
}
