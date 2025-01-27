'use client'
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Check, MoveRight, PhoneCall, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Example Page',
//   description: 'This is a Next.js page with rich metadata.',
//   openGraph: {
//     title: 'Example Page',
//     description: 'A Next.js example with Open Graph metadata.',
//     url: 'https://example.com/example',
//     siteName: 'My Example Site',
//     images: [
//       {
//         url: 'https://example.com/images/og-image.jpg',
//         width: 800,
//         height: 600,
//       },
//     ],
//     locale: 'en_US',
//     type: 'website',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Example Page',
//     description: 'A Next.js example with Twitter metadata.',
//     images: ['https://example.com/images/twitter-image.jpg'],
//   },
// };


export default function Page() {
  const router = useRouter();
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
    }, 1000);
  }, [api, current]);

  // const [api, setApi] = useState<CarouselApi>();
  // const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setTimeout(() => {
  //     if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
  //       setCurrent(0);
  //       api.scrollTo(0);
  //     } else {
  //       api.scrollNext();
  //       setCurrent(current + 1);
  //     }
  //   }, 4000);
  // }, [api, current]);
  return (
    <div className="">
      <TabSwitch
        index={2}
        primaryTab={{
          title: "About",
          count: 2,
          description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
        }}

        primaryChildren={
          <div className="w-full py-20 ">
            <div className="container mx-auto">
              <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
                <div className="flex gap-10 flex-col">
                  <div className="flex gap-4 flex-col">
                    <div>
                      <Badge variant="outline">About</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                      <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                        Something new!
                      </h2>
                      <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                        Managing a small business today is already tough.
                      </p>
                    </div>
                  </div>
                  <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>Easy to use</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it easy to use and understand.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>Fast and reliable</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it fast and reliable.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-start">
                      <Check className="w-4 h-4 mt-2 text-primary" />
                      <div className="flex flex-col gap-1">
                        <p>Beautiful and modern</p>
                        <p className="text-muted-foreground text-sm">
                          We&apos;ve made it beautiful and modern.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-md aspect-square">
                  <Image width={300} height={300} src={'/assets/images/avatar.jpeg'} alt="Kuldeep sharma" />
                </div>
              </div>
            </div>
          </div>
        }

      />
      <section >
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-10 items-center">
              <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
                Have Experince in
              </h3>
              <div className="relative w-full col-span-4">
                <div className="bg-gradient-to-r from-background via-white/0 to-background z-10 absolute left-0 top-0 right-0 bottom-0 w-full h-full"></div>
                <Carousel setApi={setApi} className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 25 }).map((_, index) => (
                      <CarouselItem
                        className="basis-1/4 lg:basis-1/6"
                        key={index}
                      >
                        <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-2">
                          <span className="text-sm">Logo {index + 1}</span>
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
                <div>
                  <Badge>Platform</Badge>
                </div>
                <div className="flex gap-2 flex-col">
                  <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                    Something new!
                  </h2>
                  <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                    Managing a small business today is already tough.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="bg-muted h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md aspect-square p-6 flex justify-between flex-col">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>

                <div className="bg-muted h-full rounded-md p-6 flex justify-between flex-col lg:col-span-2">
                  <User className="w-8 h-8 stroke-1" />
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                    <p className="text-muted-foreground max-w-xs text-base">
                      Our goal is to streamline SMB trade, making it easier and faster
                      than ever.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="goals">
        <h2>Future Goals</h2>
        <p>
          My goal is to continue learning cutting-edge technologies, contribute to open-source projects,
          and build solutions that create value for people and businesses. I also aim to deepen my expertise
          in AI and ML to innovate in these transformative fields.
        </p>
      </section>

      <section className="hobbies">
        <h2>Hobbies</h2>
        <p>
          Apart from coding, I enjoy exploring new tools, staying updated with tech trends, and reading
          about entrepreneurship and technology advancements.
        </p>
      </section>
      <section>
      <div className="w-full py-20 lg:py-40 bg-muted">
    <div className="container mx-auto">
      <div className="flex flex-col text-center py-14 gap-4 items-center">
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
       
          <Button onClick={()=>router.push('/contact')} className="gap-4">
            Contact Me <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
      </section>
    </div>
  );
};