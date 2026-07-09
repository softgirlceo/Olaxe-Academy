import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

export const metadata: Metadata = {
  title: 'Olaxe Academy — Learn. Scale. Lead.',
  description:
    'The digital headquarters of Olaxe Academy. Structured, practical digital education in Media Buying, Digital Marketing, Artificial Intelligence and E-commerce — where information becomes implementation.',
  generator: 'v0.app',
  keywords: [
    'Olaxe Academy',
    'digital skills',
    'media buying',
    'digital marketing',
    'artificial intelligence',
    'e-commerce',
    'practical learning',
  ],
  openGraph: {
    title: 'Olaxe Academy — Learn. Scale. Lead.',
    description:
      'Structured, practical digital education where information becomes implementation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050506',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
