'use client'

import { LogoParticles } from './logo-particles'
import { Reveal } from './reveal'
import { CommunityCta } from './community-cta'

export function ClosingInvitation() {
  return (
    <section
      id="join"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <LogoParticles
          className="h-[520px] w-[520px] opacity-40"
          sizeFraction={0.66}
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[140px]"
        style={{
          background:
            'radial-gradient(circle, rgba(230,194,108,0.24), transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.34em] text-gold/80">
            An open door
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            The picture is ready.
            <br />
            <span className="text-gradient-gold">Come place your pieces.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground pretty sm:text-lg">
            Olaxe Academy is not a course you buy and forget. It is a community
            you grow inside — where structure replaces guesswork, and where the
            skills you build are the kind you actually use. Learn. Scale. Lead.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-12 flex justify-center">
            <CommunityCta />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
