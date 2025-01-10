"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setTheme("dark")}
        type="button"
        className={`${
          theme === "dark" ? "hidden" : "flex"
        } relative justify-center items-center w-8 h-8 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
      >
        <span className="sr-only">Dark</span>
        <MoonIcon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("light")}
        type="button"
        className={`${
          theme === "light" ? "hidden" : "flex"
        } relative justify-center items-center w-8 h-8 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700`}
      >
        <span className="sr-only">Light</span>
        <SunIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
