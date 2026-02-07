import type { Metadata } from 'next'
import { CALENDLY_URL, LINKEDIN_URL, EMAIL } from '@/lib/constants'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — PerunHR',
  description:
    'Book a 15-minute Discovery Call with Stefan Markovic or reach out via LinkedIn or email.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero with Calendly */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-primary-dark overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-blue/30 via-primary-dark to-primary-dark pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-gold/20 bg-gold-glow rounded-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                Let&rsquo;s Talk
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
              Book a Discovery Call
            </h1>

            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              15 minutes. No pitch, no pressure. If I can help, I&rsquo;ll tell
              you how. If I can&rsquo;t, I&rsquo;ll tell you that too.
            </p>
          </div>

          {/* Calendly Embed */}
          <div className="bg-card-bg border border-card-border rounded-md overflow-hidden shadow-lg">
            <iframe
              src={`${CALENDLY_URL}?hide_gdpr_banner=1`}
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="no"
              title="Schedule a Discovery Call with Stefan Markovic"
              className="w-full"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-section-alt to-transparent pointer-events-none" />
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 md:py-28 px-6 bg-section-alt">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
              Prefer a Different Channel?
            </h2>
            <p className="text-text-secondary text-base max-w-md mx-auto">
              Whatever works best for you. I typically respond within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto stagger">
            {/* LinkedIn Card */}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group bg-card-bg border border-card-border rounded-md p-8 text-center hover:border-gold/30 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-md bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gold"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                LinkedIn DM
              </h3>
              <p className="text-text-secondary text-sm">
                Send me a direct message &mdash; most founders start here.
              </p>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${EMAIL}`}
              className="reveal group bg-card-bg border border-card-border rounded-md p-8 text-center hover:border-gold/30 transition-all"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-md bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gold"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">
                Email
              </h3>
              <p className="text-text-secondary text-sm mb-3">
                For detailed inquiries or role specifications.
              </p>
              <span className="text-gold text-sm font-medium">{EMAIL}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 px-6 bg-primary-dark">
        <div className="max-w-2xl mx-auto text-center reveal">
          <h3 className="text-xl font-bold text-text-primary mb-6">
            What to Expect
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-gold font-bold text-2xl mb-1">15 min</div>
              <p className="text-text-secondary text-sm">
                Quick &amp; focused call
              </p>
            </div>
            <div>
              <div className="text-gold font-bold text-2xl mb-1">24 hrs</div>
              <p className="text-text-secondary text-sm">
                Response time on messages
              </p>
            </div>
            <div>
              <div className="text-gold font-bold text-2xl mb-1">Zero</div>
              <p className="text-text-secondary text-sm">
                Pressure or obligation
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
