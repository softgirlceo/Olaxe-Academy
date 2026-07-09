'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { LogoParticles } from './logo-particles'
import { CommunityCta } from './community-cta'

type Props = { revealed: boolean }

const lineVariants = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.15 + i * 0.16,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

export function Hero({ revealed }: Props) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left — the message */}
        <motion.div
          initial="hidden"
          animate={revealed ? 'show' : 'hidden'}
          className="relative z-10 order-2 lg:order-1"
        >
          <motion.p
            custom={0}
            variants={lineVariants}
            className="mb-6 text-xs font-medium uppercase tracking-[0.34em] text-gold/80"
          >
            The Digital Headquarters of Olaxe Academy
          </motion.p>

          <h1 className="font-serif text-[2.7rem] leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]">
            <motion.span custom={1} variants={lineVariants} className="block">
              Where scattered
            </motion.span>
            <motion.span custom={2} variants={lineVariants} className="block">
              learning becomes
            </motion.span>
            <motion.span
              custom={3}
              variants={lineVariants}
              className="block text-gradient-gold"
            >
              real, applied skill.
            </motion.span>
          </h1>

          <motion.p
            custom={4}
            variants={lineVariants}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground pretty sm:text-lg"
          >
            Watching a hundred unrelated tutorials is like receiving puzzle
            pieces from different boxes — every piece is useful, yet the full
            picture never appears. Olaxe Academy hands you the finished image
            first, then guides you as you place every piece exactly where it
            belongs.
          </motion.p>

          <motion.div
            custom={5}
            variants={lineVariants}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <CommunityCta />
            <a
              href="#paths"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Explore the learning paths
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right — the living signature */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 mx-auto aspect-square w-full max-w-md lg:order-2"
        >
          <LogoParticles
            className="absolute inset-0 h-full w-full opacity-70"
            sizeFraction={0.62}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[62%] w-[62%] animate-[pulse_6s_ease-in-out_infinite]">
              <Image
                src="/olaxe-logo.jpeg"
                alt="Olaxe Academy — Learn. Scale. Lead."
                fill
                priority
                className="object-contain opacity-90 drop-shadow-[0_0_50px_rgba(230,194,108,0.2)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Ambient depth — soft directional light, no hard edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-30 blur-[130px]"
        style={{
          background:
            'radial-gradient(circle, rgba(230,194,108,0.28), transparent 70%)',
        }}
      />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={revealed ? { opacity: 1 } : {}}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground/70">
          Scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </motion.div>
    </section>
  )
}
