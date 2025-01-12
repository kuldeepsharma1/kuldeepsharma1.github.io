"use client";
import React, { useState } from "react";

interface TabItem {
  title: string;
  count: number;
  description: string;
}

interface RouteProps {
  index: number;
  primaryTab: TabItem;
  secondaryTab?: TabItem;
  primaryChildren: React.ReactNode;
  secondaryChildren?: React.ReactNode;
}

export default function TabSwitch({
  index,
  primaryTab,
  secondaryTab,
  primaryChildren,
  secondaryChildren
}: RouteProps) {
  const [activeTab, setActiveTab] = useState<'primary' | 'secondary'>('primary');

  const formattedIndex = index.toString().padStart(2, '0');

  return (
    <>
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4">
            {/* Index Number */}
            <div className="col-span-1 pt-2 sm:pt-20">
              <span className="text-2xl font-medium text-black/80 dark:text-white/80">
                {formattedIndex}
              </span>
            </div>

            {/* Tabs */}
            <div className="col-span-full pt-10 flex flex-col justify-center items-center sm:flex-row gap-6 sm:gap-10">
              <div className="flex flex-col">
                <button
                  onClick={() => setActiveTab('primary')}
                  className="text-left  focus:outline-none"
                >
                  <h1 className={`text-5xl sm:text-[7rem] font-[500] inline-flex items-center uppercase  ${activeTab === 'primary'
                    ? 'text-black dark:text-white'
                    : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
                    }`}>
                    {primaryTab.title}
                    <span className="text-2xl ml-2 text-black/60 dark:text-white/60">
                      ({primaryTab.count.toString().padStart(2, '0')})
                    </span>
                  </h1>
                </button>

                {secondaryTab && (
                  <button
                    onClick={() => setActiveTab('secondary')}
                    className="text-left focus:outline-none uppercase"
                  >
                    <h1 className={`text-5xl sm:text-[7rem] font-[500] inline-flex items-center ${activeTab === 'secondary'
                      ? 'text-black dark:text-white'
                      : 'text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white'
                      }`}>
                      {secondaryTab.title}
                      <span className="text-2xl ml-2 text-black/60 dark:text-white/60">
                        ({secondaryTab.count.toString().padStart(2, '0')})
                      </span>
                    </h1>
                  </button>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="col-span-full max-w-lg mx-auto mt-6">
              <p className="text-lg text-black/80 dark:text-white/80">
                {activeTab === 'primary'
                  ? primaryTab.description
                  : secondaryTab?.description
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        {activeTab === 'primary' ? primaryChildren : secondaryChildren}
      </section>
    </>
  );
}
