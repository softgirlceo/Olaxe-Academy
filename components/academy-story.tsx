'use client'

import { Reveal } from './reveal'

export function AcademyStory() {
  return (
    <section id="academy" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {/* Why we exist */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
                Why Olaxe Academy exists
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
                <span className="text-gradient-gold">Information</span> has
                never been cheaper. Clarity has never been rarer.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground pretty">
                Today&apos;s learner is not short of content. They are
                surrounded by it — endless videos, threads and courses, each
                pointing in a slightly different direction. What&apos;s missing
                is structure, accountability and the confidence to actually
                apply what they know.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground pretty">
                Information alone rarely changes a life. Guided implementation
                does. Olaxe Academy was built for the moment learning stops
                being something you consume and becomes something you can do —
                deliberately, repeatedly and with real understanding.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Environmental divider — light, not a line */}
        <div className="my-24 flex justify-center">
          <div className="h-px w-40 gold-hairline" />
        </div>

        {/* Teaching philosophy */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="order-2 space-y-6 lg:order-1 lg:col-span-6">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-muted-foreground pretty">
                Every lesson is designed to move a student from confusion to
                confidence. We break complex ideas into manageable concepts,
                explain them with real-world analogies, demonstrate them in
                practice, and stay close through the parts that usually cause
                people to quit.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg leading-relaxed text-muted-foreground pretty">
                The goal is never simply to finish a course. It is to leave with
                a skill you can carry into real situations — the difference
                between having watched someone cook and being able to prepare
                the meal yourself.
              </p>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
            <Reveal>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
                How we teach
              </p>
              <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
                Understanding first. Then memory. Then{' '}
                <span className="text-gradient-gold">mastery.</span>
              </h2>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
