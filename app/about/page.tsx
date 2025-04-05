'use client';

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Cta from "@/components/custom/cta/Cta";
import aboutData from "@/public/assets/data/about/about.json";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from "@/components/custom/About/Section";
import Timeline from "@/components/custom/About/Timeline";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const data = aboutData;
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".profile-section", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            });

            gsap.utils.toArray<HTMLElement>(".section-animate").forEach((section, i) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    delay: i * 0.1,
                });
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);



    const Info = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <Icon className="w-5 h-5 text-black dark:text-white" />
            <span className="font-medium">{text}</span>
        </div>
    );

    const LinkIcon = ({ href, Icon }: { href: string; Icon: React.ElementType }) => (
        <Link
            href={href}
            target="_blank"
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-black hover:text-white transition-colors duration-300 shadow-md border border-gray-200 dark:border-gray-700"
            aria-label={`Link to ${href}`}
        >
            <Icon className="w-6 h-6" />
        </Link>
    );

    return (
        <div ref={mainRef} className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Profile */}
                    <div className="profile-section lg:col-span-4 lg:sticky lg:top-16">
                        <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                            <Image
                                width={400}
                                height={400}
                                src="/assets/images/avatar.jpeg"
                                alt={data.personal_info.full_name}
                                className="object-cover w-full transition-transform duration-300 hover:scale-105 grayscale" // Added grayscale
                                priority
                            />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <Badge
                                    variant="outline"
                                    className="mb-3 bg-gray-100 text-black dark:bg-gray-900 dark:text-white border-gray-200 dark:border-gray-800"
                                >
                                    {data.personal_info.title}
                                </Badge>
                                <h1 className="text-4xl font-bold text-black dark:text-white mb-2">{data.personal_info.full_name}</h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400">{data.professional_summary.current_position}</p>
                            </div>
                            <div className="space-y-4">
                                <Info icon={MapPin} text={data.personal_info.location} />
                                <Info icon={Mail} text={data.contact_information.email} />
                                <Info icon={Phone} text={data.contact_information.phone} />
                            </div>
                            <div className="flex gap-4">
                                {data.social_media_and_networks.linkedin && (
                                    <LinkIcon href={data.social_media_and_networks.linkedin} Icon={Linkedin} />
                                )}
                                {data.social_media_and_networks.google_play && (
                                    <LinkIcon href={data.social_media_and_networks.google_play} Icon={Github} />
                                )}
                                {data.social_media_and_networks.twitter_x && (
                                    <LinkIcon href={data.social_media_and_networks.twitter_x} Icon={Twitter} />
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <Section title="About">
                            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">{data.personal_info.profile_summary}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div><span className="font-semibold text-black dark:text-white">Languages:</span> {data.personal_info.languages.join(" · ")}</div>
                                <div><span className="font-semibold text-black dark:text-white">Aliases:</span> {data.personal_info.aliases.join(" · ")}</div>
                            </div>
                        </Section>

                        <Section title="Professional Summary">
                            <p className="text-lg leading-relaxed mb-4 text-gray-700 dark:text-gray-300">{data.professional_summary.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div><span className="font-semibold text-black dark:text-white">Experience:</span> {data.professional_summary.years_of_experience} years</div>
                                <div className="col-span-2">
                                    <span className="font-semibold text-black dark:text-white">Strengths:</span> {data.professional_summary.key_strengths.join(", ")}
                                </div>
                            </div>
                        </Section>

                        <Section title="Work Experience">
                            {data.work_experience.map((work) => (
                                <div key={work.company} className="mb-8 last:mb-0 p-4 rounded-lg bg-gray-50 dark:bg-black/50 border border-gray-200 dark:border-gray-800 shadow-sm">
                                    <h3 className="font-semibold text-xl text-black dark:text-white mb-2">{work.role} @ {work.company}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{work.duration}</p>
                                    <ul className="list-disc list-inside text-sm mb-4 text-gray-600 dark:text-gray-300">
                                        {work.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="mb-1">{resp}</li>
                                        ))}
                                    </ul>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        <span className="font-semibold text-black dark:text-white">Achievements:</span> {work.achievements.join(", ")}
                                    </p>
                                </div>
                            ))}
                        </Section>

                        <Section title="Education">
                            <div className="mb-4 text-gray-700 dark:text-gray-300">
                                <p className="font-semibold text-lg text-black dark:text-white">{data.education.degree}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{data.education.university} - {data.education.graduation_year}</p>
                                <p className="text-sm mt-2">{data.education.details}</p>
                            </div>
                            <div className="mt-4 text-gray-600 dark:text-gray-400">
                                <h4 className="font-semibold text-md mb-2 text-black dark:text-white">Courses:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                                    {data.education.additional_courses.map((course) => (
                                        <p key={course.name}>{course.name} - {course.provider} ({course.year})</p>
                                    ))}
                                </div>
                            </div>
                        </Section>
                        {/* https://animata.design/docs/carousel/expandable */}
                        <Section title="Certifications" variant="grid">
                            {data.certifications.map((cert) => (
                                <p key={cert.name} className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold text-black dark:text-white">{cert.name}</span> - {cert.issuer} ({cert.year})
                                </p>
                            ))}
                        </Section>

                        <Section title="Technical Contributions">
                            <div className="mb-4 text-gray-700 dark:text-gray-300">
                                <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">Apps:</h4>
                                {data.technical_contributions.apps.map((app) => (
                                    <div key={app.name} className="mb-4">
                                        <Link
                                            href={app.repository}
                                            target="_blank"
                                            className="text-blue-600 hover:underline font-medium text-black dark:text-white"
                                        >
                                            {app.name}
                                        </Link>{" "}
                                        - {app.description} ({app.technologies.join(", ")})
                                    </div>
                                ))}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">GitHub Repositories:</h4>
                                {data.technical_contributions.github_repositories.map((repo) => (
                                    <p key={repo.name} className="mb-2">
                                        <span className="font-medium text-black dark:text-white">{repo.name}</span> - {repo.description} ({repo.language}, {repo.stars} stars)
                                    </p>
                                ))}
                            </div>
                        </Section>

                        <Section title="Blogging & Content">
                            {data.blogging_and_content.platforms.map((platform) => (
                                <div key={platform.name} className="mb-2 text-gray-700 dark:text-gray-300">
                                    <Link
                                        href={platform.url}
                                        target="_blank"
                                        className="text-blue-600 hover:underline font-medium text-black dark:text-white"
                                    >
                                        {platform.name}
                                    </Link>{" "}
                                    - {platform.topics.join(", ")}
                                </div>
                            ))}
                        </Section>

                        <Section title="Open Source & Community">
                            <div className="mb-4 text-gray-700 dark:text-gray-300">
                                <p>
                                    <span className="font-semibold text-black dark:text-white">{data.open_source_and_community.open_source_contributions.organization}</span>:{" "}
                                    {data.open_source_and_community.open_source_contributions.mission}
                                </p>
                                <p className="text-sm mt-2"><span className="font-semibold text-black dark:text-white">Role:</span> {data.open_source_and_community.open_source_contributions.role}</p>
                                <p className="text-sm"><span className="font-semibold text-black dark:text-white">Contributions:</span> {data.open_source_and_community.open_source_contributions.contributions.join(", ")}</p>
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                                <p className="text-sm mt-2"><span className="font-semibold text-black dark:text-white">Roles:</span> {data.open_source_and_community.community_involvement.roles.join(", ")}</p>
                                <p className="text-sm"><span className="font-semibold text-black dark:text-white">Awards:</span> {data.open_source_and_community.community_involvement.awards.join(", ")}</p>
                            </div>
                        </Section>

                        <Section title="Personal Philosophy">
                            <p className="mb-4 text-gray-700 dark:text-gray-300">{data.personal_philosophy.mission_statement}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <div><span className="font-semibold text-black dark:text-white">Values:</span> {data.personal_philosophy.core_values.join(", ")}</div>
                                <div className="col-span-2"><span className="font-semibold text-black dark:text-white">Vision:</span> {data.personal_philosophy.vision}</div>
                            </div>
                        </Section>

                        <Section title="Interests">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div><span className="font-semibold text-black dark:text-white">Hobbies:</span> {data.personal_interests.hobbies.join(", ")}</div>
                                <div><span className="font-semibold text-black dark:text-white">Favorite Books:</span> {data.personal_interests.favorite_books.join(", ")}</div>
                            </div>
                            <div className="mt-4 text-gray-700 dark:text-gray-300">
                                {data.personal_interests.side_projects.map((project) => (
                                    <p key={project.name} className="mt-2 text-sm">
                                        <span className="font-semibold text-black dark:text-white">{project.name}</span> - {project.description} ({project.status})
                                    </p>
                                ))}
                            </div>
                        </Section>
                        
                      
                    </div>
                </div>

                <div className="mt-16">
                    <Cta
                        badgeText="Let's Collaborate"
                        title="Ready to Build Something Great?"
                        description="I’m excited to work on innovative projects in software development and open-source."
                        readMoreLink={data.contact_information.website}
                        readMoreLinkText="Explore My Work"
                        contactLink={data.contact_information.contact_form}

                    />
                </div>
            </div>
        </div>
    );
}

