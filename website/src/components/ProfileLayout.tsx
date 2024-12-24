import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SidebarCard from './SidebarCard'

const navLinks = [
  { text: 'home', href: '/' },
//   { text: 'search', href: '/search' },
//   { text: 'browse', href: '/browse' },
//   { text: 'invite', href: '/invite' },
//   { text: 'help', href: '/help' },
  { text: 'logout', href: '', onClick: () => close() }
]

const profileLinks = [
  { text: "View More Photos of Andre (1,211)", href: "https://instagram.com/andre.fu", icon: "/icons/photos.png" },
  { text: "Read Notes by Andre (8)", href: "https://futurepinons.substack.com/", icon: "/icons/page_white_edit.png" },
  { text: "View Andre's principles", href: "/principles", icon: "/icons/book_addresses.png" },
  { text: "View Andre's bookmarks", href: "/bookmarks", icon: "/icons/flag_blue.png" },
  { text: "Poke Him!", href: "/poke", icon: "/icons/emoticon_happy.png" },
  { text: "Remove from Friends", href: "https://www.youtube.com/watch?v=o4GNepioKxM", icon: "/icons/link_break.png" }
]

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="min-h-screen bg-[#D8DFEA] font-['Lucida_Grande',Tahoma,Verdana,Arial,sans-serif] [-webkit-font-smoothing:none] [font-smooth:never]">
      <nav className="bg-[#3B5998] px-4 py-1 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-2xl font-bold">facebook</div>
          <div className="flex gap-4 text-sm">
            {navLinks.map(link => (
              <a 
                key={link.text} 
                href={link.href} 
                onClick={link.onClick} 
                className="hover:underline"
              >
                {link.text}
              </a>
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
                <div key={link.text} className="pb-1">
                  <Link href={link.href} className="flex items-center gap-2 hover:underline">
                    <Image
                      src={link.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    {link.text}
                  </Link>
                  <div className="mt-1 h-px bg-gray-700"></div>
                </div>
              ))}
            </div>

            <SidebarCard title="Status">
              <div className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Andre is online now.
              </div>
            </SidebarCard>

            {/* <SidebarCard title="Mutual Friends (89)" /> */}

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


          </aside>

          <div className="w-[70%]">
            <div className="mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#3B5998]">Andre</h2>
                  <div className="text-sm text-[#666]">
                    <p>University of Toronto, Engineering Science Alum 2T1</p>
                    <p>SF/NYC/Toronto</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 bg-[#3B5998] px-4 py-1 text-white">
                  Share
                  <span className="ml-1 text-lg">+</span>
                </button>
              </div>
            </div>

            {children}
          </div>
        </div>
      </main>
    </div>
  )
} 