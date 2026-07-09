'use client'

import { useEffect, useRef } from 'react'

type Pt = { x: number; y: number; gold: boolean }

type Particle = {
  x: number
  y: number
  tx: number
  ty: number
  wx: number
  wy: number
  wvx: number
  wvy: number
  gold: boolean
  size: number
}

type Props = {
  className?: string
  /** Fraction of the smaller container dimension the logo should occupy. */
  sizeFraction?: number
  /** Fires the first time the logo has fully materialised. */
  onFirstForm?: () => void
  /** Controls the crisp logo <img> opacity as it materialises (0..1). */
  onCrispChange?: (v: number) => void
}

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)

/**
 * The brand's living signature: microscopic gold and white particles converge
 * to form the official Olaxe Academy logo, hold, then dissolve back into the
 * drifting environment — repeating for as long as the visitor remains.
 */
export function LogoParticles({
  className,
  sizeFraction = 0.4,
  onFirstForm,
  onCrispChange,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const firedRef = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let points: Pt[] = []
    let raf = 0
    let start = 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Timeline (ms) for one full breath of the signature.
    const CONVERGE = 2600
    const HOLD = 2500
    const DISPERSE = 2200
    const WANDER = 2600
    const CYCLE = CONVERGE + HOLD + DISPERSE + WANDER

    const sampleLogo = (img: HTMLImageElement) => {
      const box = Math.min(width, height) * sizeFraction
      const off = document.createElement('canvas')
      const octx = off.getContext('2d')
      if (!octx) return
      const S = 190
      off.width = S
      off.height = S
      octx.drawImage(img, 0, 0, S, S)
      const data = octx.getImageData(0, 0, S, S).data

      const pts: Pt[] = []
      const step = 2
      for (let y = 0; y < S; y += step) {
        for (let x = 0; x < S; x += step) {
          const i = (y * S + x) * 4
          const r = data[i]
          const g = data[i + 1]
          const b = data[i + 2]
          const lum = (r + g + b) / 3
          if (lum > 60) {
            const gold = r > 110 && b < r * 0.8
            // Skew sampling so we do not over-populate; keep it elegant.
            if (Math.random() < (gold ? 0.55 : 0.5)) {
              pts.push({
                x: (x / S - 0.5) * box + width / 2,
                y: (y / S - 0.5) * box + height / 2,
                gold,
              })
            }
          }
        }
      }
      points = pts

      particles = pts.map((p) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        tx: p.x,
        ty: p.y,
        wx: Math.random() * width,
        wy: Math.random() * height,
        wvx: (Math.random() - 0.5) * 0.3,
        wvy: (Math.random() - 0.5) * 0.3,
        gold: p.gold,
        size: (p.gold ? 1.05 : 0.9) + Math.random() * 0.5,
      }))
    }

    const frame = (now: number) => {
      if (!start) start = now
      const elapsed = (now - start) % CYCLE
      const cycleIndex = Math.floor((now - start) / CYCLE)

      // form: 0 = dispersed, 1 = fully assembled logo.
      let form: number
      let crisp = 0
      if (elapsed < CONVERGE) {
        form = easeInOut(elapsed / CONVERGE)
        crisp = Math.max(0, (form - 0.72) / 0.28) * 0.9
      } else if (elapsed < CONVERGE + HOLD) {
        form = 1
        crisp = 1
        if (!firedRef.current) {
          firedRef.current = true
          onFirstForm?.()
        }
      } else if (elapsed < CONVERGE + HOLD + DISPERSE) {
        const t = (elapsed - CONVERGE - HOLD) / DISPERSE
        form = 1 - easeInOut(t)
        crisp = Math.max(0, 1 - t * 1.6)
      } else {
        form = 0
        crisp = 0
      }

      onCrispChange?.(crisp)

      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'

      // Particle brightness fades as the crisp logo takes over, so the logo
      // appears to emerge from the particles themselves.
      const particleFade = 1 - crisp * 0.85

      for (const p of particles) {
        // Drift the dispersed "home" target.
        p.wx += p.wvx
        p.wy += p.wvy
        if (p.wx < 0 || p.wx > width) p.wvx *= -1
        if (p.wy < 0 || p.wy > height) p.wvy *= -1

        const dx = p.tx - p.wx
        const dy = p.ty - p.wy
        const desiredX = p.wx + dx * form
        const desiredY = p.wy + dy * form

        // Eased approach for organic, never-abrupt movement.
        p.x += (desiredX - p.x) * 0.14
        p.y += (desiredY - p.y) * 0.14

        const alpha = (0.35 + form * 0.55) * particleFade
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(232, 196, 110, ${alpha})`
          : `rgba(246, 245, 240, ${alpha * 0.9})`
        ctx.fill()
      }

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(frame)

      void cycleIndex
    }

    const setup = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = '/olaxe-logo.jpeg'
    img.onload = () => {
      setup()
      sampleLogo(img)
      if (reduce) {
        // Render a single formed frame for reduced-motion users.
        onCrispChange?.(1)
        onFirstForm?.()
        return
      }
      raf = requestAnimationFrame(frame)
    }

    const onResize = () => {
      setup()
      if (img.complete) sampleLogo(img)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [sizeFraction, onFirstForm, onCrispChange])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
    />
  )
}
