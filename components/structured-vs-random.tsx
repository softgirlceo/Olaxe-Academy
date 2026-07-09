'use client'

import { Reveal } from './reveal'

export function StructuredVsRandom() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              Structure vs. searching
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
              Free resources inform you.{' '}
              <span className="text-gradient-gold">Structure</span> changes what
              you can do.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground pretty">
              Learning entirely from disconnected resources is like building a
              modern house while taking instructions from hundreds of different
              architects. Every instruction may be correct on its own, yet
              combining them into one coherent structure becomes needlessly
              confusing. Olaxe Academy hands you a single blueprint from the
              beginning — so you build with confidence, never second-guessing
              whether you are progressing correctly.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal delay={80}>
            <div className="h-full rounded-3xl border border-border/60 p-8">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground/70">
                Learning at random
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  'Hundreds of sources, each pointing a different way',
                  'No clear order — you never know what comes next',
                  'Plenty of information, little accountability',
                  'Progress is hard to measure or trust',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-gold/30 p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle, rgba(230,194,108,0.35), transparent 70%)',
                }}
              />
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
                Learning with Olaxe
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  'One coherent blueprint from the very first lesson',
                  'A deliberate order that builds on what came before',
                  'Guidance and support through the difficult parts',
                  'Implementation, so knowledge becomes real skill',
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
