'use client'

import { useEffect, useRef, useState } from 'react'
import { BadgeCheck } from 'lucide-react'
import { Reveal } from './reveal'

function useCountUp(target: number, run: boolean, duration = 1800) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    let startTime = 0
    const step = (t: number) => {
      if (!startTime) startTime = t
      const progress = Math.min((t - startTime) / duration, 1)
      // Ease out — accelerate then settle gently.
      const eased = 1 - (1 - progress) ** 3
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])
  return value
}

const NUMERIC = [
  { value: 100, suffix: '+', label: 'Community members' },
  { value: 4, suffix: '', label: 'Premium learning paths' },
  { value: 100, suffix: '%', label: 'Practical learning approach' },
]

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          {NUMERIC.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <StatItem {...stat} run={run} />
            </Reveal>
          ))}
          <Reveal delay={270}>
            <div className="flex flex-col">
              <BadgeCheck className="h-9 w-9 text-gold" strokeWidth={1.4} />
              <p className="mt-3 max-w-[10rem] text-sm leading-relaxed text-muted-foreground">
                Certificates awarded upon completion
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StatItem({
  value,
  suffix,
  label,
  run,
}: {
  value: number
  suffix: string
  label: string
  run: boolean
}) {
  const count = useCountUp(value, run)
  return (
    <div className="flex flex-col">
      <span className="font-serif text-5xl text-gradient-gold tabular-nums sm:text-6xl">
        {count}
        {suffix}
      </span>
      <p className="mt-3 max-w-[10rem] text-sm leading-relaxed text-muted-foreground">
        {label}
      </p>
    </div>
  )
}
