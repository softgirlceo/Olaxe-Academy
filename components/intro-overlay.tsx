'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { LogoParticles } from './logo-particles'

type Props = { onReveal: () => void }

/**
 * The opening. The screen begins near-black; particles converge to form the
 * logo, which holds, then the overlay gently dissolves so the hero emerges
 * from beneath it — with no perceptible cut between animation and homepage.
 */
export function IntroOverlay({ onReveal }: Props) {
  const [crisp, setCrisp] = useState(0)
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState(false)
  const startedRef = useRef(false)

  const handleFirstForm = useCallback(() => {
    if (startedRef.current) return
    startedRef.current = true
    // Let the logo hold for a beat, then reveal the homepage beneath it.
    window.setTimeout(() => {
      onReveal()
      setLeaving(true)
      window.setTimeout(() => setGone(true), 1400)
    }, 1700)
  }, [onReveal])

  // Safety: never trap the visitor behind the overlay.
  useEffect(() => {
    const fallback = window.setTimeout(() => {
      if (!startedRef.current) handleFirstForm()
    }, 6000)
    return () => window.clearTimeout(fallback)
  }, [handleFirstForm])

  useEffect(() => {
    if (leaving) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [leaving])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[70] flex items-center justify-center bg-ink transition-opacity duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <LogoParticles
        className="absolute inset-0 h-full w-full"
        sizeFraction={0.42}
        onFirstForm={handleFirstForm}
        onCrispChange={setCrisp}
      />
      <div
        className="relative flex items-center justify-center"
        style={{
          width: 'min(42vmin, 480px)',
          height: 'min(42vmin, 480px)',
          opacity: crisp,
          transform: `scale(${0.94 + crisp * 0.06})`,
        }}
      >
        <Image
          src="/olaxe-logo.jpeg"
          alt="Olaxe Academy"
          fill
          priority
          className="object-contain drop-shadow-[0_0_60px_rgba(230,194,108,0.25)]"
        />
      </div>
    </div>
  )
}
