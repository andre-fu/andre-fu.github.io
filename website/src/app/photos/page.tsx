'use client'

import Image from 'next/image'
import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'

const photos = [
  {
    src: "/placeholder.svg?height=200&width=200",
    album: "Profile Pictures",
    date: "Oct 24, 2023"
  },
  {
    src: "/placeholder.svg?height=200&width=200",
    album: "Autumn '06",
    date: "Oct 23, 2023"
  },
  // Add more photos as needed
]

export default function PhotosPage() {
  return (
    <ProfileLayout>
      <SidebarCard title="Andre's Photos" action="Upload Photos">
        <p className="text-xs text-[#666]">Displaying all 1,211 photos</p>
        <div className="grid grid-cols-2 gap-4 p-2">
          {photos.map((photo, index) => (
            <div key={index} className="space-y-2">
              <Image
                src={photo.src}
                alt={`Photo from ${photo.album}`}
                width={200}
                height={200}
                className="rounded border border-[#B7B7B7]"
              />
              <div>
                <a href="#" className="text-sm text-[#3B5998] hover:underline">
                  {photo.album}
                </a>
                <p className="text-xs text-[#666]">{photo.date}</p>
              </div>
            </div>
          ))}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 