'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ProfileLayout from '@/components/ProfileLayout'
import SidebarCard from '@/components/SidebarCard'
import { useAuth } from '@/components/AuthProvider'

interface Poke {
  id: number
  poker_name: string
  count: number
  created_at: string
}

export default function PokePage() {
  const [pokes, setPokes] = useState<Poke[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    setMounted(true)
    loadPokes()
  }, [])

  async function loadPokes() {
    setLoading(true)
    const { data, error } = await supabase
      .from('pokes')
      .select('*')
      .order('count', { ascending: false })
    
    if (error) {
      console.error('Error loading pokes:', error)
    } else {
      setPokes(data || [])
    }
    setLoading(false)
  }

  async function handlePoke() {
    if (!user) {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/poke`
        }
      })
      return
    }

    const firstName = user.user_metadata?.full_name?.split(' ')[0] || user.email?.split('@')[0] || 'Anonymous'
    
    // Check if user has already poked
    const { data: existingPoke } = await supabase
      .from('pokes')
      .select('*')
      .eq('poker_email', user.email)
      .single()

    if (existingPoke) {
      // Update existing poke count
      const { error } = await supabase
        .from('pokes')
        .update({ count: existingPoke.count + 1 })
        .eq('id', existingPoke.id)

      if (error) {
        console.error('Error updating poke:', error)
        return
      }
    } else {
      // Create new poke
      const { error } = await supabase
        .from('pokes')
        .insert([{
          poker_email: user.email,
          poker_name: firstName,
          count: 1
        }])

      if (error) {
        console.error('Error creating poke:', error)
        return
      }
    }

    loadPokes()
  }

  if (!mounted) {
    return (
      <ProfileLayout>
        <SidebarCard title="Pokes">
          <div className="text-sm text-[#666]">Loading...</div>
        </SidebarCard>
      </ProfileLayout>
    )
  }

  return (
    <ProfileLayout>
      <SidebarCard title="Pokes">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#666]">
              {user ? "Poke Andre to let him know you're thinking of him!" : "Log in to poke Andre!"}
            </p>
            <button
              onClick={handlePoke}
              className="bg-[#3B5998] px-4 py-1 text-sm text-white hover:bg-[#2E4374]"
            >
              Poke!
            </button>
          </div>

          {loading ? (
            <div className="text-sm text-[#666]">Loading pokes...</div>
          ) : pokes.length > 0 ? (
            <div className="divide-y divide-[#E9E9E9]">
              {pokes.map((poke) => (
                <div key={poke.id} className="flex items-center justify-between py-2">
                  <div className="text-sm text-[#3B5998]">{poke.poker_name}</div>
                  <div className="text-xs text-[#666]">
                    {poke.count} {poke.count === 1 ? 'poke' : 'pokes'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-[#666]">No pokes yet. Be the first to poke!</div>
          )}
        </div>
      </SidebarCard>
    </ProfileLayout>
  )
} 