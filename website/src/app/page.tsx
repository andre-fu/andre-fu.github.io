'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import SidebarCard from '@/components/SidebarCard'
import FeedItem from '@/components/FeedItem'

const navLinks = ['home', 'search', 'browse', 'invite', 'help', 'logout']

const profileLinks = [
  "View More Photos of Andre (1,211)",
  "Read Notes by Andre (8)",
  "View All Andre's Friends",
  "Send Andre a Message",
  "View Message History",
  "Poke Him!",
  "Report this Person",
  "Remove from Friends"
]

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
    <div className="min-h-screen bg-[#D8DFEA] font-['Lucida_Grande',Tahoma,Verdana,Arial,sans-serif] [-webkit-font-smoothing:none] [font-smooth:never]">
      <nav className="bg-[#3B5998] px-4 py-1 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-2xl font-bold">facebook</div>
          <div className="flex gap-4 text-sm">
            {navLinks.map(link => (
              <a key={link} href="#" className="hover:underline">{link}</a>
            ))}
          </div>
        </div>
      </nav>
      
      <main className="mx-auto max-w-6xl px-4 pt-2">
        <header className="mb-2 flex items-center justify-between bg-[#3B5998] px-2 py-1 text-white">
          <h1 className="text-xl">Andre&apos;s Profile</h1>
          <span className="text-xl">Facebook</span>
        </header>

        <div className="flex gap-4">
          <aside className="w-[30%] space-y-4">
            <div className="overflow-hidden rounded border border-[#B7B7B7] bg-white">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Profile Picture"
                width={200}
                height={200}
                className="w-full"
                priority
              />
            </div>

            <div className="space-y-1 text-sm text-[#3B5998]">
              {profileLinks.map(link => (
                <a key={link} href="#" className="block hover:underline">{link}</a>
              ))}
            </div>

            <SidebarCard title="Status">
              <div className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Andre is online now.
              </div>
            </SidebarCard>

            <SidebarCard title="Mutual Friends (89)" />

            <SidebarCard title="Posted Items">
              <p className="text-sm">1 posted item.</p>
              <div className="mt-2 flex items-start gap-2">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Video thumbnail"
                  width={50}
                  height={50}
                  className="rounded border border-[#B7B7B7]"
                />
                <div>
                  <a href="#" className="text-sm text-[#3B5998] hover:underline">
                    Video: YouTube - A Picture a Day Parody
                  </a>
                  <p className="text-xs text-gray-500">7:44am Oct 24</p>
                </div>
              </div>
            </SidebarCard>

            <SidebarCard title="Groups" action="See All">
              <div className="text-sm">
                <div className="flex items-center justify-between">
                  <span>30 of 37 groups.</span>
                </div>
                <a href="#" className="mt-2 block text-[#3B5998] hover:underline">
                  Lsjumb • Paloma 01-02
                </a>
              </div>
            </SidebarCard>
          </aside>

          <div className="w-[80%]">
            <div className="mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#3B5998]">Andre</h2>
                  <div className="text-sm text-[#666]">
                    <p>University of Toronto, Engineering Science Alum 2T1</p>
                    <p>SF/NYC/Toronto</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 rounded bg-[#3B5998] px-4 py-1 text-white">
                  Share
                  <span className="ml-1 text-lg">+</span>
                </button>
              </div>
            </div>

            <Card className="overflow-hidden">
              <div className="bg-[#E7E7E7] px-2 py-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#333333]">▼ Mini-Feed</h3>
                  <a href="#" className="text-sm text-[#3B5998] hover:underline">
                    See All
                  </a>
                </div>
                <p className="text-xs text-[#666]">Displaying 10 stories.</p>
              </div>
              <div className="divide-y divide-[#E9E9E9] p-2">
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
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

