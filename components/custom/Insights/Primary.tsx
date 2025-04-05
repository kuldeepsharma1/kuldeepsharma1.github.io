'use client'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Check, } from 'lucide-react'
import Image from 'next/image'

export default function Primary() {
      const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      };
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      };
    return (
        <div className="w-full py-24 ">
            <div className="container mx-auto px-4">
                <div className="backdrop-blur-sm bg-white/80 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl container p-10 grid grid-cols-1 gap-12 items-center lg:grid-cols-2 ">
                    <motion.div
                        className="flex  flex-col"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="flex flex-col" variants={fadeInUp}>
                            <Badge variant="outline" className='w-fit mx-auto lg:ml-0 '>
                                Insights
                            </Badge>
                            <div className="flex  flex-col  text-center lg:text-start">
                                <motion.h2
                                    className="text-6xl lg:text-8xl  font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/40 dark:via-primary/50 dark:to-primary/10"
                                    variants={fadeInUp}
                                >
                                    My Personal Journey
                                </motion.h2>
                                <motion.p
                                    className="text-xl leading-snug mt-4 text-zinc-600 dark:text-zinc-300"
                                    variants={fadeInUp}
                                >
                                    Sharing my experiences, updates, and what&apos;s happening in my world.
                                </motion.p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 space-y-4 mt-10 "
                            variants={staggerContainer}
                        >
                            {[
                                {
                                    title: "Current Projects",
                                    desc: "Updates on my latest coding and design projects.",
                                    icon: <Check className="w-5 h-5" />,
                                },
                                {
                                    title: "Learning & Growth",
                                    desc: "Insights into new skills I'm acquiring and challenges I'm overcoming.",
                                    icon: <Check className="w-5 h-5" />,
                                },
                                {
                                    title: "Personal Reflections",
                                    desc: "Thoughts and experiences shaping my professional development.",
                                    icon: <Check className="w-5 h-5" />,
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-4 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
                                    variants={fadeInUp}
                                >
                                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1">{item.title}</h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className="relative rounded-2xl overflow-hidden aspect-square group"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Image
                            src="/assets/images/insights/g.jpeg"
                            alt="Personal Portfolio Insights"
                            width={600}
                            height={600} priority
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
