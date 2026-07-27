import type { ReactNode } from 'react'
import './NeonCard.css'

type Props = {
  children: ReactNode
  className?: string
  accent?: 'cyan' | 'orange'
  as?: 'div' | 'article' | 'section'
}

export function NeonCard({
  children,
  className = '',
  accent = 'cyan',
  as: Tag = 'div',
}: Props) {
  return (
    <Tag className={`neon-card neon-card--${accent} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
