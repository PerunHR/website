import Image from 'next/image'
import { NAV_LINKS, EMAIL, LINKEDIN_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="py-10 px-6 bg-primary-dark border-t border-card-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="PerunHR"
              width={140}
              height={46}
              className="h-10 w-auto"
            />
          </a>

          {/* Links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors text-xs uppercase tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors text-xs uppercase tracking-wider font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="text-text-secondary hover:text-gold transition-colors text-xs tracking-wide"
          >
            {EMAIL}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-card-border text-center">
          <p className="text-text-secondary/60 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} PerunHR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
