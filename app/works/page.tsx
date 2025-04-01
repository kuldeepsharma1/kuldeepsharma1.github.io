import Cta from '@/components/custom/cta/Cta'
import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoveRight, PhoneCall } from 'lucide-react'
import React from 'react'

export default function page() {
  return (
    <div>
      <TabSwitch
        index={3}
        primaryTab={{
          title: "Work",
          count: '3(a)',
          description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
        }}
        secondaryTab={{
          title: "Personal",
          count: '3(b)',
          description: "Side projects and experiments I've built."
        }}
        primaryChildren={
          <div>
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index}><div className="w-full py-20 lg:py-40">
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
              </div></div>
            ))}
          </div>
        }
        secondaryChildren={
          <div>
            {Array.from({ length: 10 }, (_, index) => (
              <div key={index}><div className="w-full py-20 lg:py-40">
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
              </div></div>
            ))}
          </div>
        }
      />
      <Cta badgeText="Let&apos;s Build Together"
        title="Want to collaborate on something amazing?"
        description="I&apos;m always open to working on innovative projects in machine learning, AI, and software development. Whether it&apos;s a startup idea, a research project, or a side hustle, let&apos;s build something great together."
        readMoreLink="/insights"
        contactLink="/contact"
      />
    </div>
  )
}
