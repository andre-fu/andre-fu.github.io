'use client'

import SidebarCard from '@/components/SidebarCard'
import FeedItem from '@/components/FeedItem'
import ProfileLayout from '@/components/ProfileLayout'

const principles = [
  {
    date: 'Life Principles',
    items: [
      {
        type: 'principle',
        content: "Seek discomfort",

      },
      {
        type: 'principle',
        content: "Show up on time, do what you say you'll do",
      },
      {
        type: 'principle',
        content: "Your close friends are your greatest strength",
      },
      {
        type: 'principle',
        content: "The little things matter. A lot.",
      },
      {
        type: 'principle',
        content: "Be generous, be kind and be helpful",
      },
      {
        type: 'principle',
        content: "Return the favour 10 fold.",
      }
    ]
  },
  {
    date: 'Work Principles',
    items: [
      {
        type: 'principle',
        content: "Ship fast, iterate faster. Perfect is the enemy of good.",
      },
      {
        type: 'principle',
        content: "Do it now, don't wait",
      },
      {
        type: 'principle',
        content: "Do more than you think you should",
      },
      {
        type: 'principle',
        content: "Tackle hard problems",
      },
      {
        type: 'principle',
        content: "Execution matters more than strategy",
      },

    ]
  }
]

export default function PrinciplesPage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Principles">
        <p className="text-xs text-[#666]">An evolving list of things I believe.</p>
        <div className="divide-y divide-[#E9E9E9]">
          {principles.map(({ date, items }) => (
            <div key={date} className="py-3">
              <h4 className="mb-2 text-sm font-bold text-[#666]">{date}</h4>
              <div className="space-y-4">
                {items.map((item, index) => (
                  <FeedItem key={`${date}-${index}`} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 