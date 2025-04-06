'use client'

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { GithubIcon } from "../icon";
import CertificatesMarquee from "./CertificatesMarquee";
import Skill from "./Skill";
import Hero from "./Hero";



const AboutMeSnippet = () => (
    <section className="py-24 md:py-32 ">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start">
                <div className="md:col-span-1 relative aspect-[3/4] rounded-lg overflow-hidden group border border-zinc-200 dark:border-zinc-800">

                    <Image
                        src="/assets/images/avatar.jpeg"
                        alt="Portrait of John Doe"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-3xl md:text-4xl font-medium mb-8 text-zinc-900 dark:text-white tracking-tight">
                        About Me
                    </h2>
                    <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-300 text-base lg:text-lg leading-relaxed space-y-5">
                        <p>
                            With a foundation in Computer Science and{' '}
                            <strong className="font-semibold text-zinc-800 dark:text-white">5+ years</strong> of professional experience, I specialize in building robust and scalable web applications.
                        </p>
                        <p>
                            My focus is on writing clean, maintainable code and leveraging modern technologies like{' '}
                            <strong className="font-semibold text-zinc-800 dark:text-white">React, Next.js, Node.js, and TypeScript</strong>. I enjoy tackling complex challenges and architecting solutions that prioritize performance and user experience.
                        </p>
                        <p>
                            I thrive in collaborative settings and am committed to continuous learning within the ever-evolving tech landscape.
                        </p>

                        <ul className="list-none p-0 space-y-1">
                            <li><span className="font-medium text-zinc-800 dark:text-white">Core Skills:</span> Full-Stack Development, Cloud (AWS), UI/UX Principles.</li>
                        </ul>
                        <p>
                            <Link
                                href="/about"
                                className="group inline-flex items-center text-zinc-600 dark:text-zinc-400 font-medium hover:text-zinc-900 dark:hover:text-white transition duration-200"
                            >
                                Learn more about my background
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const WorksPreview = () => {

    const projects = [
        {
            title: "E-commerce Platform",
            description: "Full-stack solution with React, Node.js, MongoDB, featuring auth, cart, and payment integration.",
            imgSrc: "/images/placeholder-project-1.jpg",
            href: "/works#ecommerce",
            tags: ["React", "Node.js", "MongoDB", "AWS"],
            liveHref: "#",
            codeHref: "#",
        },
        {
            title: "Real-time Task Manager",
            description: "Collaborative task app using React and Firebase with real-time updates and drag-and-drop.",
            imgSrc: "/images/placeholder-project-2.jpg",
            href: "/works#taskapp",
            tags: ["React", "Firebase", "Realtime DB"],
            liveHref: "#",
            codeHref: "#",
        },
        {
            title: "Data Visualization Dashboard",
            description: "Interactive dashboard for visualizing complex datasets, built with D3.js and React.",
            imgSrc: "/images/placeholder-project-3.jpg",
            href: "/works#dataviz",
            tags: ["React", "D3.js", "Data Viz"],
            liveHref: "#",
            codeHref: "#",
        }
    ];

    return (
        <section id="works-preview" className="py-24 md:py-32 ">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-left mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">
                        Featured Projects
                    </h2>
                    <p className="text-base lg:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
                        A glimpse into problems I&apos;ve solved and products I&apo;ve built.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project) => (
                        <Link href={project.href || '#'} key={project.title} className="group block transition-transform duration-300 ease-in-out hover:-translate-y-1">

                            <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
                                <Image
                                    src={project.imgSrc}
                                    alt={`${project.title} screenshot`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h3 className="text-lg font-semibold mb-1 text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200">
                                {project.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-x-2 gap-y-1">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-zinc-500 dark:text-zinc-500">{tag}</span>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200">
                                View Project <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                {project.codeHref && project.codeHref !== '#' && <GithubIcon />}
                                {project.liveHref && project.liveHref !== '#' && <ExternalLink className="ml-2 h-4 w-4" />}
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-left mt-16">
                    <Link href="/works" className="group inline-flex items-center text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition duration-200">
                        Explore All Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

const CertificatesSection = () => {
    return (

        <section id="certificates" className="py-20 md:py-24  overflow-hidden">
            <div className="container mx-auto px-6">

                <h2 className="text-xl font-medium text-center mb-10 text-zinc-500 dark:text-zinc-400 tracking-tight">
                    Certifications
                </h2>

                <CertificatesMarquee />
            </div>
        </section>
    );
};



const InsightsPreview = () => {

    const insights = [
        {
            title: "The Art of Writing Clean Code",
            date: "March 15, 2024",
            description: "Thoughts on principles and practices for writing more maintainable and readable code.",
            href: "/insights#clean-code"
        },
        {
            title: "Serverless vs Containers: Choosing the Right Approach",
            date: "February 28, 2024",
            description: "Comparing trade-offs between serverless functions and containerized applications for different use cases.",
            href: "/insights#serverless-containers"
        },
    ];

    if (insights.length === 0) return null;

    return (
        <section id="insights-preview" className="py-24 md:py-32 ">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-left mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium mb-4 text-zinc-900 dark:text-white tracking-tight">
                        Insights & Writing
                    </h2>
                    <p className="text-base lg:text-lg text-zinc-500 dark:text-zinc-400 max-w-2xl">
                        Sharing perspectives on technology and software development.
                    </p>
                </div>
                <div className="space-y-10 md:space-y-12">
                    {insights.map((insight) => (
                        <Link href={insight.href || '#'} key={insight.title} className="group block">
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">{insight.date}</p>
                            <h3 className="text-lg md:text-xl font-semibold mb-2 text-zinc-900 dark:text-white group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors duration-200">
                                {insight.title}
                            </h3>
                            <p className="text-base text-zinc-600 dark:text-zinc-300 mb-3 line-clamp-2">
                                {insight.description}
                            </p>
                            <div className="inline-flex items-center text-sm font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200">
                                Read More <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="text-left mt-16">
                    <Link href="/insights" className="group inline-flex items-center text-base font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition duration-200">
                        Explore All Insights
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default function Main() {
    return (
        <div>
            <Hero name="Kuldeep Sharma" role="Software developer" desc="hello i am here" />

            <AboutMeSnippet />
            <div className='max-w-6xl mx-auto'>
                <Skill />
            </div>
            <WorksPreview />
            <CertificatesSection />


            <InsightsPreview />
        </div>
    )
}
