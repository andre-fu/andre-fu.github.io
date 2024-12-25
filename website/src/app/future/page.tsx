'use client'

import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'

const futureItems = [
  {
    title: "AI Agents",
    description: "Building AI agents that can help humans be more productive and creative. Exploring the intersection of LLMs, planning, and human interaction."
  },
  {
    title: "Human-AI Collaboration",
    description: "Developing tools that enable seamless collaboration between humans and AI systems, focusing on 10xing human potential."
  },
  {
    title: "Developer Tools",
    description: "Creating the next generation of developer tools that make coding more intuitive, efficient, and enjoyable."
  }
]

export default function FuturePage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Future">
        <p className="text-xs text-[#666] mb-4">What I&apos;m excited about building.</p>
        <div className="divide-y divide-[#3B5998]">
          {futureItems.map((item) => (
            <div key={item.title} className="py-3">
              <h3 className="text-sm font-bold text-[#3B5998] mb-1">{item.title}</h3>
              <p className="text-sm text-[#666]">{item.description}</p>
            </div>
          ))}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 