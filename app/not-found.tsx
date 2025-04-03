
'use client';
import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';




export default function NotFound() {

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const bgTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: ['-1%', '1%'],
      transition: {
        opacity: { duration: 1, delay: 0.2 },
        y: {
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse' as const,
          ease: 'easeInOut',
        },
      },
    },
  };

  const contentVariants = (delay: number) => ({
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: 'easeOut' },
    },
  });

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      className="
        min-h-screen
        flex flex-col items-center justify-center
        p-6 sm:p-8
       
        overflow-hidden
        relative
      "
    >
      {/* Giant Background "404" Text */}
      <motion.div
        variants={bgTextVariants}
        className="
          absolute inset-0 z-0
          flex items-center justify-center
          overflow-hidden
          pointer-events-none
        "
        aria-hidden="true"
      >
        <span
          className="
            text-[50vh] sm:text-[60vh] md:text-[75vh] lg:text-[85vh]
            opacity-60
            text-zinc-300 dark:text-zinc-700
            select-none
            leading-none
          "
        >
          404
        </span>
      </motion.div>


      {/* Foreground Content */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.div variants={iconVariants}>
          <AlertTriangle
            className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-500 dark:text-zinc-400 mb-5 sm:mb-8"
            strokeWidth={1.5}
          />
        </motion.div>

        <motion.h1
          variants={contentVariants(0.6)}
          className="
            text-3xl sm:text-4xl md:text-5xl
            font-semibold
            mb-4
            text-black dark:text-white
          "
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={contentVariants(0.7)}
          className="
            text-base sm:text-lg
            text-zinc-600 dark:text-zinc-400
            max-w-md
            mb-8 sm:mb-10
            leading-relaxed
          "
        >
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or perhaps never existed.
        </motion.p>

        <motion.div variants={contentVariants(0.8)}>
          <Link
            href="/"
            className="
              group
              inline-flex items-center justify-center
              bg-black dark:bg-white
              text-white dark:text-black
              hover:bg-zinc-800 dark:hover:bg-zinc-200
              font-medium
              py-3 px-7
              rounded-full
              shadow-md hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white dark:focus:ring-offset-black
              transition-all duration-200 ease-out
            "
          >
            <ArrowLeft
              className="
                w-5 h-5 mr-2
                transition-transform duration-200 ease-out
                group-hover:-translate-x-1
              "
            />
            Return to Homepage
          </Link>
        </motion.div>

        <motion.p
          variants={contentVariants(0.9)}
          className="mt-12 text-sm text-zinc-400 dark:text-zinc-500"
        >
          Need help?{' '}
          <Link
            href="/contact"
            className="
              text-zinc-600 hover:text-black
              dark:text-zinc-300 dark:hover:text-white
              underline underline-offset-2
              transition-colors duration-200
            "
          >
            Contact Us
          </Link>
        </motion.p>
      </div>
    </motion.div>
  );
}