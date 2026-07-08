import SkeletonCard from "./SkeletonCard";

function HomeSkeleton() {
  return (
    <div className="animate-pulse p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="skeleton h-9 w-60 rounded-xl" />
        <div className="skeleton h-8 w-24 rounded-full" />
      </div>

      {/* Search */}
      <div
        className="
          mb-8
          rounded-3xl
          border border-white/30
          bg-white/40
          p-6
          backdrop-blur-xl
          dark:border-white/10
          dark:bg-slate-900/40
        "
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="skeleton h-12 flex-1 rounded-2xl" />
          <div className="skeleton h-12 w-52 rounded-2xl" />
        </div>
      </div>

      {/* Products */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default HomeSkeleton;
