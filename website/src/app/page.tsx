'use client'

import SidebarCard from '@/components/SidebarCard'
import FeedItem from '@/components/FeedItem'
import ProfileLayout from '@/components/ProfileLayout'

const feedItems = [
  {
    date: 'Currently',
    items: [
      {
        type: 'event',
        content: "Founder at Ecliptor, building AI agents for the future.",
        hasShare: false
      },
      {
        type: 'event',
        content: "Developer, Engineer, and Designer",
        hasShare: false
      },
      // {
      //   type: 'video',
      //   content: "Andre posted a video.",
      //   title: "YouTube - A Picture a Day Parody",
      //   description: "A parody of all those 'a picture a day' videos you see everywhere :)",
      //   comment: "pretty creative video...",
      //   thumbnail: "/placeholder.svg?height=96&width=128"
      // }
    ]
  },
  {
    date: 'Previously',
    items: [
      {
        type: 'event',
        content: "Joined Twitch as a Machine Learning Engineer, buit Recommender Systems (aka 'the algorithm')"
      },
      {
        type: 'event',
        content: "Published work on ML Architectures for Computer Vision, model compression, federated learning"
      },
      {
        type: 'event',
        content: "Studied Engineering Science at UofT, built a lot of cool projects & made great friends"
      },
    ]
  }
]

export default function Page() {
  return (
    <ProfileLayout>
      <SidebarCard title="Wall">
        <p className="text-xs text-[#666]">Displaying "About Me".</p>
        <div className="divide-y divide-[#E9E9E9]">
          {feedItems.map(({ date, items }) => (
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

