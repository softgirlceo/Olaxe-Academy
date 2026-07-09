'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay in ms before the reveal transition begins. */
  delay?: number
}

/**
 * Progressive, reading-paced reveal. Content emerges through combined opacity
 * and gentle upward translation as the visitor naturally arrives at it.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  className,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            target.style.transitionDelay = `${delay}ms`
            target.classList.add('is-visible')
            observer.unobserve(target)
          }
        }
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <Tag ref={ref as never} className={`reveal ${className ?? ''}`}>
      {children}
    </Tag>
  )
}
