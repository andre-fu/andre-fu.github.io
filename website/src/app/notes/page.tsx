'use client'

import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'

const notes = [
  {
    title: "Thoughts on Web Development in 2023",
    preview: "The landscape of web development has changed dramatically...",
    date: "Oct 24, 2023",
    privacy: "Everyone",
    comments: 5
  },
  {
    title: "My Journey Through Engineering Science",
    preview: "Four years ago, I started my journey at UofT Engineering Science...",
    date: "Oct 20, 2023",
    privacy: "Friends",
    comments: 12
  },
  {
    title: "Building a Modern Facebook Clone",
    preview: "I decided to recreate the classic Facebook UI using modern tech...",
    date: "Oct 15, 2023",
    privacy: "Friends of Friends",
    comments: 3
  }
]

export default function NotesPage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Andre's Notes" action="Write Note">
        <p className="text-xs text-[#666]">Displaying all 8 notes</p>
        <div className="divide-y divide-[#E9E9E9]">
          {notes.map((note, index) => (
            <div key={index} className="py-4">
              <div className="flex items-start justify-between">
                <div>
                  <a href="#" className="text-[#3B5998] hover:underline font-bold">
                    {note.title}
                  </a>
                  <p className="mt-1 text-sm">{note.preview}</p>
                  <div className="mt-2 flex gap-2 text-xs text-[#666]">
                    <span>Written {note.date}</span>
                    <span>•</span>
                    <span>Visible to {note.privacy}</span>
                    <span>•</span>
                    <a href="#" className="text-[#3B5998] hover:underline">
                      {note.comments} Comment{note.comments !== 1 ? 's' : ''}
                    </a>
                  </div>
                </div>
                <button className="flex items-center gap-1 rounded bg-[#3B5998] px-2 py-0.5 text-xs text-white">
                  Share
                  <span className="text-sm">+</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 