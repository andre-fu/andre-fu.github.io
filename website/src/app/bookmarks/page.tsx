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
        content: "Meditations - Marcus Aurelius",
        description: "George Hays version, lots of quotes to think & live by",
        url: "https://classics.mit.edu/Antoninus/meditations.html"
      },
    //   {
    //     type: 'bookmark',
    //     content: "Principles - Ray Dalio",
    //     description: "Life and work principles from a legendary investor",
    //     url: "https://www.principles.com/"
    //   },
    //   {
    //     type: 'bookmark',
    //     content: "The Beginning of Infinity - David Deutsch",
    //     description: "Explanations that transform the world",
    //     url: "https://www.amazon.com/Beginning-Infinity-Explanations-Transform-World/dp/0143121359"
    //   }
    ]
  },
  {
    date: 'Articles & Essays',
    items: [
      {
        type: 'bookmark',
        content: "How to do Great Work - Paul Graham",
        description: "What does great work mean & what does it look like",
        url: "https://www.paulgraham.com/greatwork.html"
      },
      {
        type: 'bookmark',
        content: "Examples of quickly Accomplishing ambitious goals",
        description: "Patrick Collison's examples of people who quickly accomplished ambitious goals",
        url: "https://patrickcollison.com/fast"
      },
      {
        type: 'bookmark',
        content: "What You'll Wish You'd Known - Paul Graham",
        description: "Don't make the mistake of thinking you have to know what you're going to do with your life",
        url: "http://www.paulgraham.com/hs.html"
      }
    ]
  },
  {
    date: 'Videos',
    items: [
      {
        type: 'bookmark',
        content: "Steve Job's Secrets of Life",
        description: "Jobs on how you can influence everything around you",
        url: "https://www.youtube.com/watch?v=kYfNvmF0Bqw&list=PLfVty60NmULHUZ7opf1js9n4NH2QhEHNB&index=2"
      },
      {
        type: 'bookmark',
        content: "Casey Neistat's 'Fat & Lazy'",
        description: "We all have the same amount of time, but we use it differently",
        url: "https://www.youtube.com/watch?v=ZexvTZ1sV8U&list=FLxNI1cYVDIZb6dB8_XmGKyQ"
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