import Image from 'next/image'
import { CALENDLY_URL, LINKEDIN_URL } from '@/lib/constants'

const TRUST_ITEMS = [
  'Currently Head of Talent, US DTC Brand',
  '<10% Hire Rate',
  '90-Day Guarantee',
  'Global Talent Pool',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 pb-16 bg-primary-dark overflow-hidden">
      {/* Background pattern — subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 via-primary-dark to-primary-dark pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Gold accent tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-gold/20 bg-gold-glow rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                DTC Recruitment: An Insider&rsquo;s Perspective
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-text-primary mb-4">
              I Reject 90% of Candidates.
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-8">
              <span className="text-accent-red">The 10% I Send?</span>{' '}
              <span className="text-text-primary">They Scale DTC Brands.</span>
            </h1>

            {/* Gold underline */}
            <div className="w-24 h-0.5 bg-gradient-to-r from-gold via-gold/60 to-transparent mb-8 mx-auto lg:mx-0" />

            <p className="text-lg sm:text-xl text-text-secondary max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Battle-tested global talent for DTC brands scaling $500K–$3M+/month.
              From an insider, not an outsider.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-accent-red text-white font-bold rounded-md hover:brightness-110 transition-all text-base shadow-lg shadow-accent-red/20 uppercase tracking-wide"
              >
                Book a 15-Min Discovery Call
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-text-secondary/20 text-text-primary font-semibold rounded-md hover:border-gold/40 hover:text-gold transition-all text-base"
              >
                Message Me on LinkedIn
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3">
              {TRUST_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-text-secondary">
                  {i > 0 && (
                    <span className="hidden sm:block w-px h-4 bg-gold/30" />
                  )}
                  <span className="uppercase tracking-wider text-[11px] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stefan's Photo */}
          <div className="relative flex-shrink-0 order-first lg:order-last">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Gold border accent */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 via-accent-red/20 to-gold/10 rounded-md" />
              <div className="relative w-full h-full rounded-md overflow-hidden bg-deep-blue">
                <Image
                  src="/images/stefan.jpg"
                  alt="Stefan Markovic — Founder, PerunHR"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
                />
              </div>
              {/* Corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-md" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-section-alt to-transparent pointer-events-none" />
    </section>
  )
}
