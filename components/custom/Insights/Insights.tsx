'use client';
import React, { useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { TextPlugin } from "gsap/TextPlugin";
import { Flip } from "gsap/Flip";
import Image from 'next/image';
import { LayoutGrid, List, Tag, Clock2, Calendar1 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { InsightsData, Other, Event, Post } from '@/types/Insights';
import FallbackImage from '../FallbackImg';
import { DeveloperProject } from '@/types/works';
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger, CustomEase, TextPlugin, Flip);
CustomEase.create("customBounce", "M0,0 C0.14,0 0.27,0.06 0.32,0.87 0.35,1 0.4,1 1,1");

interface ProjectItemCardProps {
    item: DeveloperProject;
    ctaText: string;
    isListView?: boolean;
}
interface ItemCardProps {
    item: Post | Event | Other;
    ctaText: string;
    isListView?: boolean;
}
const ProjectCard: React.FC<ProjectItemCardProps> = ({ item, ctaText, isListView }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (cardRef.current) {
            const card = cardRef.current;
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
            // Set initial state
            gsap.set(card, { autoAlpha: 0, scale: 0.8 });
            // Animate entrance
            timeline
                .to(card, {
                    duration: 0.8,
                    autoAlpha: 1,
                    scale: 1,
                    ease: "customBounce",
                    clearProps: "scale"
                })
                .from(card.querySelector("h3") as Element, {
                    duration: 0.6,
                    y: 30,
                    autoAlpha: 0,
                    ease: "power3.out"
                }, "-=0.4")
                .from(card.querySelector("p") as Element, {
                    duration: 0.6,
                    y: 20,
                    autoAlpha: 0,
                    ease: "power2.out"
                }, "-=0.3")
                .from(card.querySelector("a") as Element, {
                    duration: 0.4,
                    x: -20,
                    autoAlpha: 0,
                    ease: "back.out(1.7)"
                }, "-=0.2");

            // Hover effect for image if available
            if (item.images.thumbnail) {
                const imageContainer = card.querySelector(".image-container");
                if (imageContainer) {
                    const hoverTween = gsap.to(imageContainer, {
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out",
                        paused: true
                    });
                    card.addEventListener("mouseenter", () => hoverTween.play());
                    card.addEventListener("mouseleave", () => hoverTween.reverse());
                }
            }
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-2xl hover:shadow-neutral-300/10 dark:hover:shadow-neutral-800/10 transition-all duration-500 ${isListView ? 'flex flex-row gap-8' : 'flex flex-col'
                }`}
        >
            {item.images.thumbnail && (
                <div className={`overflow-hidden ${isListView ? 'w-80 h-52' : 'aspect-[16/9]'}`}>
                    <div className="relative h-full w-full">
                        {item.images.thumbnail ? (
                            <Image
                                fill
                                src={item.images.thumbnail}
                                alt={item.title}
                                className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                                sizes={isListView ? "320px" : "(max-width: 768px) 100vw, 50vw"}
                                priority
                            />
                        ) : (
                            <FallbackImage alt={item.title} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            )}
            <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 ">
                    {'category' in item && item.category && (
                        <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                            <Tag className='size-2.5 mr-1' />    {item.category}
                        </Badge>
                    )}
                    {item.releaseDate && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center">
                            <Calendar1 className="w-3 h-3 mr-1 stroke-2" />
                            {item.releaseDate}
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                    {item.title}
                </h3>
                {item.description && (
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-2">
                        {item.description}
                    </p>
                )}
                <div className='flex flex-row flex-wrap justify-between items-center space-y-4 mt-4'>
                    {item.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.technologies.map((t, i) => (
                                <Badge key={i} variant={'outline'}>
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    )}

                    {item.links.source && (
                        <Link
                            href={`/works/${item.slug}`}
                            className=" text-sm font-medium ">
                            <span className='hover:underline underline-offset-4'>{ctaText}</span>
                            <span className="ml-1 transition-transform group-hover:translate-x-1 ">→</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};
const ItemCard: React.FC<ItemCardProps> = ({ item, ctaText, isListView }) => {
    const { title, img, link } = item;
    const desc = 'desc' in item ? item.desc : null;
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (cardRef.current) {
            const card = cardRef.current;
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            });
            // Set initial state
            gsap.set(card, { autoAlpha: 0, scale: 0.8 });
            // Animate entrance
            timeline
                .to(card, {
                    duration: 0.8,
                    autoAlpha: 1,
                    scale: 1,
                    ease: "customBounce",
                    clearProps: "scale"
                })
                .from(card.querySelector("h3") as Element, {
                    duration: 0.6,
                    y: 30,
                    autoAlpha: 0,
                    ease: "power3.out"
                }, "-=0.4")
                .from(card.querySelector("p") as Element, {
                    duration: 0.6,
                    y: 20,
                    autoAlpha: 0,
                    ease: "power2.out"
                }, "-=0.3")
                .from(card.querySelector("a") as Element, {
                    duration: 0.4,
                    x: -20,
                    autoAlpha: 0,
                    ease: "back.out(1.7)"
                }, "-=0.2");

            // Hover effect for image if available
            if (img) {
                const imageContainer = card.querySelector(".image-container");
                if (imageContainer) {
                    const hoverTween = gsap.to(imageContainer, {
                        scale: 1.1,
                        duration: 0.4,
                        ease: "power2.out",
                        paused: true
                    });
                    card.addEventListener("mouseenter", () => hoverTween.play());
                    card.addEventListener("mouseleave", () => hoverTween.reverse());
                }
            }
        }
    }, []);

    return (
        <div
            ref={cardRef}
            className={`group bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 rounded-2xl overflow-hidden border border-neutral-200/50 dark:border-neutral-800/50 hover:shadow-2xl hover:shadow-neutral-300/10 dark:hover:shadow-neutral-800/10 transition-all duration-500 ${isListView ? 'flex flex-row gap-8' : 'flex flex-col'
                }`}
        >
            {img && (
                <div className={`overflow-hidden ${isListView ? 'w-80 h-52' : 'aspect-[16/9]'}`}>
                    <div className="relative h-full w-full">
                        {img ? (
                            <Image
                                fill
                                src={img}
                                alt={title}
                                className="object-cover transition duration-700 group-hover:scale-105 group-hover:brightness-110"
                                sizes={isListView ? "320px" : "(max-width: 768px) 100vw, 50vw"}
                                priority
                            />
                        ) : (
                            <FallbackImage alt={title} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            )}
            <div className="flex-1 p-8">
                <div className="flex items-center gap-3 mb-4 ">
                    {'category' in item && item.category && (
                        <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                            <Tag className='size-2.5 mr-1' />    {item.category}
                        </Badge>
                    )}
                    {'date' in item && item.date && (
                        <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center">
                            <Calendar1 className="w-3 h-3 mr-1 stroke-2" />
                            {item.date}
                        </span>
                    )}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                    {title}
                </h3>
                {desc && (
                    <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-2">
                        {desc}
                    </p>
                )}
                <div className='flex flex-row flex-wrap justify-between items-center space-y-4 mt-4'>
                    <div>
                        {'readTime' in item && item.readTime && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center transition-colors hover:text-neutral-700 dark:hover:text-neutral-200">
                                            <Clock2 className="w-3 h-3 mr-1 stroke-2 text-neutral-600 dark:text-neutral-300" />
                                            {item.readTime}
                                        </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-auto  rounded-full shadow-md bg-white dark:bg-zinc-800 text-sm text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-zinc-700">
                                        <div className="flex items-center space-x-2">
                                            <Clock2 className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                                            <p className="font-medium">Time to Read This</p>
                                        </div>

                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-sm font-medium ">
                            <span className='hover:underline underline-offset-4'>{ctaText}</span>
                            <span className="ml-1 transition-transform group-hover:translate-x-1 ">→</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
const SkeletonLoader: React.FC<{ isListView?: boolean }> = ({ isListView }) => {
    return (
        <div className={`flex ${isListView ? 'flex-row gap-6' : 'flex-col'} animate-pulse`}>
            <div className="bg-zinc-300 dark:bg-zinc-700 w-72 h-48 rounded-md"></div>
            <div className="flex-1 p-6">
                <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded-md mb-3"></div>
                <div className="h-4 bg-zinc-300 dark:bg-zinc-700 rounded-md mb-2"></div>
                <div className="h-3 bg-zinc-300 dark:bg-zinc-700 rounded-md"></div>
            </div>
        </div>
    );
};
export default function Insights({ posts, projects, events, others }: InsightsData) {
    const [isListView, setIsListView] = useState(false);
    const tabsListRef = useRef<HTMLDivElement>(null);
    const mainRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);

    useGSAP(() => {
        const ctx = gsap.context(() => {

            gsap.from("h2", {
                duration: 1,
                y: -50,
                opacity: 0,
                ease: "elastic.out(1, 0.75)",
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top 60%",
                }
            });

            const tabButtons = tabsListRef.current?.querySelectorAll("button");
            if (tabButtons) {
                tabButtons.forEach((btn, i) => {

                    btn.addEventListener("mouseenter", () => {
                        gsap.to(btn, {
                            scale: 1.1,
                            duration: 0.3,
                            ease: "power2.out",

                        });
                    });

                    btn.addEventListener("mouseleave", () => {
                        gsap.to(btn, {
                            scale: 1,
                            duration: 0.3,
                            ease: "power2.out",

                        });
                    });
                    btn.addEventListener("click", () => {
                        gsap.to(btn, {
                            scale: 0.95,
                            duration: 0.2,
                            ease: "elastic.out(1, 0.3)",
                            yoyo: true,
                            repeat: 1
                        });
                    });


                });
            }
        }, mainRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="max-w-7xl mx-auto w-full px-4 py-24">
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-xl py-6 mb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <h2 className="text-4xl md:text-7xl pb-1.5 font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
                        Insights
                    </h2>
                    <div className="hidden md:flex items-center gap-2  rounded-lg p-1">
                        <button
                            onClick={() => setIsListView(false)}
                            className={`p-2 rounded ${!isListView ? 'bg-white dark:bg-zinc-700 shadow-sm' : ''}`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setIsListView(true)}
                            className={`p-2 rounded ${isListView ? 'bg-white dark:bg-zinc-700 shadow-sm' : ''}`}
                        >
                            <List className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <Tabs defaultValue="posts" className="w-full  " onValueChange={(value) => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 1000);
                }}>
                    <TabsList
                        ref={tabsListRef}
                        className={
                            'inline-flex bg-neutral-100 dark:bg-neutral-900 p-1 py-6 rounded-full'
                        }
                    >
                        {['posts', 'projects', 'events', 'others'].map((value) => (
                            <TabsTrigger
                                key={value}
                                value={value}
                                className="px-6 py-2.5 text-sm font-medium rounded-full transition-all data-[state=active]:bg-white dark:data-[state=active]:bg-neutral-800 data-[state=active]:shadow-sm"
                            >
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className='pt-10'>
                        <TabsContent value="posts">
                            <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, idx) => (
                                        <SkeletonLoader key={`skeleton-post-${idx}`} isListView={isListView} />
                                    ))
                                ) : posts.length > 0 ? posts.map((post, idx) => (
                                    <ItemCard key={`post-${idx}`} item={post} ctaText="Read article" isListView={isListView} />
                                )) : (
                                    <p className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-8">
                                        No posts available yet
                                    </p>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="projects">
                            <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, idx) => (
                                        <SkeletonLoader key={`skeleton-post-${idx}`} isListView={isListView} />
                                    ))
                                ) : projects.length > 0 ? projects.map((project, idx) => (
                                    <ProjectCard key={`project-${idx}`} item={project} ctaText="View Project" isListView={isListView} />
                                )) : (
                                    <p className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-8">
                                        No projects showcased currently.
                                    </p>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="events">
                            <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, idx) => (
                                        <SkeletonLoader key={`skeleton-post-${idx}`} isListView={isListView} />
                                    ))
                                ) : events.length > 0 ? events.map((event, idx) => (
                                    <ItemCard key={`event-${idx}`} item={event} ctaText="Learn More" isListView={isListView} />
                                )) : (
                                    <p className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-8">
                                        No events listed at the moment.
                                    </p>
                                )}
                            </div>
                        </TabsContent>

                        <TabsContent value="others">
                            <div className={`grid ${isListView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-6`}>
                                {loading ? (
                                    Array.from({ length: 6 }).map((_, idx) => (
                                        <SkeletonLoader key={`skeleton-post-${idx}`} isListView={isListView} />
                                    ))
                                ) : others.length > 0 ? others.map((other, idx) => (
                                    <ItemCard key={`other-${idx}`} item={other} ctaText="More Info" isListView={isListView} />
                                )) : (
                                    <p className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-8">
                                        No other items available.
                                    </p>
                                )}
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}