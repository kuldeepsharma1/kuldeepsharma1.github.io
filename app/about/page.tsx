'use client'
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Check, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cta from "@/components/custom/cta/Cta";

export default function AboutPage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="">
      <TabSwitch
        index={2}
        primaryTab={{
          title: "About",
          count: '2',
          description: "Software Engineer at Hytek Org. Passionate about coding, open-source, and building impactful tech solutions."
        }}
        primaryChildren={
          <div className="w-full py-20">
            <div className="container mx-auto">
              <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
                <div className="flex gap-10 flex-col">
                  <div className="flex gap-4 flex-col">
                    <Badge className="w-fit" variant="outline">About Me</Badge>
                    <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                      Innovating Through Code
                    </h2>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                      I build tools like Rize and ImageNet to solve real-world problems.
                    </p>
                  </div>
                  <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>App Developer</p>
                        <p className="text-muted-foreground text-sm">Created Rize and ImageNet on Google Play.</p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>Open-Source Contributor</p>
                        <p className="text-muted-foreground text-sm">Active on GitHub with Hytek Org projects.</p>
                        <Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</Link>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>Tech Enthusiast</p>
                        <p className="text-muted-foreground text-sm">Blogging on ML and tech trends.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-md aspect-square">
                  <Image width={800} height={800} src={'/assets/images/avatar.jpeg'} alt="Kuldeep Sharma" />
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-10 items-center">
              <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
                Experience In
              </h3>
              <div className="relative w-full col-span-4">
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {["Next.js", "React Native", "TypeScript", "Laravel", "Tailwind CSS", "Machine Learning", "Data Science"].map((skill, index) => (
                      <CarouselItem className="basis-1/4 lg:basis-1/6" key={index}>
                        <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                          <span className="text-sm">{skill}</span>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex gap-4 flex-col items-start">
                <Badge>Projects</Badge>
                <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                  Building Impactful Tech
                </h2>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                  From productivity apps to open-source platforms.
                </p>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="bg-muted h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Rize</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Productivity app with 3,000+ installs on Google Play.
                    </p>
                  </div>
                </div>
                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">ImageNet</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Image search and download app built with React Native.
                    </p>
                  </div>
                </div>
                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">ipost</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Laravel-based blog platform on GitHub.
                    </p>
                  </div>
                </div>
                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Portfolio</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      CSS template for Hytek members.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Future Goals</h2>
        <p>
          Continue mastering AI/ML, contributing to open-source, and creating valuable tech solutions.
        </p>
      </section>

      <section>
        <h2>Hobbies</h2>
        <p>
          Coding, exploring tech trends, reading about entrepreneurship.
        </p>
      </section>

      <Cta
        badgeText="Let's Collaborate"
        title="Ready to Build Something Great?"
        description="I’m excited to work on innovative projects in web dev, apps, and AI. Let’s turn your ideas into reality."
        readMoreLink="/works"
        readMoreLinkText="See My Projects"
        contactLink="/contact"
      />
    </div>
  );
};