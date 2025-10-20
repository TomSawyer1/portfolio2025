import { cn } from '@/lib/cn'
import { ReactNode } from 'react'

interface ChipProps {
  children: ReactNode
  className?: string
  active?: boolean
  onClick?: () => void
}

export function Chip({ children, className, active, onClick }: ChipProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'chip',
        active && 'bg-primary/20 border-primary font-semibold',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </span>
  )
}

