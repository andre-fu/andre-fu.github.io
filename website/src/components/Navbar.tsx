import React from 'react'
import Link from 'next/link'
import AuthButton from './AuthButton'

export default function Navbar() {
  return (
    <nav className="bg-[#3B5998] px-4 py-1 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-2xl font-bold">facebook</div>
        <div className="flex gap-4 text-sm">
          <Link href="/" className="hover:underline">
            home
          </Link>
          <AuthButton />
        </div>
      </div>
    </nav>
  )
} 