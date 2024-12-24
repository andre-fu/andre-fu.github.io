import React from 'react'
import SidebarCard from './SidebarCard'
import Link from 'next/link'

interface ContentPageProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-[#D8DFEA] font-['Lucida_Grande',Tahoma,Verdana,Arial,sans-serif] [-webkit-font-smoothing:none] [font-smooth:never]">
      <nav className="bg-[#3B5998] px-4 py-1 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div className="text-2xl font-bold">facebook</div>
          <div className="flex gap-4 text-sm">
            <Link href="/" className="hover:underline">home</Link>
          </div>
        </div>
      </nav>
      
      <main className="mx-auto max-w-6xl px-4 pt-2">
        <header className="mb-2 flex items-center justify-between bg-[#3B5998] px-2 py-1 text-white">
          <h1 className="text-xl">Andre&apos;s Profile</h1>
          <span className="text-xl">Facebook</span>
        </header>

        <SidebarCard title={title}>
          {subtitle && <p className="text-xs text-[#666]">{subtitle}</p>}
          <div className="divide-y divide-[#E9E9E9]">
            {children}
          </div>
        </SidebarCard>
      </main>
    </div>
  )
} 