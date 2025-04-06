
import type { Metadata } from 'next';


import Cta from "@/components/custom/cta/Cta";
import Main from '@/components/custom/Home/Main';



export const metadata: Metadata = {
  title: "Kuldeep Sharma | Software Engineer",
  description: "Crafting clean, performant, and user-centered web experiences. Explore the work of Kuldeep Sharma, Software Engineer.",
  openGraph: {
    title: "Kuldeep Sharma | Software Engineer",
    description: "Crafting clean, performant, and user-centered web experiences.",
    url: 'https://your-domain.com',
    siteName: 'Kuldeep Sharma Portfolio',
    images: [{ url: '/assets/images/avatar.jpeg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kuldeep Sharma | Software Engineer",
    description: "Crafting clean, performant, and user-centered web experiences.",
    site: '@yourTwitterHandle',
    creator: '@yourTwitterHandle',
    images: ['/assets/images/avatar.jpeg'],
  },
};



export default function page() {
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