import { Code, Layers } from "lucide-react";
import { GithubIcon } from "../icon";
import Section from "../About/Section";


export default function Skill() {
    const skills = [
        { name: 'JavaScript / TypeScript', icon: Code },
        { name: 'React / Next.js', icon: Code },
        { name: 'Node.js', icon: Code },
        { name: 'HTML & CSS', icon: Code },
        { name: 'Tailwind CSS', icon: Code },
        { name: 'AWS', icon: Layers },
        { name: 'Docker', icon: Layers },
        { name: 'Git', icon: GithubIcon },
        { name: 'SQL / NoSQL', icon: Layers },
        { name: 'Testing', icon: Code },

    ];
    return (
        <Section title="Skills & Technologies" desc="My toolkit for building robust and efficient applications." >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <skill.icon className="w-6 h-6 flex-shrink-0 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-200" />
                            <span className="text-sm md:text-base font-medium text-zinc-700 dark:text-zinc-300">{skill.name}</span>
                        </div>
                    ))}
                </div>
        </Section>


    )
}


