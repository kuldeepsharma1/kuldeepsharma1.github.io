'use client'
import { useGSAP } from "@gsap/react";
import BlogContent from "@/components/custom/About/BlogContent";
import Left from "@/components/custom/About/Left";
import Right from "@/components/custom/About/Right";
import Education from "@/components/custom/About/Education";
import Timeline from "@/components/custom/About/Timeline";
import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { About } from "@/types/about";
import Certifications from "./Certifications";
gsap.registerPlugin(ScrollTrigger);
export default function Main({ data }: { data: About }) {
    const mainRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            gsap.from(".featured-stagger li", {
                scrollTrigger: {
                    trigger: ".fetured-stagger-trigger",
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play none none reverse",
                },
                duration: 1,
                ease: "power3.out",
                stagger: 1,
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
                    duration: 0.3,
                    ease: 'expo.inOut'
                });

            });
        }, mainRef);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={mainRef} className="max-w-7xl mx-auto px-4" >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <Left personal_info={data.personal_info} professional_summary={data.professional_summary} contact_information={data.contact_information} social_media_and_networks={data.social_media_and_networks} />
                <div className="lg:col-span-8 space-y-8 pb-10">
                    <Right personal_info={data.personal_info} professional_summary={data.professional_summary} work_experience={data.work_experience} />
                </div>
            </div>
            <section>
                <Education education={data.education} />
                <Certifications certifications={data.certifications} />
                <BlogContent technical_contributions={data.technical_contributions} blogging_and_content={data.blogging_and_content} open_source_and_community={data.open_source_and_community} personal_interests={data.personal_interests} personal_philosophy={data.personal_philosophy} />
            </section>
            <Timeline timeline={data.additional_details.timelines} />

        </div>
    )
}
