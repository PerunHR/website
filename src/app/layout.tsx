import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PerunHR - Expert Staffing Solutions',
  description: 'PerunHR provides expert staffing and HR solutions for businesses across Europe.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
