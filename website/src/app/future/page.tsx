'use client'

import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'

const futureItems = [
  {
    category: "Building",
    items: [
      {
        title: "AI Agents",
        description: "Building AI agents that can help humans be more productive and creative. Exploring the intersection of LLMs, planning, and human interaction."
      },
      {
        title: "Human-AI Collaboration",
        description: "AI  is clearly the future, but it's not evenly distributed. There's $B to be made by bringing it from tip of spear to the masses, and improving millions of lives along the way. "
      },
      {
        title: "Developer Tools",
        description: "Developers/Engineers are a new class of influencers. They used to be needed for 100% of the project, \
        but now human engineers will be needed for the last 5-10% that's out of distribution. AI can assist in the last 5-10%, but a lot more mental effort needs to be put into the last 5-10%."
      }
    ]
  },
  {
    category: "Exploring",
    items: [
      {
        title: "Embodied AI",
        description: "I think there will come a point when AI will need to interact with the real world. How will AI Agents get you a coffee? "
      },
      {
        title: "Brain-Computer Interfaces",
        description: "Following developments in neural interfaces and their potential to transform human-computer interaction."
      }
    ]
  },
  {
    category: "Learning",
    items: [
      {
        title: "Cognitive Science",
        description: "Studying how humans learn, think, and make decisions to inform better AI system design."
      },
      {
        title: "Systems Design",
        description: "Learning about complex systems, emergence, and how to build robust, scalable architectures."
      }
    ]
  }
]

export default function FuturePage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Future">
        <p className="text-xs text-[#666]">What I&apos;m excited about building.</p>
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