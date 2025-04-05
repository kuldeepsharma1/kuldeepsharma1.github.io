import Cta from '@/components/custom/cta/Cta'
import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import Primary from '@/components/custom/Works/Primary'
import Secondary from '@/components/custom/Works/Secondary'
import projects from '@/public/assets/data/works/projects.json'
import { DeveloperProject } from '@/types/works'


export default function Page() {
  const workItems = projects.filter((item) => item.type === 'work') as DeveloperProject[]
  const personalItems = projects.filter((item) => item.type === 'personal') as DeveloperProject[]
  return (
    <div className='max-w-7xl mx-auto'>
      <TabSwitch
        index={3}
        primaryTab={{
          title: "Work",
          count: '3(a)',
          description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
        }}
        secondaryTab={{
          title: "Personal",
          count: '3(b)',
          description: "Side projects and experiments I've built."
        }}
        primaryChildren={
          <Primary items={workItems} />
        }
        secondaryChildren={
          <Secondary items={personalItems} />
        }
      />
      <Cta badgeText="Let&apos;s Build Together"
        title="Want to collaborate on something amazing?"
        description="I&apos;m always open to working on innovative projects in machine learning, AI, and software development. Whether it&apos;s a startup idea, a research project, or a side hustle, let&apos;s build something great together."
        readMoreLink="/insights"
        readMoreLinkText='View Insights'
        contactLink="/contact"
      />
    </div>
  )
}
