import Cta from "@/components/custom/cta/Cta";
import aboutData from "@/public/assets/data/about/about.json";
import TabSwitch from "@/components/custom/TabSwitch/TabSwitch";
import Main from "@/components/custom/About/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Generated by create next app",
};


export default function AboutPage() {
    return (
        <div className="min-h-screen bg-zinc-100 dark:bg-black text-zinc-900 dark:text-white">
            <TabSwitch
                index={2}
                primaryTab={{
                    title: "About",
                    count: '2',
                    description: aboutData.personal_info.profile_summary
                }}
                primaryChildren={
                    <div></div>
                }
            />
            <Main data={aboutData} />
            <Cta
                badgeText="Let's Collaborate"
                title="Ready to Build Something Great?"
                description="I’m excited to work on innovative projects in software development and open-source."
                readMoreLink={aboutData.contact_information.website}
                readMoreLinkText="Explore My Work"
                contactLink={aboutData.contact_information.contact_form}
            />
        </div >
    );
}

