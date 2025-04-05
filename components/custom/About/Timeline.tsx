import React from 'react'
import Section from './Section'


export default function Timeline({timeline}:{ timeline: { [year: string]: string }}) {
    return (
        <Section title="Timeline" variant="timeline">
            {Object.entries(timeline).map(([year, event]) => (
                <div key={year} className="text-sm mb-4 relative pl-6 text-gray-600 dark:text-gray-400">
                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 bg-black dark:bg-white rounded-full shadow-md border border-gray-200 dark:border-gray-700"></span>
                    <strong className="font-semibold text-black dark:text-white">{year}:</strong> <span className="ml-1">{event}</span>
                </div>
            ))}
        </Section>
    )
}
