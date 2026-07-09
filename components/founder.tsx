'use client'

import Image from 'next/image'
import { Reveal } from './reveal'

export function Founder() {
  return (
    <section id="founder" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Portrait — integrated into the environment, no hard frame */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    'radial-gradient(circle at 50% 40%, rgba(230,194,108,0.28), transparent 68%)',
                }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <Image
                  src="/founder-maryam.jpeg"
                  alt="Maryam Olayinka, Founder of Olaxe Academy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
                {/* Soft cinematic vignette to blend into the matte black */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(5,5,6,0.75), transparent 42%), radial-gradient(circle at 70% 20%, transparent, rgba(5,5,6,0.35) 90%)',
                  }}
                />
              </div>
            </div>
          </Reveal>

          {/* Introduction */}
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
                Meet the founder behind Olaxe Academy
              </p>
              <h2 className="font-serif text-4xl leading-[1.06] text-balance sm:text-5xl">
                Maryam Olayinka
              </h2>
              <p className="mt-3 text-base text-gold/80">
                Founder • Media Buyer • Digital Strategist &amp; AI Educator
              </p>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground pretty">
                Maryam built Olaxe Academy around a single conviction: people do
                not need more content — they need to be shown how to use what
                they already have. Her focus is helping learners move beyond
                endlessly consuming online material toward confidently
                implementing practical digital skills, through structured
                guidance, real-world application and genuine mentorship.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground pretty">
                What defines her work is not a list of credentials, but a
                deliberately designed learning experience — one built to help
                ordinary people develop practical, income-capable digital skills
                in a patient, supportive environment where clarity always comes
                first.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
