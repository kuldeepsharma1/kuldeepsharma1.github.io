import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Testimonial } from "@/app/contact/page";
import { motion } from "framer-motion";
import Link from "next/link";


interface UpdatesProps {
    title?: string;
    testimonials: Testimonial[]
}

export default function Updates({ testimonials, title }: UpdatesProps) {
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
                opts={{ loop: true }}
                setApi={setApi}
                className="w-full py-8 md:py-16"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="relative flex sm:basis-1/2 h-[28rem] md:h-96"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col lg:flex-row space-x-4 bg-gradient-to-br from-neutral-50 dark:from-neutral-900 to-neutral-100 dark:to-neutral-800 rounded-3xl overflow-hidden shadow-2xl border-2 border-black/30 "
                            >
                                <div className="relative w-full lg:w-1/2 overflow-hidden">
                                    <Image
                                        width={400}
                                        height={600}
                                        alt={testimonial.name}
                                        src={'/assets/images/avatar.jpeg'}
                                        className="w-full h-full object-cover object-center sm:object-top  transition-transform duration-500 hover:scale-105 rounded-3xl"
                                    />
                                    <div className="absolute rounded-3xl inset-0 bg-gradient-to-t from-black/30 dark:from-black/60 to-transparent" />
                                </div>
                                <figure className="relative p-6 md:p-8 lg:w-2/3 flex flex-col justify-between ">
                                    <blockquote>
                                        <p className="relative text-base md:text-lg lg:text-xl font-semibold text-black/90 dark:text-white/90 leading-relaxed">
                                            <span
                                                aria-hidden="true"
                                                className="absolute -left-5 -top-5 text-3xl text-black dark:text-white opacity-20"
                                            >
                                                “
                                            </span>
                                            {testimonial.quote}
                                            <span
                                                aria-hidden="true"
                                                className="absolute right-0 -bottom-8 text-3xl text-black dark:text-white opacity-20"
                                            >
                                                ”
                                            </span>
                                        </p>
                                    </blockquote>
                                    <figcaption className="mt-6 border-t dark:border-white/10 pt-6">
                                        <p className="text-lg font-semibold text-black dark:text-white mb-1">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm font-medium bg-gradient-to-r from-[#ff5555] via-[#d5ff1b] to-[#ffffff] bg-clip-text text-transparent">
                                            {testimonial.role}
                                        </p>
                                    </figcaption>
                                </figure>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="flex gap-2">
                        {testimonials.map((_, index) => (
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
            <div className="text-center">
                <Link className=" lg:hidden bg-foreground text-white dark:text-black  font-semibold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition transform " href={'/insights'}> View Insights</Link>
            </div>
        </>
    )
}
