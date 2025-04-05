import React from 'react'
import Section from './Section'
import { Certification, Education } from '@/types/about'

export default function EduAndCert({ education, certifications }: { education: Education, certifications: Certification[] }) {
    return (
        <>
            <Section title="Education">
                <div className="mb-4 text-zinc-700 dark:text-zinc-300">
                    <p className="font-semibold text-lg text-black dark:text-white">{education.degree}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{education.university} - {education.graduation_year}</p>
                    <p className="text-sm mt-2">{education.details}</p>
                </div>
                <div className="mt-4 text-zinc-600 dark:text-zinc-400">
                    <h4 className="font-semibold text-md mb-2 text-black dark:text-white">Courses:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        {education.additional_courses.map((course) => (
                            <p key={course.name}>{course.name} - {course.provider} ({course.year})</p>
                        ))}
                    </div>
                </div>
            </Section>

            <Section title="Certifications" variant="grid">
                {certifications.map((cert) => (
                    <p key={cert.name} className="text-sm text-zinc-600 dark:text-zinc-400">
                        <span className="font-semibold text-black dark:text-white">{cert.name}</span> - {cert.issuer} ({cert.year})
                    </p>

                ))}

            </Section>
        </>
    )
}
