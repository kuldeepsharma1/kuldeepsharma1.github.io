
import type { Metadata } from 'next';


import Cta from "@/components/custom/cta/Cta";
import Main from '@/components/custom/Home/Main';



export const metadata: Metadata = {
  title: "John Doe | Software Engineer",
  description: "Crafting clean, performant, and user-centered web experiences. Explore the work of John Doe, Software Engineer.",
  openGraph: {
    title: "John Doe | Software Engineer",
    description: "Crafting clean, performant, and user-centered web experiences.",
    url: 'https://your-domain.com',
    siteName: 'John Doe Portfolio',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "John Doe | Software Engineer",
    description: "Crafting clean, performant, and user-centered web experiences.",
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
    images: ['/images/og-image.jpg'],
  },
};



export default function Home() {
  return (

    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
       <Main/>

        <Cta

          badgeText=""
          title="Let's Create Together"
          description="Interested in collaborating or discussing an opportunity? I'm always open to new challenges."
          contactLink="/contact"

        />
      </main>

    </div>
  );
}