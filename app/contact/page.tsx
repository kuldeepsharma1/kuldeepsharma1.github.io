import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import Updates from "@/components/custom/Contact/Updates";
import data from '@/public/assets/data/Insights/Insights.json'
import type { Metadata } from 'next'
import ContactHero from "@/components/custom/Contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Generated by create next app",
};


export default function Contact() {
  const limitedInsights = data.posts.slice(0, 6);
  return (
    <div className="max-w-7xl mx-auto">

      <TabSwitch
        index={5}
        primaryTab={{
          title: "Contact",
          count: '5',
          description:
            "I am an IT student and developer who is passionate about entrepreneurship. I love to explore new technologies and am currently developing cool projects.",
        }}
        primaryChildren={
          <ContactHero />
        }
      />

      <section className="px-4 py-10 ">
        <Updates title="View My Latest Insights" posts={limitedInsights} />
      </section>
    </div>
  );
}
