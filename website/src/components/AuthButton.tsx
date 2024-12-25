import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './AuthProvider'

export default function AuthButton() {
  const { user } = useAuth()

  const handleAuth = async () => {
    if (user) {
      await supabase.auth.signOut()
    } else {
      await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      })
    }
  }

  return (
    <button onClick={handleAuth} className="hover:underline">
      {user ? 'logout' : 'login'}
    </button>
  )
} 