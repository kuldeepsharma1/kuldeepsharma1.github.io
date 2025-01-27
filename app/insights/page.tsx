import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, PhoneCall } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div><TabSwitch
      index={2}
      primaryTab={{
        title: "Insights",
        count: 4,
        description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
      }}

      primaryChildren={
        <div className="w-full py-20 ">
          <div className="container mx-auto">
            <div className="grid border rounded-lg container py-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
              <div className="flex gap-10 flex-col">
                <div className="flex gap-4 flex-col">
                  <div>
                    <Badge variant="outline">Insights</Badge>
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

              </div>
            </div>
          </div>
        </div>
      }

    />
      <section>
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col gap-10">
              <div className="flex text-center justify-center items-center gap-4 flex-col">
                <Badge variant="outline">FAQ</Badge>
                <div className="flex gap-2 flex-col">
                  <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                    This is the start of something new
                  </h4>
                  <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                    Managing a small business today is already tough. Avoid further
                    complications by ditching outdated, tedious trade methods. Our
                    goal is to streamline SMB trade, making it easier and faster than
                    ever.
                  </p>
                </div>
                <div>
                  <Button className="gap-4" variant="outline">
                    Any questions? Reach out <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="max-w-3xl w-full mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <AccordionItem key={index} value={"index-" + index}>
                      <AccordionTrigger>
                        This is the start of something new
                      </AccordionTrigger>
                      <AccordionContent>
                        Managing a small business today is already tough. Avoid
                        further complications by ditching outdated, tedious trade
                        methods. Our goal is to streamline SMB trade, making it easier
                        and faster than ever.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
