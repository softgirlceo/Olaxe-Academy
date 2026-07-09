'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  BookOpen,
  BrainCircuit,
  ChevronDown,
  Clapperboard,
  LayoutTemplate,
  Megaphone,
  PackageSearch,
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
    id: 'media',
    title: 'Media Buying Masterclass',
    icon: Target,
    tagline: 'Place the right business in front of exactly the right people.',
    price: '₦20,000',
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
    id: 'marketing',
    title: 'Digital Marketing Masterclass',
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
  {
    id: 'ai',
    title: 'Artificial Intelligence & Automation Masterclass',
    icon: BrainCircuit,
    tagline: 'An intelligent assistant beside you — never a replacement for you.',
    price: '₦10,000',
    overview:
      'AI should never be sold as a shortcut that thinks for you. Treat it instead like an exceptionally fast research assistant working beside you — one that drafts, summarises and explores at speed while your judgement stays firmly in charge. This path teaches responsible, practical use of AI to amplify your productivity, then shows you how to connect those tools into automations that quietly handle repetitive work in the background.',
    forWho:
      'Anyone curious about AI — from complete beginners to professionals who want to work faster. No technical background is assumed; concepts are introduced gradually and demonstrated in everyday tasks.',
    solves:
      'The overwhelm of endless AI tools and the fear of being left behind. You will learn what actually matters, what to ignore, and how to build a dependable daily workflow that increasingly runs itself.',
    outcomes: [
      'Write clear, effective prompts that produce reliable results',
      'Automate repetitive research, writing and planning tasks',
      'Connect tools into simple automations that save hours each week',
      'Evaluate AI output critically instead of trusting it blindly',
    ],
    curriculum: [
      { module: 'Foundations of Modern AI', detail: 'How today\u2019s tools actually work — in plain language, with everyday analogies.' },
      { module: 'The Art of Prompting', detail: 'Structuring requests so tools understand exactly what you need.' },
      { module: 'AI for Everyday Work', detail: 'Research, writing, summarising, planning and organising, demonstrated live.' },
      { module: 'Automation Foundations', detail: 'Connecting apps and AI so routine tasks trigger and complete without you.' },
      { module: 'Responsible & Accurate Use', detail: 'Spotting errors, protecting privacy and keeping your own judgement central.' },
      { module: 'Building Your Workflow', detail: 'Combining tools and automations into a repeatable system tailored to your goals.' },
    ],
    methodology:
      'Concept, demonstration, then guided practice. Every idea is shown in a real task before you apply it yourself.',
    tools:
      'Widely available AI assistants, productivity tools and no-code automation platforms — all accessible from a standard laptop or phone with an internet connection.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need any coding experience?', a: 'No. This path focuses on using AI and automation thoughtfully, not on programming. Everything is explained from the ground up.' },
      { q: 'Will the tools still be relevant later?', a: 'The path teaches durable principles of working with AI, so your skills adapt as individual tools change.' },
    ],
  },
  {
    id: 'product-research',
    title: 'Product Research Masterclass',
    icon: PackageSearch,
    tagline: 'Decide what to sell with evidence — not hope or guesswork.',
    price: '₦7,500',
    overview:
      'Most online businesses do not fail because of a poor store or weak ads — they fail because the wrong product was chosen from the start. Product research is the discipline of deciding what to sell before you spend a single naira on inventory or advertising. This path teaches you to read real market signals, validate demand, study competitors and price for profit, so every product you launch is backed by evidence rather than a hunch.',
    forWho:
      'Aspiring and existing online sellers, dropshippers, importers and digital entrepreneurs who want a dependable way to find products worth selling. No prior experience is required.',
    solves:
      'The costly guesswork of picking products emotionally. You will replace \u201cI think this will sell\u201d with a repeatable process that shows whether demand, margin and competition actually support a launch.',
    outcomes: [
      'Identify winning products using clear, evidence-based criteria',
      'Validate real demand before committing money or time',
      'Analyse competitors, saturation and pricing with confidence',
      'Source reliably and calculate profit before you buy',
    ],
    curriculum: [
      { module: 'What Makes a Winning Product', detail: 'The criteria behind products that actually sell — problem-solving, margin, wow-factor and demand.' },
      { module: 'Reading Market Signals', detail: 'Using Google Trends, Meta Ads Library and TikTok Creative Center to see what the market is already responding to.' },
      { module: 'Validating Real Demand', detail: 'Separating genuine, lasting demand from short-lived hype and seasonal spikes.' },
      { module: 'Competitor & Saturation Analysis', detail: 'Studying who else is selling, how well, and whether there is still room for you.' },
      { module: 'Sourcing & Supplier Evaluation', detail: 'Finding and vetting suppliers on AliExpress, Alibaba and 1688, and judging quality, reliability and lead times.' },
      { module: 'Pricing & Profit Calculations', detail: 'Working out landed cost, margins and pricing so a product is profitable before you launch it.' },
      { module: 'AI-Assisted Research', detail: 'Using AI to speed up idea generation, competitor breakdowns and product data analysis.' },
      { module: 'Building a Repeatable System', detail: 'Turning everything into a documented process you can run again and again to find products on demand.' },
    ],
    methodology:
      'Hands-on and tool-led. Every concept is demonstrated inside the real research tools, then you practise the process yourself on live examples until it becomes second nature.',
    tools:
      'Google Trends, Meta Ads Library, TikTok Creative Center, AliExpress, Alibaba, 1688 and AI research assistants. A laptop and internet connection are recommended.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need money for inventory to start?', a: 'No. Product research happens before you buy anything. You learn to validate a product first, so you only invest once the evidence supports it.' },
      { q: 'Does this work for both physical and digital products?', a: 'The core process centres on physical and ecommerce products, but the same signals of demand, competition and pricing apply to digital offers too.' },
    ],
  },
]

