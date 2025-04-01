export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-100 dark:bg-zinc-900">
      <div className="w-full max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Page Title Skeleton */}
          <div className="h-8 w-2/3 bg-zinc-300 dark:bg-zinc-700 rounded-md animate-pulse"></div>
          <div className="h-4 w-1/3 bg-zinc-300 dark:bg-zinc-700 rounded-md animate-pulse"></div>

          {/* Tabs Skeleton */}
          <div className="w-full flex justify-center gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="h-10 w-24 bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"
              ></div>
            ))}
          </div>

          {/* Content Skeleton Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-white dark:bg-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 animate-pulse"
              >
                <div className="w-full h-52 bg-zinc-300 dark:bg-zinc-700"></div>
                <div className="p-6">
                  <div className="h-5 bg-zinc-300 dark:bg-zinc-700 rounded-md w-3/4 mb-3"></div>
                  <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded-md w-5/6 mb-2"></div>
                  <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded-md w-2/3"></div>
                  <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded-md w-1/3 mt-4"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Skeleton */}
          <div className="w-full flex flex-col items-center gap-2 mt-10">
            <div className="h-4 w-32 bg-zinc-300 dark:bg-zinc-700 rounded-md animate-pulse"></div>
            <div className="h-3 w-20 bg-zinc-300 dark:bg-zinc-700 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
