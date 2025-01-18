"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring } from "motion/react";

interface ScrollProgressProps {
  className?: string;
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r dark:from-[#ffffff] dark:via-[#b2b2b2] dark:to-[#d7d4d0] from-[#000000] via-[#1a1919] to-[#1b1a1a]",
        className,
      )}
      style={{
        scaleX,
      }}
    />
  );
}
