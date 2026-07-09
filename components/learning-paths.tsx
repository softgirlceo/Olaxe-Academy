'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  BrainCircuit,
  Megaphone,
  Plus,
  ShoppingBag,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from './reveal'
import { CommunityCta } from './community-cta'

type Course = {
  id: string
  title: string
  icon: LucideIcon
  tagline: string
  price: string
  overview: string
  forWho: string
  solves: string
  outcomes: string[]
  curriculum: { module: string; detail: string }[]
  methodology: string
  tools: string
  certification: string
  faqs: { q: string; a: string }[]
}

const COURSES: Course[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    tagline: 'An intelligent assistant beside you — never a replacement for you.',
    price: '₦10,000',
    overview:
      'AI should never be sold as a shortcut that thinks for you. Treat it instead like an exceptionally fast research assistant working beside you — one that drafts, summarises and explores at speed while your judgement stays firmly in charge. This path teaches responsible, practical use of AI to amplify your productivity, creativity and output rather than outsource your thinking.',
    forWho:
      'Anyone curious about AI — from complete beginners to professionals who want to work faster. No technical background is assumed; concepts are introduced gradually and demonstrated in everyday tasks.',
    solves:
      'The overwhelm of endless AI tools and the fear of being left behind. You will learn what actually matters, what to ignore, and how to build a dependable daily workflow.',
    outcomes: [
      'Write clear, effective prompts that produce reliable results',
      'Automate repetitive research, writing and planning tasks',
      'Evaluate AI output critically instead of trusting it blindly',
      'Build a personal AI workflow you can apply to real work',
    ],
    curriculum: [
      { module: 'Foundations of Modern AI', detail: 'How today\u2019s tools actually work — in plain language, with everyday analogies.' },
      { module: 'The Art of Prompting', detail: 'Structuring requests so tools understand exactly what you need.' },
      { module: 'AI for Everyday Work', detail: 'Research, writing, summarising, planning and organising, demonstrated live.' },
      { module: 'Responsible & Accurate Use', detail: 'Spotting errors, protecting privacy and keeping your own judgement central.' },
      { module: 'Building Your Workflow', detail: 'Combining tools into a repeatable system tailored to your goals.' },
    ],
    methodology:
      'Concept, demonstration, then guided practice. Every idea is shown in a real task before you apply it yourself.',
    tools:
      'Widely available AI assistants and productivity tools — all accessible from a standard laptop or phone with an internet connection.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need any coding experience?', a: 'No. This path focuses on using AI thoughtfully, not on programming. Everything is explained from the ground up.' },
      { q: 'Will the tools still be relevant later?', a: 'The path teaches durable principles of working with AI, so your skills adapt as individual tools change.' },
    ],
  },
  {
    id: 'media',
    title: 'Media Buying',
    icon: Target,
    tagline: 'Place the right business in front of exactly the right people.',
    price: '₦10,000',
    overview:
      'A remarkable product means very little if nobody discovers it. Imagine opening a beautiful restaurant in the middle of an empty forest — the food could be extraordinary, yet no one is there to order it. Media Buying is how you move that restaurant to the busiest street in the city. You will learn to place businesses directly in front of the people most likely to buy, using deliberate advertising strategy rather than luck or guesswork.',
    forWho:
      'Aspiring marketers, business owners and freelancers who want a measurable, in-demand skill. No prior advertising experience is required.',
    solves:
      'Wasted ad spend and random results. You will learn to target precisely, read the numbers and improve campaigns with intention instead of hope.',
    outcomes: [
      'Plan and structure paid advertising campaigns with clear goals',
      'Define and reach the right audience for a given offer',
      'Read performance data and know what to adjust',
      'Manage a budget responsibly to protect return on spend',
    ],
    curriculum: [
      { module: 'How Paid Advertising Really Works', detail: 'The logic behind ad platforms, explained without jargon.' },
      { module: 'Understanding the Audience', detail: 'Finding and defining the people a business is actually for.' },
      { module: 'Building a Campaign', detail: 'Objectives, structure, creative and messaging that connect.' },
      { module: 'Reading the Numbers', detail: 'Interpreting results so decisions are informed, not emotional.' },
      { module: 'Optimising & Scaling', detail: 'Improving what works and stepping away from what doesn\u2019t.' },
    ],
    methodology:
      'Strategy before tactics. You will understand why a campaign works before touching a single setting, then practise on realistic scenarios.',
    tools:
      'Leading advertising platforms and planning tools. A laptop is recommended for campaign work.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need a business to practise on?', a: 'No. You will work through guided scenarios and examples, so you can learn fully before running live campaigns.' },
      { q: 'Is a large budget required?', a: 'No. The path teaches responsible spending and how to learn effectively with modest budgets.' },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    icon: ShoppingBag,
    tagline: 'A store is a system — not simply a website.',
    price: '₦10,000',
    overview:
      'Owning an online business is not just about launching a website. Think of it as opening a physical store in a busy city: success depends on location, presentation, customer experience, trust and visibility — not merely unlocking the front door. Every thriving online business is the result of carefully connected systems working together. This path shows you how those pieces fit, so you build something that actually sells.',
    forWho:
      'Anyone who wants to sell products online — from first-time founders to sellers who want to run things properly. No previous experience needed.',
    solves:
      'The confusion of building a store that looks fine but does not convert. You will learn how presentation, trust and experience turn visitors into buyers.',
    outcomes: [
      'Understand the full system behind a functioning online store',
      'Present products in a way that builds trust and desire',
      'Design a smooth path from first visit to completed order',
      'Recognise what keeps customers returning',
    ],
    curriculum: [
      { module: 'The Anatomy of an Online Store', detail: 'The connected parts that make selling online actually work.' },
      { module: 'Products & Presentation', detail: 'Describing and displaying products so people feel confident buying.' },
      { module: 'Trust & Customer Experience', detail: 'The details that turn hesitant visitors into paying customers.' },
      { module: 'The Buying Journey', detail: 'Designing a clear, frictionless path to purchase.' },
      { module: 'Keeping Customers', detail: 'Turning a single sale into a lasting relationship.' },
    ],
    methodology:
      'Systems thinking with practical demonstration. You will see how each decision affects the whole store, then apply it step by step.',
    tools:
      'Popular e-commerce platforms and supporting tools. A laptop is recommended for building and managing a store.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need products ready to start?', a: 'No. You can learn the full system first and apply it to your own products whenever you are ready.' },
      { q: 'Is this only for physical products?', a: 'No. The principles apply to physical and digital products alike.' },
    ],
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    tagline: 'Not louder — clearer, to the right people, at the right time.',
    price: '₦20,000',
    overview:
      'Many businesses mistake posting content for marketing. It can feel like standing in a crowded market shouting about a product without knowing who actually needs it. Effective digital marketing is not about speaking louder — it is about speaking to the right audience, with the right message, at the right moment. This path teaches strategy first, so every tactic you learn later has a purpose behind it.',
    forWho:
      'Business owners, creators and aspiring marketers who want a complete, strategic understanding rather than scattered tips. Suitable for beginners.',
    solves:
      'Effort without direction — posting constantly yet seeing little return. You will learn to build a strategy that connects message, audience and timing.',
    outcomes: [
      'Build a clear marketing strategy around real objectives',
      'Understand your audience and craft messages that resonate',
      'Choose the right channels instead of trying to be everywhere',
      'Measure what matters and improve with intention',
    ],
    curriculum: [
      { module: 'Strategy Before Tactics', detail: 'The thinking that makes every later action effective.' },
      { module: 'Knowing Your Audience', detail: 'Understanding who you serve and what they truly want.' },
      { module: 'Message & Positioning', detail: 'Saying the right thing so the right people listen.' },
      { module: 'Channels & Content', detail: 'Choosing where to show up — and why.' },
      { module: 'Measuring & Improving', detail: 'Reading signals and refining without guesswork.' },
    ],
    methodology:
      'Strategy-led and example-driven. Each concept is grounded in relatable situations before you build your own plan.',
    tools:
      'A range of marketing and analytics platforms. A laptop is recommended for planning and analysis.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'How is this different from Media Buying?', a: 'Media Buying focuses on paid advertising. Digital Marketing is the wider strategy — audience, message, channels and measurement — that everything else fits inside.' },
      { q: 'Can I take this as a beginner?', a: 'Yes. It starts with fundamentals and builds gradually, assuming no prior knowledge.' },
    ],
  },
]

