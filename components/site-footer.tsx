'use client'

import Image from 'next/image'

const links = [
  { label: 'The Academy', href: '#story' },
  { label: 'Learning Paths', href: '#paths' },
  { label: 'Founder', href: '#founder' },
  { label: 'Questions', href: '#faq' },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 md:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <div className="relative h-16 w-40">
            <Image
              src="/olaxe-logo.jpeg"
              alt="Olaxe Academy"
              fill
              className="object-contain"
            />
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-muted-foreground lg:text-left">
            Turning scattered learning into structured, applied skill. Learn.
            Scale. Lead.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-border/40 pt-8 text-xs text-muted-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Olaxe Academy. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Founded by Maryam Olayinka</p>
        </div>
      </div>
    </footer>
  )
}
