'use client'

import SidebarCard from '@/components/SidebarCard'
import FeedItem from '@/components/FeedItem'
import ProfileLayout from '@/components/ProfileLayout'

const bookmarks = [
  {
    date: 'Books',
    items: [
      {
        type: 'bookmark',
        content: "Zero to One - Peter Thiel",
        description: "Notes on startups, or how to build the future",
        hasShare: true
      },
      {
        type: 'bookmark',
        content: "Principles - Ray Dalio",
        description: "Life and work principles from a legendary investor",
        hasShare: true
      },
      {
        type: 'bookmark',
        content: "The Beginning of Infinity - David Deutsch",
        description: "Explanations that transform the world",
        hasShare: true
      }
    ]
  },
  {
    date: 'Articles & Essays',
    items: [
      {
        type: 'bookmark',
        content: "How to Get Startup Ideas - Paul Graham",
        description: "The best startup ideas come from problems you personally experience",
        hasShare: true
      },
      {
        type: 'bookmark',
        content: "The Bus Ticket Theory of Genius - Paul Graham",
        description: "Natural ability + obsessive interest = genius",
        hasShare: true
      },
      {
        type: 'bookmark',
        content: "What You'll Wish You'd Known - Paul Graham",
        description: "Don't make the mistake of thinking you have to know what you're going to do with your life",
        hasShare: true
      }
    ]
  },
  {
    date: 'Videos',
    items: [
      {
        type: 'bookmark',
        content: "The Most Important Thing School Never Taught You",
        description: "Naval on how to think clearly",
        hasShare: true
      },
      {
        type: 'bookmark',
        content: "Inside OpenAI - The Story Behind ChatGPT",
        description: "60 Minutes special on the development of ChatGPT",
        hasShare: true
      }
    ]
  }
]

export default function BookmarksPage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Bookmarks">
        <p className="text-xs text-[#666]">Andre's favorite books, articles, and videos.</p>
        <div className="divide-y divide-[#E9E9E9]">
          {bookmarks.map(({ date, items }) => (
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