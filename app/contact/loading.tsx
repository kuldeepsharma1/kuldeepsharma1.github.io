export default function Loading() {
  return (
    <div>
      <section className="py-16 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Index Number Skeleton */}
            <div className="col-span-1 pt-2 sm:pt-20">
              <div className="w-10 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
            </div>

            {/* Tabs Skeleton */}
            <div className="col-span-full pt-10 flex flex-col justify-center items-center sm:flex-row gap-6 sm:gap-10">
              <div className="flex flex-col">
                <div className="w-96 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2" />

              </div>
            </div>

            {/* Description Skeleton */}
            <div className="col-span-full max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="w-96 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-2" />
                <div className="w-96 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-2" />
                <div className="w-96 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-6 py-10 sm:py-20 animate-pulse">
        <div className="max-w-sm">
          <div className="h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-4 w-3/4"></div>
          <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-4 w-1/2"></div>
          <div className="space-y-2">
            <div className="w-full h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
            <div className="w-3/4 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
            <div className="w-1/2 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="max-w-sm ml-auto space-y-4">
            <div className="w-full h-12 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
            <div className="w-full h-12 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
            <div className="w-full h-12 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
            <div className="w-full h-10 bg-zinc-200 dark:bg-zinc-800 rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="animate-pulse px-6 py-10 ">
        <div className="flex flex-row justify-between items-center">
          <div className="w-96 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
          <div className="hidden lg:block w-32 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
        </div>
     
        <div className="text-center pt-10">
          <div className="lg:hidden w-32 h-10 bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
}