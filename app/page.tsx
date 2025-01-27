'use client'
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveDown, MoveRight, PhoneCall, User } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Ripple from "@/components/custom/About/Ripple";
import Image from "next/image";
import { Hero } from "@/components/custom/Hero/Hero";
import CertificatesMarquee from "@/components/custom/Home/CertificatesMarquee";

export default function Home() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["amazing", "new", "wonderful", "beautiful", "smart"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // projects
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);
  return (
    <div className="pt-10">
      <section>
        <Hero />
      </section>
      <section>
        <div className="w-full">
          <div className=" mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden ">

                <Image src={'/assets/images/my.png'} width={30} height={30} alt="hello" className="w-32 h-32 rounded-3xl" />
                <p className="z-10 whitespace-pre-wrap text-center text-black text-4xl font-medium tracking-tighter dark:text-white">
                  Kuldeep Sharma
                </p>

                <Ripple />

                <Button variant="secondary" size="sm" className=" rounded-full animate-bounce flex-col justify-center mt-4">
                  <MoveDown className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  This is the start of something new
                </h1>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  Managing a small business today is already tough. Avoid further
                  complications by ditching outdated, tedious trade methods. Our goal
                  is to streamline SMB trade, making it easier and faster than ever.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Sign up here <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div>
                <Badge variant="outline">We&apos;re live!</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  This is the start of something new
                </h1>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  Managing a small business today is already tough. Avoid further
                  complications by ditching outdated, tedious trade methods. Our goal
                  is to streamline SMB trade, making it easier and faster than ever.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Sign up here <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div>
                <Button variant="secondary" size="sm" className="gap-4">
                  Read our launch article <MoveRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                  <span className="text-spektr-cyan-50">This is something</span>
                  <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                    &nbsp;
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute font-semibold"
                        initial={{ opacity: 0, y: "-100" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                              y: 0,
                              opacity: 1,
                            }
                            : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                  Managing a small business today is already tough. Avoid further
                  complications by ditching outdated, tedious trade methods. Our
                  goal is to streamline SMB trade, making it easier and faster than
                  ever.
                </p>
              </div>
              <div className="flex flex-row gap-3">
                <Button size="lg" className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Sign up here <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">We&apos;re live!</Badge>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                    This is the start of something!
                  </h1>
                  <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                    Managing a small business today is already tough. Avoid further
                    complications by ditching outdated, tedious trade methods. Our
                    goal is to streamline SMB trade, making it easier and faster than
                    ever.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <Button size="lg" className="gap-4" variant="outline">
                    Jump on a call <PhoneCall className="w-4 h-4" />
                  </Button>
                  <Button size="lg" className="gap-4">
                    Sign up here <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-muted rounded-md aspect-square"></div>
                <div className="bg-muted rounded-md row-span-2"></div>
                <div className="bg-muted rounded-md aspect-square"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full  py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
              <div className="flex gap-4 flex-col">
                <div>
                  <Badge variant="outline">We&apos;re live!</Badge>
                </div>
                <div className="flex gap-4 flex-col">
                  <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                    This is the start of something!
                  </h1>
                  <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                    Managing a small business today is already tough. Avoid further
                    complications by ditching outdated, tedious trade methods. Our
                    goal is to streamline SMB trade, making it easier and faster than
                    ever.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <Button size="lg" className="gap-4" variant="outline">
                    Jump on a call <PhoneCall className="w-4 h-4" />
                  </Button>
                  <Button size="lg" className="gap-4">
                    Sign up here <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="bg-muted rounded-md aspect-square"></div>
            </div>
          </div>
        </div>
      </section>
      {/* projects */}
      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                Trusted by thousands of businesses worldwide
              </h2>
              <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                  {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem className="lg:basis-1/2" key={index}>
                      <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                        <User className="w-8 h-8 stroke-1" />
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col">
                            <h3 className="text-xl tracking-tight">
                              Best decision
                            </h3>
                            <p className="text-muted-foreground max-w-xs text-base">
                              Our goal was to streamline SMB trade, making it easier
                              and faster than ever and we did it together.
                            </p>
                          </div>
                          <p className="flex flex-row gap-2 text-sm items-center">
                            <span className="text-muted-foreground">By</span>{" "}
                            <Avatar className="h-6 w-6">
                              <AvatarImage src="https://github.com/shadcn.png" />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span>John Johnsen</span>
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <CertificatesMarquee/>
      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
              <div>
                <Badge>Get started</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                  Try our platform today!
                </h3>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
                  Managing a small business today is already tough. Avoid further
                  complications by ditching outdated, tedious trade methods. Our goal
                  is to streamline SMB trade, making it easier and faster than ever.
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button className="gap-4" variant="outline">
                  Jump on a call <PhoneCall className="w-4 h-4" />
                </Button>
                <Button className="gap-4">
                  Sign up here <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
