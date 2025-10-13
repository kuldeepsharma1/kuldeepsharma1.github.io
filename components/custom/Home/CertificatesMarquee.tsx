import { Marquee } from '@/components/ui/marquee';
import Image from 'next/image';

const logos = [
  {
    name: "ISRO",
    img: "/assets/images/certificates/isro.png",
  },
  {
    name: "Acmegrade",
    img: "/assets/images/certificates/acmegrade.jpg",
  },
  {
    name: "Cisco Iot",
    img: "/assets/images/certificates/cisco-iot.jpg",
  },
  {
    name: "Cyber",
    img: "/assets/images/certificates/cyber.jpg",
  },
  {
    name: "Cognizant",
    img: "/assets/images/certificates/cognizant.jpg",
  },
  {
    name: "Google",
    img: "/assets/images/certificates/google.jpeg",
  },
  {
    name: "Deloitte",
    img: "/assets/images/certificates/deloitte.jpeg",
  },
  {
    name: "IIT",
    img: "/assets/images/certificates/iit.jpg",
  },
  {
    name: "Infotech",
    img: "/assets/images/certificates/infotech.jpg",
  },
  {
    name: "Mimo",
    img: "/assets/images/certificates/mimo.jpeg",
  },
  {
    name: "Standford",
    img: "/assets/images/certificates/stanford.jpg",
  },
  {
    name: "Linkedin",
    img: "/assets/images/certificates/linkedin.jpeg",
  },
];
export default function CertificatesMarquee() {
  return (
    <section>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden   bg-background  md:shadow-xl">
        <div className="flex flex-row gap-4 [perspective:1000px]">
          <Marquee
            className="h-52 justify-center overflow-hidden [--duration:60s] [--gap:1.5rem]"
          >
            {logos.map((data, idx) => (
              <Image width={600} height={400}
                key={idx}
                src={data.img}
                alt={data.name}
                className="mx-auto h-full w-3/4 cursor-pointer rounded-xl border border-neutral-300 transition-all duration-300 hover:ring-1 hover:ring-neutral-300"
              />
            ))}
          </Marquee>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  )
}
