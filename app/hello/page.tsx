// app/page.tsx
"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hello() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(heroTitleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        heroSubtitleRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ctaRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-black">
    
      <main className="max-w-7xl mx-auto px-4 pt-20">
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center">
          <h1
            ref={heroTitleRef}
            className="text-5xl md:text-7xl font-bold tracking-tight text-black dark:text-white mb-6"
          >
            Welcome to My Portfolio
          </h1>
          <p
            ref={heroSubtitleRef}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
          >
            I&apos;m Kuldeep Sharma, a passionate developer creating innovative solutions with modern technologies.
          </p>
          <button
            ref={ctaRef}
            className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <Link href="/works">Explore My Work</Link>
          </button>
        </section>

        <section className="py-20">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Face Attendance System",
                desc: "Web-based attendance using face recognition",
              },
              {
                title: "Encryption Tool",
                desc: "End-to-end encrypted messaging system",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl"
              >
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-gray-500 dark:text-gray-400">
        <p>© 2025 Kuldeep Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}