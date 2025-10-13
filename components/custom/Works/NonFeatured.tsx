'use client';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Tag } from 'lucide-react';
import Image from 'next/image';
import FallbackImage from '../FallbackImg';
import Link from 'next/link';
import { DeveloperProject } from '@/types/works';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProjectFeatured {
    item: DeveloperProject;
}

export default function NonFeatured({ item }: ProjectFeatured) {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(sectionRef.current, {
            y: 30,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom-=100",
                end: "bottom center",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    return (
        <section ref={sectionRef} className="relative">
            <div className="w-full px-4 py-16">
                <div className="mx-auto relative group">
                    {/* Premium Card Container */}
                    <div className="relative z-10 bg-gradient-to-b from-white to-zinc-100/50 dark:from-zinc-900 dark:to-black/50 rounded-[2rem] p-1 backdrop-blur-xl">
                        <div className="bg-white/50 dark:bg-black/50 rounded-[1.9rem] p-8 md:p-12 border border-zinc-200/50 dark:border-zinc-800/50 overflow-hidden">
                            <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                                {/* Content Section */}
                                <div className="flex-1 space-y-8">
                                    <div className="space-y-6">
                                        <Badge variant="outline" 
                                            className="py-2 px-5 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-zinc-300 dark:border-zinc-700 text-base">
                                            <Tag className="size-4 mr-2 opacity-70" />
                                            {item.category}
                                        </Badge>
                                        
                                        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                                            {item.title}
                                        </h2>

                                        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="space-y-4">
                                        <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">TECHNOLOGIES</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.technologies?.map((tech, index) => (
                                                <Badge key={index} variant="outline"
                                                    className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-black hover:scale-105 transition-all duration-300 border-zinc-200 dark:border-zinc-800">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Button */}
                                    <Link href={`/works/${item.slug}`}
                                        className="group inline-flex items-center gap-3 bg-gradient-to-br from-zinc-800 to-black dark:from-white dark:to-zinc-200 text-white dark:text-black rounded-full py-2 px-4 text-lg font-medium transition-all duration-300  hover:shadow-xl">
                                        View Project Details
                                        <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:transform group-hover:-rotate-45" />
                                    </Link>
                                </div>

                                {/* Image Section */}
                                <div className="lg:w-[45%] relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                    <div className="relative bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-2 transition-transform duration-500 hover:scale-[1.02]">
                                        {item.images.thumbnail ? (
                                            <Image
                                                src={item.images.thumbnail}
                                                alt={item.title}
                                                className="rounded-xl object-cover shadow-lg"
                                                width={600}
                                                height={400}
                                                priority
                                            />
                                        ) : (
                                            <FallbackImage 
                                                alt={item.title} 
                                                className="rounded-xl aspect-[4/3] w-full" 
                                            />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Decorative Elements */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-pink-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-10 -z-10" />
                </div>
            </div>
        </section>
    );
}