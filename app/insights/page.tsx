'use client'
import Cta from '@/components/custom/cta/Cta'
import Insights from '@/components/custom/Insights/Insights'
import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { Check, } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
export default function page() {
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
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  return (
    <div>
      <TabSwitch
        index={4}
        primaryTab={{
          title: "Insights",
          count: 4,
          description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
        }}

        primaryChildren={
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
                    <Badge variant="outline"  className='w-fit mx-auto lg:ml-0 '>
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
        }
      />
      <section >
        <Insights
          posts={[
            { title: "How to Master TypeScript", category: 'asdsadasd', readTime: '20', img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "React 18 Features", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "Best Practices for JavaScript", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "Introduction to Next.js", img: "/assets/images/avatar.jpeg", link: "#" },
          ]}
          projects={[
            { title: "Portfolio Website", category: "hello", tech: ['asd', 'asd'], desc: "A personal portfolio website built with React and Tailwind CSS.", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "E-commerce Store", desc: "A full-stack e-commerce app with payment integration.", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "Blog Platform", desc: "A blogging platform with user authentication and content management.", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "Weather App", desc: "A simple weather app using React and OpenWeatherMap API.", img: "/assets/images/avatar.jpeg", link: "#" },
          ]}
          events={[
            { title: "ReactJS Conference", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "Frontend Masters Workshop", img: "/assets/images/avatar.jpeg", link: "#" },
            { title: "JavaScript Meetup", img: "/assets/images/avatar.jpeg", link: "#" },
          ]}
          others={[
            { title: "GitHub Repo", img: "/assets/images/avatar.jpeg", link: "https://github.com/" },
            { title: "LinkedIn Profile", img: "/assets/images/avatar.jpeg", link: "https://www.linkedin.com/" },
          ]}
        />
      </section>
      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <motion.div
              className="flex flex-col gap-10"
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="flex text-center justify-center items-center gap-4 flex-col"
                variants={variants}
              >
                <Badge variant="outline">FAQ</Badge>
                <div className="flex gap-2 flex-col">
                  <motion.h4
                    className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular"
                    variants={variants}
                  >
                    Questions About My Work
                  </motion.h4>
                  <motion.p
                    className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center"
                    variants={variants}
                  >
                    I’m a software engineer building tools like Rize and contributing to open-source at Hytek Org.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div
                className="max-w-3xl w-full mx-auto"
                variants={variants}
              >
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What do I do?</AccordionTrigger>
                    <AccordionContent>
                      I develop apps like Rize and ImageNet, and work on open-source projects with Hytek Org.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What’s my background?</AccordionTrigger>
                    <AccordionContent>
                      B.Tech in Computer Science, ex-Junior Developer, now a Software Engineer at Hytek Org since 2020.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What tools do I use?</AccordionTrigger>
                    <AccordionContent>
                      Next.js, React Native, TypeScript, Laravel, Tailwind CSS, and more.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What’s Rize?</AccordionTrigger>
                    <AccordionContent>
                      A productivity app on Google Play with 3,000+ installs to help manage tasks.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Why open-source?</AccordionTrigger>
                    <AccordionContent>
                      I believe in collaboration and sharing knowledge, driving Hytek Org’s mission.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>What’s next for me?</AccordionTrigger>
                    <AccordionContent>
                      Mastering AI/ML and building more impactful tech solutions.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Cta badgeText="Let&apos;s Build Together"
        title="Want to collaborate on something amazing?"
        description="I&apos;m always open to working on innovative projects in machine learning, AI, and software development. Whether it&apos;s a startup idea, a research project, or a side hustle, let&apos;s build something great together."
        readMoreLink="/insights"
        contactLink="/contact"
      />
    </div>
  )
}
