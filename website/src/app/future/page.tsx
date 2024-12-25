'use client'

import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'

const futureItems = [
  {
    category: "Tools for the future",
    items: [
      {
        title: "AI Agents",
        description: "Agentic AI enables humans to take a step up the stack and delegate the easy work to AI. Open questions: where will these agents be used? What are the tools they will need, and who will build them?"
      },
      {
        title: "Bringing AI to the long tail",
        description: "AI  is clearly the future, but it's not evenly distributed. There's $B to be made by bringing it from tip of spear to the masses, and improving millions of lives along the way."
      },
      {
        title: "Developer Tools",
        description: "Developers are a new class of influencers. They used to be needed for an entire project, but AI enabled them to be needed for the last 5-10% of the project.\
        This is incredibly powerful, because it means devs can focus on the hardest parts of the project that actually push it forward. Enabling devs to do this at scale will 10x\
        the amount of high quality software that can be built."
      }
    ]
  },
  {
    category: "Exploring",
    items: [
      {
        title: "Embodied AI",
        description: "I think there will come a point when AI will need to interact with the real world. How will an AI Agent get you a coffee? "
      },
      {
        title: "Video Models",
        description: "Recently Sora & Veo2 launched, and the videos are insane. How will we tell content online? More importantly, how will we use this tech to \
        make lives better or easier? Like cameras on smartphones 10x the amount of video online, AI video will 10x the amount of content - are there tools to make this easier?"
      }
    ]
  }
]

export default function FuturePage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Future">
        <p className="text-xs text-[#666]">A list of things I think are important to think about and build.</p>
        <div className="divide-y divide-[#3B5998]">
          {futureItems.map(({ category, items }) => (
            <div key={category} className="py-3">
              <h4 className="mb-2 text-sm font-bold text-[#666]">{category}</h4>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-bold text-[#3B5998] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#666]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 