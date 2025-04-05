import React from 'react'
import Section from './Section'
import { Check, Languages, ShieldCheck, Sparkles } from 'lucide-react'
import { PersonalInfo, ProfessionalSummary, WorkExperience } from '@/types/about'
interface Right {
  personal_info: PersonalInfo;
  professional_summary: ProfessionalSummary;
  work_experience: WorkExperience[];
}
export default function Right({ personal_info, professional_summary, work_experience }: Right) {
  return (
    <>
      <Section title="Professional Summary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400 pb-6">
          <div>
            <p className="font-semibold text-black dark:text-white flex items-center gap-1"><Languages className="size-4 " />Languages</p> {personal_info.languages.join(" · ")}</div>
          <div>
            <p className="font-semibold text-black dark:text-white flex items-center gap-1"><Sparkles className="size-4 " />Aliases</p> {personal_info.aliases.join(" · ")}</div>
        </div>
        <p className="text-lg leading-relaxed mb-4 text-zinc-700 dark:text-zinc-300">{professional_summary.description}</p>
        <div className="bg-white fetured-stagger-trigger dark:bg-zinc-800 rounded-md shadow-md p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white flex items-center">
              <ShieldCheck className="size-5 mr-2 " />
              Key Strengths
            </h3>
          </div>
          <ul className="list-none pl-0 grid sm:grid-cols-2 md:grid-cols-3 gap-2 featured-stagger">
            {professional_summary.key_strengths.map((strength, index) => (
              <li key={index} className="flex flex-row items-center mb-2">
                <Check className="size-4 mr-2 text-green-500" />
                <span className="text-base text-zinc-700 dark:text-zinc-300">
                  {strength}
                </span>
              </li>
            ))}
          </ul>
        </div>


      </Section>
      <Section title="Work Experience">
        {work_experience.map((work) => (
          <div key={work.company} className="mb-8 last:mb-0 p-4 rounded-lg bg-zinc-50 dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <h3 className="font-semibold text-xl text-black dark:text-white mb-2">{work.role} @ {work.company}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{work.duration}</p>
            <ul className="list-disc list-inside text-sm mb-4 text-zinc-600 dark:text-zinc-300">
              {work.responsibilities.map((resp, idx) => (
                <li key={idx} className="mb-1">{resp}</li>
              ))}
            </ul>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              <span className="font-semibold text-black dark:text-white">Achievements:</span> {work.achievements.join(", ")}
            </p>
          </div>
        ))}
      </Section>
    </>
  )
}
