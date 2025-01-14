import React from 'react'
import Image from 'next/image'

interface FeedItemProps {
  type: string
  content: string
  hasShare?: boolean
  title?: string
  description?: string
  comment?: string
  thumbnail?: string
  album?: string
  count?: string
  url?: string
}

const getIconForContent = (content: string, type: string): string => {
  if (type === 'principle') return '/icons/bell.png'
  if (type === 'bookmark') {
    if (content.toLowerCase().includes('video')) return '/icons/control_start.png'
    if (content.toLowerCase().includes('book')) return '/icons/book_addresses.png'
    return '/icons/page_white_edit.png'  // for articles
  }
  if (content.includes('Ecliptor')) return '/icons/lightbulb.png'
  if (content.includes('Developer')) return '/icons/script_code.png'
  if (content.includes('Microsoft')) return '/icons/magnifier.png'
  if (content.includes('Twitch')) return '/icons/world_go.png'
  if (content.includes('Published work')) return '/icons/script_code.png'
  if (content.includes('UofT')) return '/icons/book_addresses.png'
  return '/icons/bullet_white.png'
}

export default function FeedItem({
  type,
  content,
  hasShare,
  title,
  description,
  comment,
  thumbnail,
  album,
  count,
  url,
}: FeedItemProps) {
  const ContentWrapper = url ? 'a' : 'div'
  const wrapperProps = url ? { href: url, target: "_blank", rel: "noopener noreferrer", className: "block hover:opacity-80" } : {}

  return (
    <div className="flex items-start gap-2">
      <Image
        src={getIconForContent(content, type)}
        alt="Item icon"
        width={16}
        height={16}
        className="mt-1"
      />
      <ContentWrapper {...wrapperProps}>
        <div className="flex-1">
          <p className={`text-sm ${url ? 'text-[#3B5998] hover:underline' : ''}`}>{content}</p>
          {type === 'bookmark' && description && (
            <p className="mt-1 text-xs text-[#666]">{description}</p>
          )}
          {type === 'video' && (
            <div className="mt-2 flex gap-4">
              <div className="flex-1">
                <a href="#" className="text-[#3B5998] hover:underline">
                  {title}
                </a>
                <p className="text-sm">{description}</p>
                {comment && (
                  <p className="mt-1 text-xs text-[#666]">
                    Andre&apos;s comment:
                    <br />
                    {comment}
                  </p>
                )}
              </div>
              <div className="relative h-24 w-32 overflow-hidden rounded border border-[#B7B7B7]">
                {thumbnail && (
                  <Image
                    src={thumbnail}
                    alt="Video thumbnail"
                    width={128}
                    height={96}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-black/50" />
                </div>
              </div>
            </div>
          )}
          {type === 'photo' && thumbnail && (
            <div className="mt-2">
              <Image
                src={thumbnail}
                alt="Album photo"
                width={100}
                height={100}
                className="rounded border border-[#B7B7B7]"
              />
              <p className="mt-1 text-xs">
                Added to:{' '}
                <a href="#" className="text-[#3B5998] hover:underline">
                  {album}
                </a>{' '}
                - {count}
              </p>
            </div>
          )}
        </div>
      </ContentWrapper>
      {hasShare && (
        <button className="flex items-center gap-1 bg-[#3B5998] px-2 py-0.5 text-xs text-white">
          Share
          <span className="text-sm">+</span>
        </button>
      )}
    </div>
  )
} 