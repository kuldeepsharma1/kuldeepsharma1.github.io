'use client';
import Cta from "@/components/custom/cta/Cta";
import aboutData from "@/public/assets/data/about/about.json";
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Section from "@/components/custom/About/Section";
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import { useGSAP } from "@gsap/react";
import BlogContent from "@/components/custom/About/BlogContent";
import Left from "@/components/custom/About/Left";
import Right from "@/components/custom/About/Right";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const data = aboutData;
    const mainRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.from(".profile-section", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".featured-stagger li", {
                scrollTrigger: {
                    trigger: ".fetured-stagger-trigger",
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse",
                },
                duration: 0.3,
                ease: "power3.out",
                stagger: 0.5,
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
    return (
        <div ref={mainRef} className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white">
            <TabSwitch
                index={2}
                primaryTab={{
                    title: "About",
                    count: '2',
                    description: data.personal_info.profile_summary
                }}
                primaryChildren={
                    <div></div>
                }
            />
            <div className="container mx-auto px-4 py-16 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column - Profile */}
                    <Left personal_info={data.personal_info} professional_summary={data.professional_summary} contact_information={data.contact_information} social_media_and_networks={data.social_media_and_networks} />

                    {/* Right Column - Content */}
                    <div className="lg:col-span-8 space-y-8 pb-10">
                        <Right personal_info={data.personal_info} professional_summary={data.professional_summary} work_experience={data.work_experience} />
                    </div>
                </div>
                <section>
                    <div className="grid lg:grid-cols-2">
                        <Section title="Education">
                            <div className="mb-4 text-zinc-700 dark:text-zinc-300">
                                <p className="font-semibold text-lg text-black dark:text-white">{data.education.degree}</p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">{data.education.university} - {data.education.graduation_year}</p>
                                <p className="text-sm mt-2">{data.education.details}</p>
                            </div>
                            <div className="mt-4 text-zinc-600 dark:text-zinc-400">
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
                                <p key={cert.name} className="text-sm text-zinc-600 dark:text-zinc-400">
                                    <span className="font-semibold text-black dark:text-white">{cert.name}</span> - {cert.issuer} ({cert.year})
                                </p>
                            ))}
                        </Section>

                    </div>
                    <BlogContent technical_contributions={data.technical_contributions} blogging_and_content={data.blogging_and_content} open_source_and_community={data.open_source_and_community} personal_interests={data.personal_interests} personal_philosophy={data.personal_philosophy} />
                </section>
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
        </div >
    );
}

