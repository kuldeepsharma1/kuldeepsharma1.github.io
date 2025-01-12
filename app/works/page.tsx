import TabSwitch from '@/components/custom/TabSwitch/TabSwitch'
import React from 'react'

export default function page() {
  return (
    <div>  <TabSwitch
      index={2}
      primaryTab={{
        title: "Work",
        count: 2,
        description: "I am a IT student and developer who is passionate about entrepreneurship. and I loves to explore new technologies. I am currently developing cool projects."
      }}
      secondaryTab={{
        title: "Personal",
        count: 4,
        description: "Side projects and experiments I've built."
      }}
      primaryChildren={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2>Work Projects</h2>
          {/* Your primary content here */}
        </div>
      }
      secondaryChildren={
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <h2>Personal Projects</h2>
          {/* Your secondary content here */}
        </div>
      }
    /></div>
  )
}
