'use client';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Tag } from 'lucide-react';
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import FallbackImage from '../FallbackImg';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface ProjectFeatured {
  category: string;
  title: string;
  desc: string;
  tags: string[];
  linkurl: string;
  linktext?: string;
  img: string;
  imgdesc?: string;
}
export default function Featured({ category, title, desc, tags, linkurl, linktext, img, imgdesc }: ProjectFeatured) {
  const sectionRef = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
    tl.from('.featured-content .badge', {
      y: 10,
      duration: 0.8,
      ease: "back.inOut(1.7)",

    })
      .from('.featured-content h2', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power4.out"
      }, "-=0.4")
      .from('.featured-content p', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from('.featured-content .flex-wrap > *', {
        scale: 0.8,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.4")
      .from('.featured-content a', {
        x: -20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2");

    // Image animation
    tl.from('.featured-image', {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
      opacity: 0,
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=1.8");

  }, []);

  return (
    <section ref={sectionRef}>
      <div className="max-w-screen-xl mx-auto px-6  py-16 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row justify-between border-2 border-black/25 dark:border-white/25  rounded-3xl bg-white dark:bg-black shadow-3xl transition-all duration-500 hover:shadow-4xl sm:py-4">
          <div className="lg:w-1/2 px-4 pb-6 sm:p-8  flex flex-col justify-between">
            <div className="featured-content max-w-lg sm:pt-10">
              <Badge className="py-1.5 text-base font-semibold px-4 badge ">
                <Tag className="size-3 mr-1 " />{category}
              </Badge>
              <div className="space-y-4 pt-4">
                <h2 className="text-3xl md:text-5xl  font-semibold tracking-tighter leading-none hover:opacity-70 ">
                  {title}
                </h2>
                <p className="text-lg text-black/85 dark:text-white/85 leading-relaxed font-medium">
                  {desc}
                </p>
              </div>
              <div className=" pt-6">
                <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {tags && tags.map((tag, index) => (
                    <Badge key={index}
                      variant={'outline'}
                      className="badge border-2 border-black/40 dark:border-white/40 px-4 py-1.5 rounded-full text-sm bg-transparent transition-transform cursor-pointer hover:bg-foreground hover:text-primary-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={linkurl}
              className="inline-flex justify-end lg:justify-start items-center gap-2 text-black dark:text-white font-semibold text-lg mt-8 transition-all duration-300 group hover:underline underline-offset-4"
            >
              {linktext ? linktext : 'Explore Project'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-rotate-45 transition-transform duration-300" />
            </Link>
          </div>
          <div className="lg:w-1/2 featured-image relative overflow-hidden group flex justify-end md:pr-6 mx-auto">
            <div className='sm:bg-zinc-100 sm:dark:bg-zinc-900 rounded-lg w-fit p-5 relative'>
              {img ? <Image
                src={img}
                alt={title}
                className="object-cover rounded-lg transition-transform h-full group-hover:scale-105"
                width={500}
                height={400}
                priority
              />
                : <FallbackImage alt={title} className="object-cover rounded-lg transition-transform w-96 h-full group-hover:scale-105" />}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                <span className="text-white text-xl text-center font-bold bg-black/50 px-4 py-2 rounded-full">{imgdesc ? imgdesc : 'Dive into the Details'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}