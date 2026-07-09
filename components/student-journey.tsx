'use client'

import { Reveal } from './reveal'

const STEPS = [
  { title: 'Discover Olaxe Academy', detail: 'You arrive here — and sense that this is built differently.' },
  { title: 'Join the WhatsApp Community', detail: 'Your first step and the academy\u2019s reception area, not a sales funnel.' },
  { title: 'Explore every learning path', detail: 'Each discipline is explained in full so you can decide with clarity.' },
  { title: 'Choose the right discipline', detail: 'Pick the path that fits your goals — or ask for guidance if unsure.' },
  { title: 'Complete enrollment', detail: 'Once you know what you want, you move forward with confidence.' },
  { title: 'Receive structured lessons', detail: 'A deliberate order that builds understanding step by step.' },
  { title: 'Practise through implementation', detail: 'You apply what you learn — learning never ends at watching.' },
  { title: 'Get guidance and support', detail: 'Ask questions freely; understanding comes before moving on.' },
  { title: 'Complete the programme', detail: 'You finish having built real, applied skill.' },
  { title: 'Earn your certificate', detail: 'An official certificate of completion recognises your commitment.' },
  { title: 'Apply your skills in the real world', detail: 'You carry your new ability into work, business and opportunity.' },
]

export function StudentJourney() {
  return (
    <section id="journey" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              What actually happens after you join
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
              The path from{' '}
              <span className="text-gradient-gold">curious</span> to capable.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground pretty">
              Everyone begins in the official WhatsApp Community, where every
              learning path is explained in detail. Already know what you want?
              Move straight ahead. Still deciding? You&apos;ll receive enough
              guidance to choose with confidence — never pressure.
            </p>
          </Reveal>
        </div>

        <ol className="relative mt-16 border-l border-border/60 pl-8 md:pl-12">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 50} className="relative pb-11 last:pb-0">
              <span className="absolute -left-[calc(2rem+1px)] top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:-left-[calc(3rem+1px)]">
                <span className="h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(230,194,108,0.7)]" />
              </span>
              <div className="flex flex-wrap items-baseline gap-x-4">
                <span className="font-serif text-sm text-gold/60 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl text-foreground">{step.title}</h3>
              </div>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
