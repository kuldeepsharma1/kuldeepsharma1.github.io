

import CertificatesMarquee from "@/components/custom/Home/CertificatesMarquee";
import Cta from "@/components/custom/cta/Cta";

export default function Home() {


  return (
    <div >
      <CertificatesMarquee />
      <Cta badgeText="Let&apos;s Build Together"
        title="Want to collaborate on something amazing?"
        description="I&apos;m always open to working on innovative projects in machine learning, AI, and software development. Whether it&apos;s a startup idea, a research project, or a side hustle, let&apos;s build something great together."
        readMoreLink="/about"
        contactLink="/contact"
      />
    </div>
  );
}
