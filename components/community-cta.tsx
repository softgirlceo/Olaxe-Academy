'use client'

import { useRef, useState, type MouseEvent } from 'react'
import { ArrowUpRight } from 'lucide-react'

export const COMMUNITY_URL = 'https://chat.whatsapp.com/CDpoNjk40PL8aeqJwYx6sY'

type Props = {
  label?: string
  variant?: 'primary' | 'ghost'
  className?: string
}

/**
 * The academy's signature call to action. Subtle magnetic behaviour and a
 * metallic sheen that travels across the surface on hover — confident, never
 * desperate. Always directs visitors to the official WhatsApp community first.
 */
export function CommunityCta({
  label = 'Enter the Olaxe Community',
  variant = 'primary',
  className = '',
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const handleMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    setOffset({ x: x * 0.16, y: y * 0.22 })
  }

  const reset = () => setOffset({ x: 0, y: 0 })

  const base =
    'group relative inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-medium tracking-wide transition-[transform,box-shadow,background-color] duration-500 ease-out will-change-transform'

  const styles =
    variant === 'primary'
      ? 'bg-gold text-primary-foreground shadow-[0_10px_40px_-12px_rgba(230,194,108,0.55)] hover:shadow-[0_18px_60px_-14px_rgba(230,194,108,0.7)]'
      : 'border border-[color-mix(in_oklch,var(--gold)_38%,transparent)] text-foreground hover:border-[color-mix(in_oklch,var(--gold)_70%,transparent)] hover:text-gold'

  return (
    <a
      ref={ref}
      href={COMMUNITY_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`${base} ${styles} ${className}`}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
    >
      {variant === 'primary' && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span className="absolute -inset-y-4 -left-1/3 w-1/3 rotate-12 bg-white/30 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
        </span>
      )}
      <span className="relative">{label}</span>
      <ArrowUpRight
        className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.75}
      />
    </a>
  )
}