export function LearningPaths() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="paths" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              The learning paths
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Four disciplines. One{' '}
              <span className="text-gradient-gold">deliberate</span> way of
              teaching them.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground pretty">
              Each path opens like the next chapter of the experience. Take your
              time — understand why the skill matters before deciding whether it
              belongs in your future.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {COURSES.map((course, index) => {
            const isOpen = openId === course.id
            const dimmed = openId !== null && !isOpen
            const Icon = course.icon
            return (
              <Reveal key={course.id} delay={index * 80}>
                <motion.div
                  animate={{ opacity: dimmed ? 0.42 : 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="border-b border-border/60"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : course.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-5 py-8 text-left md:gap-8"
                  >
                    <span className="hidden font-serif text-2xl text-gold/50 tabular-nums sm:block">
                      0{index + 1}
                    </span>
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-500 ${
                        isOpen
                          ? 'border-gold/60 bg-gold/10 text-gold'
                          : 'border-border text-muted-foreground group-hover:border-gold/40 group-hover:text-gold'
                      }`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="flex-1">
                      <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <span className="font-serif text-2xl text-foreground sm:text-3xl">
                          {course.title}
                        </span>
                        <span className="text-sm text-gold/80">
                          {course.price}
                        </span>
                      </span>
                      <span className="mt-1 block max-w-xl text-sm text-muted-foreground sm:text-base">
                        {course.tagline}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ${
                        isOpen
                          ? 'rotate-45 border-gold/60 text-gold'
                          : 'text-muted-foreground group-hover:border-gold/40 group-hover:text-gold'
                      }`}
                    >
                      <Plus className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <CourseDetail course={course} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function CourseDetail({ course }: { course: Course }) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-x-12 gap-y-10 pb-16 pt-2 lg:grid-cols-12"
    >
      <div className="space-y-8 lg:col-span-7">
        <motion.p
          variants={item}
          className="text-lg leading-relaxed text-muted-foreground pretty"
        >
          {course.overview}
        </motion.p>

        <motion.div variants={item} className="space-y-6">
          <Detail heading="Who this is for" body={course.forWho} />
          <Detail heading="The problem it solves" body={course.solves} />
        </motion.div>

        <motion.div variants={item}>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
            The curriculum
          </h4>
          <ol className="space-y-4">
            {course.curriculum.map((m, i) => (
              <li key={m.module} className="flex gap-4">
                <span className="mt-1 font-serif text-sm text-gold/60 tabular-nums">
                  0{i + 1}
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    {m.module}
                  </span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                    {m.detail}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      <div className="space-y-8 lg:col-span-5">
        <motion.div variants={item}>
          <h4 className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
            What you will be able to do
          </h4>
          <ul className="space-y-3">
            {course.outcomes.map((o) => (
              <li key={o} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {o}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={item} className="space-y-6">
          <Detail heading="How it is taught" body={course.methodology} />
          <Detail heading="Tools & requirements" body={course.tools} />
          <Detail heading="Certification" body={course.certification} />
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <h4 className="text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
            Common questions
          </h4>
          {course.faqs.map((f) => (
            <div key={f.q}>
              <p className="text-sm font-medium text-foreground">{f.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          className="rounded-2xl border border-border/70 p-6"
        >
          <p className="text-sm text-muted-foreground">Investment</p>
          <p className="mt-1 font-serif text-3xl text-gradient-gold">
            {course.price}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Current pricing. It may rise as the academy grows.
          </p>
          <div className="mt-5">
            <CommunityCta label="Join & choose this path" className="w-full" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function Detail({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <h4 className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
        {heading}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground pretty">
        {body}
      </p>
    </div>
  )
}
