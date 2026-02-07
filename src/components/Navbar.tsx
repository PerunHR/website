'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { NAV_LINKS, CALENDLY_URL } from '@/lib/constants'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-nav-bg backdrop-blur-md shadow-lg border-b border-card-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="PerunHR"
              width={160}
              height={52}
              className="h-10 lg:h-14 w-auto"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors font-medium text-xs uppercase tracking-[0.15em]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-accent-red text-white font-bold rounded-md hover:brightness-110 transition-all text-xs uppercase tracking-wider"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative z-50 w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 bg-primary-dark flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-2xl font-bold text-text-primary hover:text-accent-red transition-colors uppercase tracking-wider"
          >
            {link.label}
          </a>
        ))}
        <div className="w-12 h-px bg-gold/30 my-2" />
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-accent-red text-white font-bold rounded-md text-lg hover:brightness-110 transition-all uppercase tracking-wider"
        >
          Book a Call
        </a>
      </div>
    </>
  )
}
