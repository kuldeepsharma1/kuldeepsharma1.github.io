import Link from 'next/link'

import Section from './Section'
import { BloggingAndContent, OpenSourceAndCommunity, PersonalInterests, PersonalPhilosophy, TechnicalContributions } from '@/types/about'
interface BlogContent {
  technical_contributions: TechnicalContributions;
  blogging_and_content: BloggingAndContent;
  open_source_and_community: OpenSourceAndCommunity;
  personal_philosophy: PersonalPhilosophy;
  personal_interests: PersonalInterests;
}
export default function BlogContent({ technical_contributions, blogging_and_content, open_source_and_community, personal_philosophy, personal_interests }: BlogContent) {
  return (
    <>
      <Section title="Technical Contributions">
        <div className="mb-4 text-zinc-700 dark:text-zinc-300">
          <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">Apps:</h4>
          {technical_contributions.apps.map((app) => (
            <div key={app.name} className="mb-4">
              <Link
                href={app.repository}
                target="_blank"
                className=" hover:underline font-medium text-black dark:text-white"
              >
                {app.name}
              </Link>{" "}
              - {app.description} ({app.technologies.join(", ")})
            </div>
          ))}
        </div>
        <div className="text-zinc-600 dark:text-zinc-400">
          <h4 className="font-semibold text-lg mb-2 text-black dark:text-white">GitHub Repositories:</h4>
          {technical_contributions.github_repositories.map((repo) => (
            <p key={repo.name} className="mb-2">
              <span className="font-medium text-black dark:text-white">{repo.name}</span> - {repo.description} ({repo.language}, {repo.stars} stars)
            </p>
          ))}
        </div>
      </Section>

      <Section title="Blogging & Content">
        {blogging_and_content.platforms.map((platform) => (
          <div key={platform.name} className="mb-2 text-zinc-700 dark:text-zinc-300">
            <Link
              href={platform.url}
              target="_blank"
              className=" hover:underline font-medium text-black dark:text-white"
            >
              {platform.name}
            </Link>{" "}
            - {platform.topics.join(", ")}
          </div>
        ))}
      </Section>

      <Section title="Open Source & Community">
        <div className="mb-4 text-zinc-700 dark:text-zinc-300">
          <p>
            <span className="font-semibold text-black dark:text-white">{open_source_and_community.open_source_contributions.organization}</span>:{" "}
            {open_source_and_community.open_source_contributions.mission}
          </p>
          <p className="text-sm mt-2"><span className="font-semibold text-black dark:text-white">Role:</span> {open_source_and_community.open_source_contributions.role}</p>
          <p className="text-sm"><span className="font-semibold text-black dark:text-white">Contributions:</span> {open_source_and_community.open_source_contributions.contributions.join(", ")}</p>
        </div>
        <div className="text-zinc-600 dark:text-zinc-400">
          <p className="text-sm mt-2"><span className="font-semibold text-black dark:text-white">Roles:</span> {open_source_and_community.community_involvement.roles.join(", ")}</p>
          {open_source_and_community.community_involvement.awards && <p className="text-sm"><span className="font-semibold text-black dark:text-white">Awards:</span> {open_source_and_community.community_involvement.awards.join(", ")}</p>}
        </div>
      </Section>

      <Section title="Personal Philosophy">
        <p className="mb-4 text-zinc-700 dark:text-zinc-300">{personal_philosophy.mission_statement}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-zinc-600 dark:text-zinc-400">
          <div><span className="font-semibold text-black dark:text-white">Values:</span> {personal_philosophy.core_values.join(", ")}</div>
          <div className="col-span-2"><span className="font-semibold text-black dark:text-white">Vision:</span> {personal_philosophy.vision}</div>
        </div>
      </Section>

      <Section title="Interests">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <div><span className="font-semibold text-black dark:text-white">Hobbies:</span> {personal_interests.hobbies.join(", ")}</div>
          <div><span className="font-semibold text-black dark:text-white">Favorite Books:</span> {personal_interests.favorite_books.join(", ")}</div>
        </div>
        <div className="mt-4 text-zinc-700 dark:text-zinc-300">
          {personal_interests.side_projects.map((project) => (
            <p key={project.name} className="mt-2 text-sm">
              <span className="font-semibold text-black dark:text-white">{project.name}</span> - {project.description} ({project.status})
            </p>
          ))}
        </div>
      </Section>
    </>
  )
}
