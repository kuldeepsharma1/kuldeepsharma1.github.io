"use client";
import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// Register ScrollTrigger in useLayoutEffect to avoid SSR issues
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (linksRef.current) {
        const links = Array.from(linksRef.current.querySelectorAll('li'));

        gsap.from(footerRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            end: "bottom bottom",
            toggleActions: "play none none reverse"
          }
        });

        gsap.from(links, {
          opacity: 0,
          x: -10,
          stagger: 0.1,
          duration: 0.4,
          scrollTrigger: {
            trigger: linksRef.current,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        });

        gsap.from(copyrightRef.current, {
          opacity: 0,
          y: 10,
          duration: 0.4,
          scrollTrigger: {
            trigger: copyrightRef.current,
            start: "top bottom",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={footerRef} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-zinc-200 dark:border-neutral-700">
        <ul ref={linksRef} className="flex justify-center items-center">
          <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-500 dark:before:bg-neutral-600">
            <Link target="_blank" href={"https://x.com/kuldeepit1"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-300 dark:hover:text-neutral-200" >
              X (Twitter)
            </Link>
          </li>
          <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-500 dark:before:bg-neutral-600">
            <Link
              target="_blank"
              href={"https://www.instagram.com/kuldeep_sharma_2022/"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-300 dark:hover:text-neutral-200" >
              Instagram
            </Link>
          </li>
          <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-300 dark:before:bg-neutral-200">
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/kuldeepsharma22/"}
              className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-300 dark:hover:text-neutral-200">
              Linkedin
            </Link>
          </li>
          <li className="inline-block pe-4 text-xs">
            <Link
              target="_blank"
              href={"https://github.com/kuldeepsharma1"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-300 dark:hover:text-neutral-200" >
              Github
            </Link>
          </li>

        </ul>
        <div ref={copyrightRef} className="flex justify-between items-center pt-4 gap-2">
          <div>
            <p className="text-xs text-zinc-600 dark:text-neutral-300">
              © 2025 Kuldeep.
            </p>
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}