const AI_ADVANCED_COURSES: Course[] = [
  {
    id: 'ai-landing',
    title: 'AI Landing Page Masterclass',
    icon: LayoutTemplate,
    tagline: 'Turn a single page into your best-performing salesperson.',
    price: '₦10,000',
    overview:
      'A landing page has one job: to turn a visitor into a customer, subscriber or booking. Most pages fail because they are decorated rather than designed to convert. In this programme you will use AI to build high-converting landing pages quickly — writing persuasive copy, structuring the page around a single goal and refining it with real feedback — without needing to be a designer or a developer.',
    forWho:
      'Marketers, freelancers, business owners and beginners who want to build pages that convert. No design or coding background is required.',
    solves:
      'Beautiful pages that do not sell. You will learn the structure, copy and psychology that move visitors to act, and how AI lets you produce them in a fraction of the time.',
    outcomes: [
      'Build a complete, conversion-focused landing page with AI assistance',
      'Write persuasive headlines, sections and calls to action',
      'Structure a page around one clear, measurable goal',
      'Test and improve pages using real visitor behaviour',
    ],
    curriculum: [
      { module: 'Anatomy of a High-Converting Page', detail: 'The essential sections and the order that guides a visitor toward action.' },
      { module: 'AI Copywriting for Conversion', detail: 'Using AI to draft headlines, benefits and calls to action that actually persuade.' },
      { module: 'Building the Page with AI Tools', detail: 'Assembling a professional page quickly using AI-powered builders — no code required.' },
      { module: 'Design & Visual Hierarchy', detail: 'Guiding the eye so the most important message is impossible to miss.' },
      { module: 'Testing & Optimising', detail: 'Reading visitor behaviour and refining the page to lift conversions.' },
    ],
    methodology:
      'Build-along and practical. You create a real landing page section by section as each concept is taught, finishing with a page you can actually use.',
    tools:
      'AI copy and page-building tools plus a simple analytics setup. A laptop is recommended for building.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need to know how to code?', a: 'No. The programme uses AI-powered, no-code tools so you can build a professional page without writing any code.' },
      { q: 'Can I use this for my own business?', a: 'Yes. You finish with a real, working landing page built around your own offer or product.' },
    ],
  },
  {
    id: 'ai-video',
    title: 'AI Video Creation Masterclass',
    icon: Clapperboard,
    tagline: 'Produce scroll-stopping video without a camera or a studio.',
    price: '₦10,000',
    overview:
      'Video is the most powerful format online, yet most people avoid it because it feels expensive and technical. AI changes that. In this programme you will learn to plan, generate and edit professional-looking videos using AI — from script to voiceover to final cut — so you can create content consistently for marketing, education or personal brand without ever appearing on camera if you choose not to.',
    forWho:
      'Creators, marketers, business owners and beginners who want to produce video content efficiently. No filming or editing experience is required.',
    solves:
      'The time, cost and self-consciousness that stop people from using video. You will learn a fast, repeatable way to produce quality videos on any budget.',
    outcomes: [
      'Plan and script videos with a clear purpose and hook',
      'Generate visuals, voiceovers and footage using AI tools',
      'Edit clips into polished, publish-ready videos',
      'Produce content consistently for social platforms and marketing',
    ],
    curriculum: [
      { module: 'Planning & Scripting with AI', detail: 'Turning an idea into a structured script with a strong hook and clear message.' },
      { module: 'Generating Visuals & Footage', detail: 'Creating scenes, clips and imagery using AI video and image tools.' },
      { module: 'AI Voiceovers & Audio', detail: 'Producing natural narration and sound without recording equipment.' },
      { module: 'Editing & Assembly', detail: 'Combining clips, captions and pacing into a finished, professional video.' },
      { module: 'Publishing & Repurposing', detail: 'Adapting one video into multiple formats for different platforms.' },
    ],
    methodology:
      'Create-as-you-learn. You produce a complete short video across the programme, applying each stage to your own idea.',
    tools:
      'AI video, voice and editing tools. A laptop is recommended, though several stages are possible on a capable phone.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need to appear on camera?', a: 'No. You can create complete videos using AI-generated visuals and voiceovers without ever filming yourself.' },
      { q: 'Do I need expensive equipment?', a: 'No. The programme is built around accessible AI tools, so you can produce quality video without a camera or studio.' },
    ],
  },
  {
    id: 'ai-book',
    title: 'AI Digital Book Creation Masterclass',
    icon: BookOpen,
    tagline: 'Write, design and publish a digital book that sells.',
    price: '₦12,000',
    overview:
      'A digital book is one of the clearest ways to package your knowledge into an asset that earns. This programme shows you how to use AI to plan, write, design and publish a professional ebook — from outline to finished, sellable product — even if you have never written anything before. You will finish with both a completed book and a repeatable process for creating more.',
    forWho:
      'Aspiring authors, coaches, creators and entrepreneurs who want to turn knowledge into a digital product. No writing or publishing experience is required.',
    solves:
      'The blank page and the belief that writing a book takes months. You will learn to structure, draft and finish a quality digital book quickly with AI as your writing partner.',
    outcomes: [
      'Plan and outline a focused, valuable digital book',
      'Draft and refine chapters efficiently using AI',
      'Design a clean, professional layout and cover',
      'Export, publish and prepare your book to sell',
    ],
    curriculum: [
      { module: 'Choosing a Topic That Sells', detail: 'Selecting a subject with real demand and a clear audience.' },
      { module: 'Outlining with AI', detail: 'Building a logical, compelling structure before you write a word.' },
      { module: 'Drafting & Refining Chapters', detail: 'Using AI to write faster while keeping your own voice and accuracy.' },
      { module: 'Design, Layout & Cover', detail: 'Formatting the book and creating a cover that looks professional.' },
      { module: 'Publishing & Selling', detail: 'Exporting your book and preparing it for sale to your audience.' },
    ],
    methodology:
      'Guided creation from start to finish. You build a real digital book step by step, leaving the programme with a completed, sellable product.',
    tools:
      'AI writing tools, document and design software, and export tools for ebooks. A laptop is recommended.',
    certification:
      'An official Olaxe Academy certificate of completion is awarded once the programme is finished.',
    faqs: [
      { q: 'Do I need to be a good writer?', a: 'No. AI helps you draft and refine, while the programme teaches you to structure and shape the book so it reads professionally.' },
      { q: 'Can I sell the book I create?', a: 'Yes. You finish with a complete digital book and the knowledge to publish and sell it.' },
    ],
  },
]

