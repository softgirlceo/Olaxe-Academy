'use client'

import Image from 'next/image'
import { Mail, Phone } from 'lucide-react'
import type { ComponentType } from 'react'

const quickLinks = [
  { label: 'The Academy', href: '#story' },
  { label: 'Learning Paths', href: '#paths' },
  { label: 'Founder', href: '#founder' },
  { label: 'Questions', href: '#faq' },
]

type IconProps = { className?: string }

function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const socials: {
  label: string
  handle: string
  href: string
  icon: ComponentType<IconProps>
}[] = [
  {
    label: 'Facebook',
    handle: 'Olaxe Academy',
    href: 'https://www.facebook.com/',
    icon: FacebookIcon,
  },
  {
    label: 'TikTok',
    handle: '@olaxeacademy',
    href: 'https://www.tiktok.com/@olaxeacademy',
    icon: TikTokIcon,
  },
  {
    label: 'X',
    handle: 'Olaxe Academy',
    href: 'https://x.com/',
    icon: XIcon,
  },
  {
    label: 'LinkedIn',
    handle: 'Olayinka Maryam',
    href: 'https://www.linkedin.com/in/olayinka-maryam',
    icon: LinkedInIcon,
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start gap-5 lg:col-span-4">
            <div className="relative h-16 w-40">
              <Image
                src="/olaxe-logo.jpeg"
                alt="Olaxe Academy"
                fill
                className="object-contain"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              A structured digital academy turning scattered learning into
              applied, income-capable skill. Learn deliberately, build with
              intention, and lead with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="lg:col-span-2" aria-label="Quick links">
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+2347085622088"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold/70 transition-colors group-hover:text-gold" strokeWidth={1.6} />
                  +234 708 562 2088
                </a>
              </li>
              <li>
                <a
                  href="mailto:olaxeacademy@gmail.com"
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
                >
                  <Mail className="h-4 w-4 text-gold/70 transition-colors group-hover:text-gold" strokeWidth={1.6} />
                  olaxeacademy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-gold/80">
              Follow
            </h3>
            <ul className="flex flex-col gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-gold"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-gold/50">
                        <Icon className="h-3.5 w-3.5 text-gold/70 transition-colors group-hover:text-gold" />
                      </span>
                      <span>
                        <span className="block text-foreground/90">{s.label}</span>
                        <span className="block text-xs text-muted-foreground/70">
                          {s.handle}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-xs text-muted-foreground/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Olaxe Academy. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-gold">
              Terms &amp; Conditions
            </a>
            <span className="tracking-[0.2em] uppercase">
              Founded by Maryam Olayinka
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
