'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { CommunityCta } from './community-cta'

const LINKS = [
  { id: 'academy', label: 'The Academy' },
  { id: 'paths', label: 'Learning Paths' },
  { id: 'founder', label: 'Founder' },
  { id: 'journey', label: 'The Journey' },
  { id: 'faq', label: 'Questions' },
]

type Props = { revealed: boolean }

export function SiteNav({ revealed }: Props) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('academy')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean,
    ) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        revealed ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
      } ${scrolled ? 'glass' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
          aria-label="Olaxe Academy — back to top"
        >
          <Image
            src="/olaxe-logo.jpeg"
            alt="Olaxe Academy"
            width={132}
            height={132}
            className="h-11 w-auto object-contain"
            priority
          />
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="group relative px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <span
                className={
                  active === link.id ? 'text-foreground' : undefined
                }
              >
                {link.label}
              </span>
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px origin-center bg-gold transition-transform duration-500 ease-out ${
                  active === link.id
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <CommunityCta label="Join the Community" variant="ghost" className="px-6 py-3" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-border/60 transition-[max-height,opacity] duration-500 md:hidden ${
          open ? 'max-h-96 opacity-100 glass' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-5">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
              className="py-3 text-left text-base text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <CommunityCta label="Join the Community" variant="primary" className="w-full" />
          </div>
        </div>
      </div>
    </header>
  )
}