export function LearningPaths() {
  const [openId, setOpenId] = useState<string | null>(null)
  const anyOpen = openId !== null

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
          {COURSES.map((course, index) => (
            <CourseRow
              key={course.id}
              course={course}
              index={index}
              openId={openId}
              anyOpen={anyOpen}
              onToggle={() =>
                setOpenId(openId === course.id ? null : course.id)
              }
            />
          ))}
        </div>

        {/* AI Advanced — a continuation of the same experience */}
        <div className="mt-28 max-w-3xl md:mt-36">
          <Reveal>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-gold/80">
              AI Advanced
            </p>
            <h2 className="font-serif text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Where AI becomes a{' '}
              <span className="text-gradient-gold">creative</span> advantage.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground pretty">
              Specialised programmes for those ready to build real assets with
              AI — pages, videos and books that work while you focus on what
              matters.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col">
          {AI_ADVANCED_COURSES.map((course, index) => (
            <CourseRow
              key={course.id}
              course={course}
              index={index}
              openId={openId}
              anyOpen={anyOpen}
              onToggle={() =>
                setOpenId(openId === course.id ? null : course.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseRow({
  course,
  index,
  openId,
  anyOpen,
  onToggle,
}: {
  course: Course
  index: number
  openId: string | null
  anyOpen: boolean
  onToggle: () => void
}) {
  const isOpen = openId === course.id
  const dimmed = anyOpen && !isOpen
  const Icon = course.icon

  return (
    <Reveal delay={index * 80}>
      <motion.div
        animate={{ opacity: dimmed ? 0.42 : 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="border-b border-border/60"
      >
        <button
          onClick={onToggle}
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
              <span className="text-sm text-gold/80">{course.price}</span>
            </span>
            <span className="mt-1 block max-w-xl text-sm text-muted-foreground sm:text-base">
              {course.tagline}
            </span>
          </span>
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              isOpen
                ? 'rotate-180 border-gold/60 text-gold'
                : 'border-border text-muted-foreground group-hover:border-gold/40 group-hover:text-gold'
            }`}
          >
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
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
