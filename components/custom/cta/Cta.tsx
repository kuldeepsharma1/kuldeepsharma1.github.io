import { Badge } from '@/components/ui/badge'
import { Mail, MoveRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CtaProps {
  title: string
  description: string
  readMoreLink?: string
  readMoreLinkText?: string
  contactLink: string
  badgeText: string
}
const Cta: React.FC<CtaProps> = ({ title, description, readMoreLink, readMoreLinkText, contactLink, badgeText }) => {
  return (
    <section>
      <div className="w-full py-20 lg:py-40 ">
        <div className="mx-auto">

          <div className="flex flex-col text-center bg-[linear-gradient(10deg,#fff,45%,#e5e6e8,55%,#fff)] dark:bg-[linear-gradient(10deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] hover:animate-background-shine-once  rounded-md p-4 lg:p-14 gap-8 items-center">
            <div>
              <Badge>{badgeText}</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-3xl md:text-5xl tracking-tighter  ">
                {title}
              </h3>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-3xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {readMoreLink && <Link href={readMoreLink} className='inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90' >
                <span> {readMoreLinkText ? readMoreLinkText : 'Read More'}</span> <MoveRight className="w-4 h-4" />
              </Link>}
              <Link className='inline-flex items-center gap-4 h-9 px-4 py-2 justify-center  whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0  sm:border sm:border-input sm:bg-background shadow-sm sm:hover:bg-accent hover:text-accent-foreground' href={contactLink}>
                <span>Contact Me</span> <Mail className="w-4 h-4 hidden sm:block" />
              </Link>
            </div>
          </div>
          <div className='mx-auto  h-[1px] animate-border-width  rounded-full bg-gradient-to-r from-[rgba(77,77,77,0)] dark:from-[rgba(17,17,17,0)] dark:via-white via-black to-[rgba(77,77,77,0)] dark:to-[rgba(17,17,17,0)] transition-all duration-1000' />
        </div>
      </div>
    </section>
  )
}
export default Cta
