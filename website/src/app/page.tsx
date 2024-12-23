'use client'

import SidebarCard from '@/components/SidebarCard'
import FeedItem from '@/components/FeedItem'
import ProfileLayout from '@/components/ProfileLayout'

const feedItems = [
  {
    date: 'Today',
    items: [
      {
        type: 'event',
        content: "Andre plans to attend Fetterman's Belated Birthday Bash.",
        hasShare: true
      },
      {
        type: 'video',
        content: "Andre posted a video.",
        title: "YouTube - A Picture a Day Parody",
        description: "A parody of all those 'a picture a day' videos you see everywhere :)",
        comment: "pretty creative video...",
        thumbnail: "/placeholder.svg?height=96&width=128"
      }
    ]
  },
  {
    date: 'Yesterday',
    items: [
      {
        type: 'event',
        content: "Andre plans to attend Facebook Halloween Costume Contest."
      },
      {
        type: 'photo',
        content: "Andre added new photos.",
        album: "Autumn '06",
        count: "25 Photos",
        thumbnail: "/placeholder.svg?height=100&width=100"
      }
    ]
  }
]

export default function Page() {
  return (
    <ProfileLayout>
      <SidebarCard title="Mini-Feed" action="See All">
        <p className="text-xs text-[#666]">Displaying 10 stories.</p>
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

