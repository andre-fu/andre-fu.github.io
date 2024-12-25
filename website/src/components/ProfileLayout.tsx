import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SidebarCard from './SidebarCard'
import Navbar from './Navbar'
import { supabase } from '@/lib/supabase'
import { useAuth } from './AuthProvider'

const profileLinks = [
  { text: "View More Photos of Andre ", href: "https://instagram.com/andre.fu", icon: "/icons/photos.png" },
  { text: "Read Notes by Andre", href: "https://futurepinons.substack.com/", icon: "/icons/page_white_edit.png" },
  { text: "View Andre's principles", href: "/principles", icon: "/icons/book_addresses.png" },
  { text: "View Andre's bookmarks", href: "/bookmarks", icon: "/icons/wand.png" },
  { text: "Remove from Friends", href: "https://www.youtube.com/watch?v=o4GNepioKxM", icon: "/icons/link_break.png" }
]

interface ProfileLayoutProps {
  children: React.ReactNode
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  const { user } = useAuth()

  const handlePoke = async () => {
    if (!user) {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/poke`
        }
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#D8DFEA] font-[Lucida_Grande,Tahoma,Verdana,Arial,sans-serif] [-webkit-font-smoothing:none] [font-smooth:never]">
      <Navbar />
      
      <main className="mx-auto max-w-6xl px-4 pt-2">
        <header className="mb-2 flex items-center justify-between bg-[#3B5998] px-2 py-1 text-white">
          <h1 className="text-xl">Andre&apos;s Profile</h1>
          <span className="text-xl">Facebook</span>
        </header>

        <div className="flex gap-4">
          <aside className="w-[30%] space-y-4">
            <div className="overflow-hidden rounded border border-[#B7B7B7] bg-white">
              <div className="aspect-square relative">
                <Image
                  src="/PROFILE_PIC.JPG"
                  alt="Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
              <div className="pb-1">
                {user ? (
                  <Link href="/poke" className="flex items-center gap-2 hover:underline">
                    <Image
                      src="/facebook-poke-icon.png"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    Poke Him!
                  </Link>
                ) : (
                  <button
                    onClick={handlePoke}
                    className="flex items-center gap-2 hover:underline text-[#3B5998] text-left"
                  >
                    <Image
                      src="/icons/emoticon_happy.png"
                      alt=""
                      width={16}
                      height={16}
                      className="h-4 w-4"
                    />
                    Poke Him!
                  </button>
                )}
                <div className="mt-1 h-px bg-gray-700"></div>
              </div>
            </div>

            <SidebarCard title="Status">
              <div className="flex items-center gap-2 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Andre is online now.
              </div>
            </SidebarCard>

            <SidebarCard title="Links">
              <div className="space-y-2 text-sm">
                <Link href="https://x.com/andrezfu" className="flex items-center gap-2 text-[#3B5998] hover:underline">
                  <Image
                    src="/icons/world_go.png"
                    alt="Twitter"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  Twitter
                </Link>
                <Link href="https://github.com/andre-fu" className="flex items-center gap-2 text-[#3B5998] hover:underline">
                  <Image
                    src="/icons/script_code.png"
                    alt="GitHub"
                    width={16}
                    height={16}
                    className="h-4 w-4"
                  />
                  GitHub
                </Link>
              </div>
            </SidebarCard>
          </aside>

          <div className="w-[70%]">
            <div className="mb-4">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#3B5998]">Andre Fu</h2>
                  <div className="text-sm text-[#666]">
                    <p>Founder, Engineer & Designer</p>
                    <p>SF/NYC/Toronto</p>
                  </div>
                </div>
                <button
                  className="flex items-center gap-1 bg-[#3B5998] px-4 py-1 text-white"
                  onClick={(event) => {
                    navigator.clipboard.writeText("andrefu.ca");
                    const button = event.currentTarget as HTMLButtonElement;
                    button.textContent = "Copied!";
                    setTimeout(() => {
                      button.textContent = "Share";
                    }, 2000);
                  }}
                >
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