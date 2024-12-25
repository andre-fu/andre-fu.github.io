import React, { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { User } from '@supabase/supabase-js'

interface WallPost {
  id: number
  created_at: string
  content: string
  user_email: string
  display_name: string
}

function formatDate(date: string) {
  // Use UTC to ensure consistent formatting between server and client
  const d = new Date(date)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[d.getUTCMonth()]
  const day = d.getUTCDate()
  const hours = d.getUTCHours()
  const minutes = d.getUTCMinutes()
  const ampm = hours >= 12 ? 'pm' : 'am'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes.toString().padStart(2, '0')
  
  return `${month} ${day} ${formattedHours}:${formattedMinutes}${ampm}`
}

export default function WallPosts() {
  const [posts, setPosts] = useState<WallPost[]>([])
  const [newPost, setNewPost] = useState('')
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    loadPosts()
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  async function loadPosts() {
    const { data, error } = await supabase
      .from('wall_posts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error loading posts:', error)
      return
    }
    
    setPosts(data)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!user || !newPost.trim()) return

    // Get first name from user's full name or email
    const fullName = user.user_metadata?.full_name || user.email || ''
    const firstName = fullName.split(' ')[0]

    const { error } = await supabase
      .from('wall_posts')
      .insert([
        {
          content: newPost.trim(),
          user_email: user.email,
          display_name: firstName
        }
      ])

    if (error) {
      console.error('Error posting:', error)
      return
    }

    setNewPost('')
    loadPosts()
  }

  if (!mounted) {
    return null // Prevent flash of wrong content
  }

  return (
    <div className="space-y-4">
      {user ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write something on Andre's wall..."
            className="w-full rounded border border-[#B7B7B7] bg-white p-2 text-sm"
            rows={3}
          />
          <button
            type="submit"
            className="bg-[#3B5998] px-4 py-1 text-sm text-white"
            disabled={!newPost.trim()}
          >
            Post
          </button>
        </form>
      ) : (
        <div className="text-sm text-[#666]">
          Log in to write something on Andre&apos;s wall.
        </div>
      )}

      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="space-y-1 border-b border-[#E9E9E9] pb-4">
            <div className="text-sm text-[#3B5998]">{post.display_name}</div>
            <div className="whitespace-pre-wrap text-sm">{post.content}</div>
            <div className="text-xs text-[#666]">
              {formatDate(post.created_at)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 