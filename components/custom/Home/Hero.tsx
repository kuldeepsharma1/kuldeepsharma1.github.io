'use client';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { Beam } from '../Beam';

export default function Hero({ name, role, desc }: { name: string, role: string, desc: string }) {
    return (
        <div className="relative w-full mx-auto  py-32 min-h-screen overflow-hidden">
            <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className=" w-full max-w-7xl mx-auto  z-0 ">
                <div className='flex flex-wrap justify-between items-center '>
                    <Beam
                        direction="bottom-left"
                        size="large"
                        className="-rotate-8"
                    />
                    <Beam
                        direction="bottom-left"
                        size="large"
                        className="-rotate-8"
                    />
                    <Beam
                        direction="bottom-right"
                        size="large"
                        className="-rotate-8"
                    />
                    <Beam
                        direction="bottom-right"
                        size="large"
                        className="-rotate-8"
                    />
                </div>
            </div>
            <section className="absolute inset-0 z-10 flex items-center justify-center  text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold mb-6 text-zinc-900 dark:text-white leading-tight tracking-tight">
                        {name}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 mb-10">
                        {role}
                    </h2>
                    <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 mb-12 max-w-xl mx-auto leading-relaxed">
                        {desc}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link
                            href="/works"
                            className="group w-full sm:w-auto px-7 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-base font-medium rounded-full shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:focus:ring-offset-black transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
                        >
                            View Projects
                            <ArrowRight className="inline h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="group w-full sm:w-auto px-7 py-3 bg-transparent text-zinc-700 dark:text-zinc-300 text-base font-medium rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-offset-black transition-colors duration-200 ease-in-out flex items-center justify-center gap-2"
                        >
                            Contact Me
                            <Mail className="inline h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
            <div className=" w-full max-w-7xl mx-auto  z-0 ">
                <div className='flex flex-wrap justify-between items-center '>
                    <div key="scattered-1" className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2">
                        <Beam
                            direction="top-right"
                            size="large"
                            className="-rotate-8"
                        />
                    </div>
                    <div key="scattered-2" className="absolute top-2/3 right-1/3 translate-x-1/2 -translate-y-1/2">
                        <Beam
                            direction="top-right"
                            size="large"
                            className="-rotate-8"
                        />
                    </div>
                    <div key="scattered-3" className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2">
                        <Beam
                            direction="bottom-right"
                            size="large"
                            className="-rotate-8"
                        />
                    </div>
                    <div key="scattered-4" className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                        <Beam
                            direction="bottom-right"
                            size="large"
                            className="-rotate-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}