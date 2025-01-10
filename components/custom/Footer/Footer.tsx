import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-zinc-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-zinc-600 dark:text-neutral-400">
              © 2025 Kuldeep.
            </p>
          </div>

          <ul className="flex flex-wrap items-center">
            <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-500 dark:before:bg-neutral-600">
              <Link target="_blank" href={"https://x.com/kuldeepit1"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" >
                X (Twitter)
              </Link>
            </li>
            <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-500 dark:before:bg-neutral-600">
              <Link
                target="_blank"
                href={"https://www.instagram.com/kuldeep_sharma_2022/"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" >
                Instagram
              </Link>
            </li>
            <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-zinc-400 dark:text-neutral-500 dark:before:bg-neutral-600">
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/kuldeepsharma22/"}
                className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400">
                Linkedin
              </Link>
            </li>
            <li className="inline-block pe-4 text-xs">
              <Link
                target="_blank"
                href={"https://github.com/kuldeepsharma1"} className="text-xs text-zinc-500 underline hover:text-zinc-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400" >
                Github
              </Link>
            </li>
            <li className="inline-block">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
