import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
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

    /></div>
  )
}
