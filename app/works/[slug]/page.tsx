import Image from 'next/image';
import Link from 'next/link';
import projects from '@/public/assets/data/works/projects.json';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ChevronLeft, Globe2 } from 'lucide-react';

export async function generateStaticParams() {
    return projects.map((post) => ({
        slug: post.slug,
    }))
}

const ProjectDetail = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col space-y-1">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
        <span className="text-lg font-medium">{value
        }</span>
    </div>
);

export default async function Page({
    params,
}: {
    params: { slug: string }
}) {
    const { slug } = params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50/50 to-white dark:from-zinc-900 dark:via-zinc-900/50 dark:to-zinc-900 transition-all duration-300">
            {/* Hero Section */}

            <section className="relative pt-20 pb-40 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute inset-0 bg-background " />
                <div className="absolute inset-0 bg-grid-zinc-900/[0.04] dark:bg-grid-zinc-100/[0.03]" />
                <div className="max-w-7xl mx-auto relative">
                    <Link
                        href="/works"
                        className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 
                                 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 mb-6
                                 bg-white/50 dark:bg-zinc-800/50 rounded-full shadow-sm backdrop-blur-sm
                                 border border-zinc-200/50 dark:border-zinc-700/50
                                 hover:bg-white/80 dark:hover:bg-zinc-800/80 hover:scale-105"
                    >
                        <ChevronLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                        <span>Back to Works</span>
                    </Link>
                    <div className="relative z-10 max-w-4xl">
                        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-300 dark:to-white bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        <p className="text-zinc-700 dark:text-zinc-300 text-xl md:text-2xl mb-10 leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm">
                            {[project.type, project.category, project.status].map((tag, index) => (
                                <span key={index}
                                    className="px-6 py-2.5 bg-white/90 dark:bg-zinc-800/90 rounded-full 
                                               shadow-lg backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-700/50
                                               hover:scale-105 transition-all duration-300 ease-out
                                               hover:border-zinc-300 dark:hover:border-zinc-600">
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Thumbnail */}
            <section className="px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 dark:ring-white/10">
                        <div className="group relative">
                            <Image
                                src={project.images.thumbnail}
                                alt={project.title}
                                width={800}
                                height={100}
                                className="w-full aspect-video object-cover object-top transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-zinc-900 opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-20">
                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                Overview
                            </h2>
                            <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
                                <p className="text-xl leading-relaxed">
                                    {project.detailedDescription}
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-zinc dark:prose-invert max-w-none">
                            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                Features
                            </h3>
                            <ul className="space-y-4 text-lg leading-relaxed">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="mr-2">•</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {project.challenges && (
                            <div className="prose prose-zinc dark:prose-invert max-w-none">
                                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                    Challenges
                                </h3>
                                <ul className="space-y-4 text-lg leading-relaxed">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="mr-2">•</span> {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-16">
                        <div className="sticky top-8">
                            <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 shadow-xl ring-1 ring-zinc-900/5 dark:ring-white/10">
                                <div className="prose prose-zinc dark:prose-invert max-w-none">
                                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                        Technologies Used
                                    </h3>
                                    <div className="flex flex-wrap gap-3 pb-4">
                                        {project.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-white/80 dark:bg-zinc-800/80 rounded-full shadow-sm 
                                                         backdrop-blur-sm border border-zinc-200 dark:border-zinc-700
                                                         text-sm hover:scale-105 transition-transform duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="prose prose-zinc dark:prose-invert max-w-none pb-4">
                                    <h3 className="text-2xl font-bold my-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                        Project Details
                                    </h3>
                                    <div className='flex justify-between items-center'>
                                        <ProjectDetail label='Released' value={project.releaseDate} />
                                        {project.lastUpdated && (
                                            <ProjectDetail label='Last Updated' value={project.lastUpdated} />
                                        )}
                                    </div>
                                </div>

                                <div className="prose prose-zinc dark:prose-invert max-w-none">
                                    <h3 className="text-2xl font-bold my-4 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                        Links
                                    </h3>
                                    <div className="space-y-4 flex flex-col pb-6">
                                        {project.links.live && (
                                            <Link
                                                href={project.links.live}
                                                className="inline-flex items-center gap-2 text-lg text-black dark:text-white hover:underline"
                                                target="_blank"
                                            >
                                                <Globe2 />  Live Site
                                            </Link>
                                        )}

                                        <Link
                                            href={project.links.source}
                                            className="inline-flex items-center gap-2 text-lg text-black dark:text-white hover:underline"
                                            target="_blank"
                                        >
                                            <Globe2 />   Source Code
                                        </Link>
                                        {project.links.demoVideo && (
                                            <Link
                                                href={project.links.demoVideo}
                                                className="inline-flex items-center gap-2 text-lg text-black dark:text-white hover:underline"
                                                target="_blank"
                                            >
                                                <Globe2 />  Demo Video
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                {project.additionalInfo && (
                                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                                        <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                                            Additional Info
                                        </h3>
                                        {project.additionalInfo.documentationLink && (
                                            <Link
                                                href={project.additionalInfo.documentationLink}
                                                className="block text-lg text-black dark:text-white hover:underline"
                                                target="_blank"
                                            >
                                                Documentation
                                            </Link>
                                        )}
                                        {project.additionalInfo.blogPost && (
                                            <Link
                                                href={project.additionalInfo.blogPost}
                                                className="block text-lg text-black dark:text-white hover:underline"
                                                target="_blank"
                                            >
                                                Blog Post
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            {project.images.screenshots.length > 0 && (
                <section className="py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                            Screenshots
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.images.screenshots.map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className="w-full rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-500"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Team */}
            {project.team && project.team.length > 0 && (
                <section className="py-32 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
                            Team
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.team.map((member, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-zinc-100 dark:bg-zinc-900 rounded-lg shadow-md hover:scale-105 transition-transform duration-500"
                                >
                                    {member.pic && (
                                        <Avatar>
                                            <AvatarImage src={member.pic} alt={member.name} />
                                            <AvatarFallback>
                                                {member.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}
                                    <h4 className="text-xl font-bold">{member.name}</h4>
                                    <p className="text-zinc-600 dark:text-zinc-400">{member.role}</p>
                                    {member.responsibilities && (
                                        <p className="text-lg leading-relaxed mt-2">
                                            {member.responsibilities}
                                        </p>
                                    )}
                                    <Link
                                        href={member.link}
                                        className="text-lg text-black dark:text-white hover:underline mt-2 block"
                                        target="_blank"
                                    >
                                        Profile
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
