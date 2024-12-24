import React from 'react'
import { Card } from '@/components/ui/card'

export default function SidebarCard({
  title,
  children,
  action,
}: {
  title: string
  children?: React.ReactNode
  action?: string
}) {
  return (
    <Card>
      <div className="bg-[#6e84b4] px-2 py-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white">▼ {title}</h3>
          {action && (
            <a href="#" className="text-sm text-white hover:underline">
              {action}
            </a>
          )}
        </div>
      </div>
      {children && <div className="p-2">{children}</div>}
    </Card>
  )
} 