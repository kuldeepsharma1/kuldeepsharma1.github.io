import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Post } from "@/types/Insights";
import FallbackImage from "../FallbackImg";
import { Calendar1, Clock2, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


interface UpdatesProps {
    title?: string;
    posts: Post[];
}
export default function Updates({ posts, title }: UpdatesProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 5000);
    }, [api, current]);


    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <h2 className="text-4xl sm:text-6xl md:text-7xl tracking-tighter lg:max-w-xl font-bold text-center md:text-left uppercase">{title && title}</h2>
                <Link
                    className="hidden lg:block bg-foreground text-white dark:text-black  font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition transform"
                    href={'/insights'}
                >
                    View Insights
                </Link>

            </div>
            <Carousel
                setApi={setApi}
                className="w-full py-8 md:py-16"
            >
                <CarouselContent>
                    {posts.map((post, index) => (
                        <CarouselItem
                            key={index}
                            className="relative flex sm:basis-1/2 h-[28rem] md:h-96 "
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col lg:flex-row space-x-4 bg-gradient-to-br from-neutral-50 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-black/30 "
                            >
                                <div className="relative w-full lg:w-1/2 overflow-hidden">
                                    {post.img ? <>
                                        <Image
                                            width={400}
                                            height={600}
                                            alt={post.title}
                                            src={post.img}
                                            className="w-full h-full object-cover object-center sm:object-top  transition-transform duration-500 hover:scale-105 rounded-3xl"
                                        />
                                        <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-black/30 dark:from-black/60 to-transparent" />
                                    </> : <FallbackImage alt={post.title} className="w-screen sm:w-auto sm:px-10 " />}
                                </div>
                                <figure className="relative px-3 py-4 md:px-4 md:py-4 lg:w-2/3 flex flex-col justify-between ">
                                    <div className="min-h-48">
                                        <div className="flex items-center gap-3 mb-4">
                                            {post.category ? (
                                                <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                                                    <Tag className='size-2.5 mr-1' />    {post.category}
                                                </Badge>
                                            ) : <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                                                <Tag className='size-2.5 mr-1' /> General
                                            </Badge>}
                                            {post.date && (
                                                <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center">
                                                    <Calendar1 className="w-3 h-3 mr-1 stroke-2" />
                                                    {post.date}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">
                                            {post.title}
                                        </p>
                                        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed line-clamp-2">
                                            {post.desc}</p>
                                    </div>
                                    <figcaption className=" border-t dark:border-white/10 pt-6 flex flex-row  items-center  ">
                                        <div className="flex-1">
                                            {post.readTime && (
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <span className=" text-xs text-neutral-500 dark:text-neutral-400 flex items-center transition-colors hover:text-neutral-700 dark:hover:text-neutral-200">
                                                                <Clock2 className="w-3 h-3 mr-1 stroke-2 text-neutral-600 dark:text-neutral-300" />
                                                                {post.readTime}
                                                            </span>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="-ml-32  rounded-full shadow-md bg-white dark:bg-zinc-800 text-sm text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-zinc-700">
                                                            <div className="flex items-center space-x-2">
                                                                <Clock2 className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
                                                                <p className="font-medium">Time to Read This</p>
                                                            </div>

                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            )}
                                        </div>
                                        <a
                                            href={post.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center text-sm font-medium  ">
                                            <span className='hover:underline underline-offset-4'>Read article</span>
                                            <span className="ml-1 transition-transform group-hover:translate-x-1 ">→</span>
                                        </a>
                                    </figcaption>
                                </figure>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 ">
                    <div className="flex gap-2">
                        {posts.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${current === index
                                    ? "bg-black dark:bg-white w-4"
                                    : "bg-black/30 dark:bg-white/30"
                                    }`}
                                onClick={() => {
                                    api?.scrollTo(index);
                                    setCurrent(index);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </Carousel>
            <div className="text-center pt-10">
                <Link className=" lg:hidden bg-foreground text-white dark:text-black  font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition transform " href={'/insights'}> View Insights</Link>
            </div>
        </>
    )
}
