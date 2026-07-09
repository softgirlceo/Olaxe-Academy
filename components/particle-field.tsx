'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseAlpha: number
  alpha: number
  gold: boolean
  drift: number
}

/**
 * Ambient environment for the entire site: illuminated dust suspended inside a
 * luxurious architectural space. Particles drift extremely slowly, respond
 * subtly to the cursor, and obey the same invisible forces everywhere.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let raf = 0
    const mouse = { x: -9999, y: -9999 }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Density scaled to viewport, kept restrained so nothing feels noisy.
      const count = Math.min(150, Math.floor((width * height) / 13000))
      particles = Array.from({ length: count }, () => {
        const gold = Math.random() < 0.62
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12 - 0.03,
          size: Math.random() * 1.5 + 0.35,
          baseAlpha: Math.random() * 0.4 + 0.08,
          alpha: 0,
          gold,
          drift: Math.random() * Math.PI * 2,
        }
      })
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.drift += 0.004
        p.x += p.vx + Math.sin(p.drift) * 0.06
        p.y += p.vy

        // Gentle cursor attraction — understated, never magnetic snapping.
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 160) {
          const force = (1 - dist / 160) * 0.22
          p.x += (dx / dist) * force
          p.y += (dy / dist) * force
        }

        // Wrap around the environment seamlessly.
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // Soft twinkle.
        const twinkle = 0.5 + 0.5 * Math.sin(t * 0.0004 + p.drift * 3)
        p.alpha = p.baseAlpha * (0.55 + twinkle * 0.45)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        if (p.gold) {
          ctx.fillStyle = `rgba(230, 194, 108, ${p.alpha})`
          ctx.shadowColor = 'rgba(230, 194, 108, 0.5)'
          ctx.shadowBlur = 6
        } else {
          ctx.fillStyle = `rgba(245, 244, 238, ${p.alpha * 0.8})`
          ctx.shadowColor = 'rgba(245, 244, 238, 0.35)'
          ctx.shadowBlur = 4
        }
        ctx.fill()
      }
      ctx.shadowBlur = 0

      raf = requestAnimationFrame(draw)
    }

    const onResize = () => build()
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    build()
    if (!reduce) {
      raf = requestAnimationFrame(draw)
      window.addEventListener('mousemove', onMove, { passive: true })
      window.addEventListener('mouseout', onLeave)
    } else {
      // Static, restrained rendering for reduced-motion users.
      draw(0)
      cancelAnimationFrame(raf)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  )
}
