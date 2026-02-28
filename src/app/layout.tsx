import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { FloatingCTA } from '@/components/FloatingCTA'
import { Analytics } from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'PerunHR — Battle-Tested DTC Talent Recruitment',
  description:
    'I reject 90% of candidates. The 10% I send scale DTC brands. Battle-tested global talent for DTC brands scaling $500K-$3M+/month.',
  openGraph: {
    title: 'PerunHR — Battle-Tested DTC Talent Recruitment',
    description:
      'I reject 90% of candidates. The 10% I send scale DTC brands. Global talent for DTC brands scaling $500K-$3M+/month.',
    url: 'https://perunhr.com',
    siteName: 'PerunHR',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PerunHR — Battle-Tested DTC Talent Recruitment',
    description:
      'I reject 90% of candidates. The 10% I send scale DTC brands.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="green" className={inter.variable}>
      <body>
        <Navbar />
        {children}
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
