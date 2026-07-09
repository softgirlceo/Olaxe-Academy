'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from './reveal'

const FAQS = [
  {
    q: 'How do I join Olaxe Academy?',
    a: 'Every learner begins by joining the official Olaxe Academy WhatsApp Community using the invitation link found throughout this site. Inside, you receive a full explanation of every learning path before deciding which one fits your goals. It is designed to help you decide well — never to pressure you into buying immediately.',
  },
  {
    q: 'Can I join if I am completely new to digital skills?',
    a: 'Yes. Many students begin with little or no prior experience. Every path introduces concepts gradually, building confidence through structured explanations, practical demonstrations and continuous guidance rather than assuming you already know things.',
  },
  {
    q: 'Will I receive a certificate after completing my course?',
    a: 'Yes. Students who successfully complete their chosen programme receive an official Olaxe Academy certificate of completion recognising their learning and commitment.',
  },
  {
    q: 'Are the lessons practical or mostly theoretical?',
    a: 'Practical implementation comes first. You are encouraged to apply what you learn through guided exercises, demonstrations and real-world examples rather than simply consuming information.',
  },
  {
    q: 'Can I ask questions during my learning journey?',
    a: 'Absolutely. Learning should never feel isolating. You are encouraged to seek clarification whenever you need it, so you fully understand each concept before moving forward.',
  },
  {
    q: 'Can I take more than one course?',
    a: 'Yes. You are welcome to enrol in multiple learning paths whenever you feel ready. Many digital disciplines complement one another, letting you expand your knowledge progressively over time.',
  },
  {
    q: 'Why does every learner join the WhatsApp Community first?',
    a: 'The community is the academy\u2019s reception area. It is where you understand every learning path in detail, ask questions, compare options and confidently choose the discipline most suited to your goals — all before making any financial commitment.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              Before you decide
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl">
              The questions worth{' '}
              <span className="text-gradient-gold">answering.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div className="border-b border-border/60">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-6 py-6 text-left"
                  >
                    <span
                      className={`flex-1 font-serif text-xl transition-colors duration-300 sm:text-2xl ${
                        isOpen ? 'text-gold' : 'text-foreground group-hover:text-gold'
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                        isOpen
                          ? 'rotate-180 border-gold/60 text-gold'
                          : 'border-border text-muted-foreground group-hover:border-gold/40 group-hover:text-gold'
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-base leading-relaxed text-muted-foreground pretty">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
