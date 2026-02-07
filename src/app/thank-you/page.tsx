import type { Metadata } from 'next'
import { LINKEDIN_URL } from '@/lib/constants'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Call Booked — PerunHR',
  description: 'Your Discovery Call with Stefan Markovic is confirmed.',
}

export default function ThankYouPage() {
  return (
    <main>
      <section className="relative min-h-[80vh] flex items-center px-6 pt-28 pb-20 bg-primary-dark overflow-hidden">
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

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Success indicator */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-4">
            You&rsquo;re Booked.
          </h1>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

          <p className="text-text-secondary text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Check your email for the calendar invite. Looking forward to
            learning about your business.
          </p>

          {/* What to expect */}
          <div className="bg-card-bg border border-card-border rounded-md p-8 sm:p-10 text-left mb-12">
            <h2 className="text-xl font-bold text-text-primary mb-6 text-center">
              What to Expect on the Call
            </h2>

            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gold/15 flex items-center justify-center text-gold font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Your business &amp; stage
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    I&rsquo;ll ask about your brand, revenue range, team size,
                    and what&rsquo;s working or not working right now.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gold/15 flex items-center justify-center text-gold font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    The role you need filled
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We&rsquo;ll dig into the actual business problem &mdash; not
                    just the job title &mdash; so I know what kind of person will
                    actually move the needle.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-md bg-gold/15 flex items-center justify-center text-gold font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">
                    Honest assessment
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    If I can help, I&rsquo;ll outline exactly how. If I
                    can&rsquo;t, I&rsquo;ll tell you that too &mdash; and point
                    you in the right direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <div className="space-y-4">
            <p className="text-text-secondary text-sm">
              While you wait, connect with me on LinkedIn:
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-text-secondary/20 text-text-primary font-semibold rounded-md hover:border-gold/40 hover:text-gold transition-all text-base"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow Me on LinkedIn
            </a>
          </div>

          {/* Back to home */}
          <div className="mt-12">
            <a
              href="/"
              className="text-text-secondary hover:text-gold transition-colors text-sm"
            >
              &larr; Back to Homepage
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
