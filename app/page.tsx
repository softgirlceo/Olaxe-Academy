'use client'

import { useState } from 'react'
import { ParticleField } from '@/components/particle-field'
import { IntroOverlay } from '@/components/intro-overlay'
import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { AcademyStory } from '@/components/academy-story'
import { StructuredVsRandom } from '@/components/structured-vs-random'
import { LearningPaths } from '@/components/learning-paths'
import { Founder } from '@/components/founder'
import { StudentJourney } from '@/components/student-journey'
import { Principles } from '@/components/principles'
import { Stats } from '@/components/stats'
import { Faq } from '@/components/faq'
import { ClosingInvitation } from '@/components/closing-invitation'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  const [revealed, setRevealed] = useState(false)

  return (
    <>
      <ParticleField />
      <IntroOverlay onReveal={() => setRevealed(true)} />
      <SiteNav revealed={revealed} />

      <main className="relative z-10">
        <Hero revealed={revealed} />
        <AcademyStory />
        <StructuredVsRandom />
        <LearningPaths />
        <Founder />
        <StudentJourney />
        <Principles />
        <Stats />
        <Faq />
        <ClosingInvitation />
      </main>

      <SiteFooter />
    </>
  )
}
