"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);


  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex space-x-2">
      {theme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          type="button"
          className="flex relative justify-center items-center w-8 h-8 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          <span className="sr-only">Switch to Light Mode</span>
          <SunIcon className="w-4 h-4" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          type="button"
          className="flex relative justify-center items-center w-8 h-8 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
        >
          <span className="sr-only">Switch to Dark Mode</span>
          <MoonIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
