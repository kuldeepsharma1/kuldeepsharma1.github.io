export default function Loading() {
  return (
    <>

      <section>
        <div className="w-full py-24 animate-pulse">
          <div className="container mx-auto px-4">
            <div className="backdrop-blur-sm bg-white/80 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl container p-10 grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <div className="w-fit mx-auto lg:ml-0 bg-zinc-200 dark:bg-zinc-800 h-6 rounded-full mb-4"></div>
                  <div className="flex flex-col text-center lg:text-start">
                    <div className="h-12 lg:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-4 w-3/4 mx-auto lg:mx-0"></div>
                    <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full mt-4 w-1/2 mx-auto lg:mx-0"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 space-y-4 mt-10">
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="flex items-start space-x-4 p-2 rounded-xl">
                      <div className="rounded-lg bg-zinc-200 dark:bg-zinc-800 p-2 w-8 h-8"></div>
                      <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full  w-1/2 mx-auto lg:mx-0"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-square">
                <div className="bg-zinc-200 dark:bg-zinc-800 w-full h-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto w-full px-4 py-16 animate-pulse">
          <div className="sticky top-0 z-10 backdrop-blur-lg py-4 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 sm:h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full w-1/2"></div>
              <div className="flex items-center gap-2 rounded-lg p-1">
                <div className="p-2 rounded bg-zinc-200 dark:bg-zinc-800 w-8 h-8"></div>
                <div className="p-2 rounded bg-zinc-200 dark:bg-zinc-800 w-8 h-8"></div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-fit relative border bg-background dark:border-neutral-800 border-neutral-300 rounded-full flex gap-5 items-center justify-center p-6 backdrop-blur-2xl">
                {['posts', 'projects', 'events', 'others'].map((value) => (
                  <div
                    key={value}
                    className="flex-1 px-4 py-2 rounded-full bg-zinc-200 dark:bg-zinc-800 w-20 h-8"
                  ></div>
                ))}
              </div>
              <div className="pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <div key={`skeleton-card-${idx}`} >
                    <div className="rounded-lg bg-zinc-200 dark:bg-zinc-800 h-40"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="animate-pulse">
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex text-center justify-center items-center gap-4 flex-col">
                <div className="bg-zinc-200 dark:bg-zinc-800 rounded-full w-16 h-6"></div>
                <div className="flex gap-2 flex-col">
                  <div className="bg-zinc-200 dark:bg-zinc-800 rounded-full w-64 h-10 mx-auto"></div>
                  <div className="bg-zinc-200 dark:bg-zinc-800 rounded-full w-80 h-8 mx-auto mt-4"></div>
                </div>
              </div>

              <div className="max-w-3xl w-full mx-auto">
                <div className="w-full">
                  {[1, 2, 3, 4, 5, 6].map((index) => (
                    <div key={index} className="border-b border-zinc-200 dark:border-zinc-700 py-4">
                      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-full w-48 h-8 mb-2"></div>
                      <div className="bg-zinc-200 dark:bg-zinc-800 rounded-md w-full h-16 mt-2"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
