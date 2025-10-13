export default function Loading() {
  return (
    <section className="py-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-1 pt-2 sm:pt-20">
            <div className="w-10 h-6 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
          </div>
          <div className="col-span-full pt-10 flex flex-col justify-center items-center sm:flex-row gap-6 sm:gap-10">
            <div className="flex flex-col">
              <div className="w-96 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2" />
              <div className="w-96 h-20 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-2" />
            </div>
          </div>
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
  );
}