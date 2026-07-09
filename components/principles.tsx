'use client'

import { Layers, MousePointerClick, Compass } from 'lucide-react'
import { Reveal } from './reveal'

const PRINCIPLES = [
  {
    icon: Layers,
    title: 'Understanding before memory',
    body: 'Every idea is broken into manageable concepts and built on the one before it. Where it helps, we use real-life analogies and demonstrations that simplify without losing accuracy — so no learner feels overwhelmed by jargon, whatever their starting point.',
  },
  {
    icon: MousePointerClick,
    title: 'Implementation over consumption',
    body: 'Learning never ends at watching a video. Students complete practical exercises, apply concepts immediately and reinforce them through guided practice. Every lesson asks for meaningful action, because doing is how skill actually forms.',
  },
  {
    icon: Compass,
    title: 'Built for the long term',
    body: 'Olaxe Academy is being built to become one of the most trusted places for practical digital education — remembered for its clarity, patience and thoroughness, not simply for being affordable.',
  },
]

export function Principles() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              The standards behind every lesson
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
              Principles we refuse to{' '}
              <span className="text-gradient-gold">compromise.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.title} delay={i * 100}>
                <div className="flex h-full flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/30 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground pretty">
                    {p.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-24 max-w-3xl text-center font-serif text-2xl leading-relaxed text-balance text-foreground/90 sm:text-3xl">
            We make no exaggerated promises. But we believe deeply that learners
            who genuinely commit to the process will build skills capable of
            creating{' '}
            <span className="text-gradient-gold">real opportunity</span> — in
            their work, their business and their lives.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
