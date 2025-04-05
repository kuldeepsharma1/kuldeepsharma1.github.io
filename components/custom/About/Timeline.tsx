import React from 'react'
import Section from './Section'
import { Timeline as Time } from '@/types/about'


export default function Timeline({ timeline }: { timeline: Time[] }) {
    return (
        <Section title="Timeline" variant="timeline">
            {timeline.map((item, index) => (
                <div key={index} className="text-sm mb-4 relative pl-6 text-gray-600 dark:text-gray-400">
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-white rounded-full shadow-md border border-gray-200 dark:border-gray-700"></span>
                    <strong className="font-semibold text-black dark:text-white">{item.year}:</strong> <span className="ml-1">{item.title}</span>
                </div>
            ))}
        </Section>
    )
}
