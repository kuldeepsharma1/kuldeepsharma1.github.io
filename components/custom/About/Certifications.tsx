
import Image from 'next/image'
import Section from './Section'
import { Certification } from '@/types/about'

export default function Certifications({ certifications }: { certifications: Certification[] }) {
    return (
        <Section title="Certifications" >
            {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between mb-4">
                    <p key={cert.name} className="text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="font-semibold text-black dark:text-white">{cert.name}</span> - {cert.issuer} ({cert.year})
                    </p>
                    <Image alt={cert.name} src={cert.image} width={60} height={40} />
                </div>
            ))}

        </Section>
    )
}
