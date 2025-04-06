'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CircleDot, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Timeline as Time } from '@/types/about';


interface TimelineProps {
    timeline: Time[];
}
const Timeline: React.FC<TimelineProps> = ({ timeline }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 80%', 'end 20%'],
    });
    const smoothScrollYProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    const lineHeight = useTransform(smoothScrollYProgress, [0, 1], ['0%', '100%']);
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                stiffness: 90,
                damping: 12,
                duration: 0.7,
                delayChildren: 0.1,
                staggerChildren: 0.05,
            },
        },
        hover: {
            y: -8,
            scale: 1.04,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
            },
        },
    };
    return (
        <section>
            <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4"> My Professional Journey Through Time</h2>
            <div className='-ml-10 pr-4 '>
                <div
                    ref={containerRef}
                    className='relative w-full max-w-4xl mx-auto py-20   overflow-hidden'
                >
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-zinc-300/20 dark:bg-zinc-700/30 transform -translate-x-1/2">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-background via-foreground to-accent origin-top"
                            style={{ height: lineHeight }}
                        />
                    </div>
                    <div className="relative space-y-10 -">
                        {timeline.map((item, index) => {
                            return (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    className={cn(
                                        'relative flex md:items-center z-10',
                                        index % 2 === 0
                                            ? 'md:flex-row'
                                            : 'md:flex-row-reverse',
                                        'md:gap-10'
                                    )}
                                >
                                    <motion.div
                                        className="absolute left-1/2 top-3 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                                    >
                                        <div
                                            className={cn(
                                                'flex items-center justify-center',
                                                'w-8 h-8 rounded-full',
                                                'bg-zinc-800/10 dark:bg-zinc-900/80 backdrop-blur-sm',
                                                'border border-white/10',
                                                `shadow-lg shadow-primary/40 dark:shadow-primary/30`
                                            )}
                                        >
                                            <div className={cn(
                                                "flex items-center justify-center w-5 h-5 rounded-full",
                                                `bg-background`
                                            )}>
                                                <CircleDot
                                                    className='size-5 text-muted-foreground'
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                    <div className={cn(
                                        'w-full md:w-[calc(50%-2.5rem)]',
                                        index % 2 === 0
                                            ? 'pl-10 md:pl-0'
                                            : 'pl-10 md:pl-0 md:text-right'
                                    )}>
                                        <motion.div
                                            variants={cardVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            className={cn(
                                                'relative overflow-hidden bg-white/5 dark:bg-black/10 backdrop-blur-xl border border-white/10 dark:border-white/5 rounded-xl shadow-lg dark:shadow-2xl p-5 md:p-6 shadow-primary/10 dark:shadow-primary/5 transition-all duration-300 ease-out hover:border-foreground/20 dark:hover:border-foreground/15',
                                                index % 2 !== 0 ? 'md:text-left' : ''
                                            )}
                                        >
                                            <div className="absolute top-0 left-0 h-1 w-1/2 bg-gradient-to-r from-foreground to-transparent">
                                            </div>
                                            <Badge variant={'secondary'} className='mb-2'>    {item.year}</Badge>
                                            <h3 className={cn(
                                                "font-semibold  mb-2",
                                                index % 2 !== 0 ? 'md:text-left' : ''
                                            )}>
                                                {item.title}
                                            </h3>
                                            <Sparkles className="absolute bottom-2 right-2 w-4 h-4 opacity-50" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div >
                </div>
            </div>
        </section>
    );
};

export default Timeline;