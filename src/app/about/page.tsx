import type { Metadata } from 'next'
import Image from 'next/image'
import { CALENDLY_URL, LINKEDIN_URL, PROCESS_STEPS } from '@/lib/constants'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Stefan Markovic — PerunHR',
  description:
    'Meet Stefan Markovic — Head of Talent for a US DTC brand by day, founder of PerunHR by mission. Learn about the Battle Test methodology.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero / Bio Section */}
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

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Photo */}
            <div className="relative flex-shrink-0 order-first">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 via-accent-red/20 to-gold/10 rounded-md" />
                <div className="relative w-full h-full rounded-md overflow-hidden bg-deep-blue">
                  <Image
                    src="/images/stefan.jpg"
                    alt="Stefan Markovic — Founder, PerunHR"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-md" />
                <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-md" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-gold/20 bg-gold-glow rounded-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
                  About the Founder
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary leading-tight mb-6">
                I&rsquo;m Stefan Markovic.
              </h1>

              <div className="w-20 h-0.5 bg-gradient-to-r from-gold via-gold/60 to-transparent mb-8 mx-auto lg:mx-0" />

              <div className="space-y-5 text-text-secondary text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  By day, I&rsquo;m the{' '}
                  <span className="text-gold font-semibold">
                    Head of Talent for a US DTC brand
                  </span>
                  . I know exactly what it takes to find and vet people who can
                  actually scale a direct-to-consumer business &mdash; because
                  I do it every day.
                </p>
                <p>
                  PerunHR exists because I kept seeing the same problem: founders
                  losing months of momentum and six figures in revenue to hires
                  that looked great on paper but couldn&rsquo;t execute in a
                  fast-moving DTC environment.
                </p>
                <p>
                  Traditional recruiters don&rsquo;t understand DTC. They
                  can&rsquo;t tell the difference between someone who
                  &ldquo;managed ad spend&rdquo; and someone who actually owned a
                  P&amp;L and scaled from $50K to $500K/month. I can. Because
                  I&rsquo;ve done it.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-accent-red text-white font-bold rounded-md hover:brightness-110 transition-all text-base shadow-lg shadow-accent-red/20 uppercase tracking-wide"
                >
                  Book a Discovery Call
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 border border-text-secondary/20 text-text-primary font-semibold rounded-md hover:border-gold/40 hover:text-gold transition-all text-base"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-section-alt to-transparent pointer-events-none" />
      </section>

      {/* Why PerunHR Section */}
      <section className="py-20 md:py-28 px-6 bg-section-alt">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              The Mission
            </span>
            <h2 className="gold-line gold-line-center inline-block text-3xl sm:text-4xl font-bold text-text-primary mt-4 pb-4">
              Why I Built PerunHR
            </h2>
          </div>

          <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
            <p className="reveal">
              The DTC hiring market is broken. Founders are making $50&ndash;100K
              hiring mistakes because generic recruiters send candidates
              who&rsquo;ve never scaled a DTC brand, never managed a real ad
              budget, and don&rsquo;t understand the pace.
            </p>

            <blockquote className="reveal font-serif text-xl sm:text-2xl italic text-text-primary leading-snug py-6 pl-6 border-l-2 border-gold">
              &ldquo;An insider recruiting for insiders. That&rsquo;s the entire
              thesis.&rdquo;
            </blockquote>

            <p className="reveal">
              Every candidate goes through the same rigorous process I use in my
              day job. Not a quick phone screen and a resume forward &mdash; a
              genuine evaluation of whether they can do the work{' '}
              <em>at your specific stage of growth</em>.
            </p>

            <p className="reveal">
              I source globally &mdash; South Africa, Philippines, Latin America,
              Eastern Europe &mdash; because the best talent for DTC isn&rsquo;t
              always in your zip code. But every hire comes with a{' '}
              <span className="text-gold font-semibold">90-day guarantee</span>,
              because I stand behind what I deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Battle Test Deep-Dive */}
      <section className="clip-diagonal py-24 md:py-32 px-6 bg-deep-blue -mt-1">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 reveal">
            <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
              The Methodology
            </span>
          </div>
          <div className="text-center mb-4 reveal">
            <h2 className="gold-line gold-line-center inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary pb-4">
              The Battle Test &mdash; In Depth
            </h2>
          </div>
          <p className="text-center text-text-secondary text-lg max-w-2xl mx-auto mb-16 reveal">
            This isn&rsquo;t a standard recruitment process. It&rsquo;s designed
            to simulate real work conditions at your company, so only the people
            who can actually do the job make it through.
          </p>

          <div className="space-y-8 stagger">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="reveal">
                <div
                  className={`bg-card-bg border rounded-md p-6 sm:p-8 transition-all hover:border-gold/30 ${
                    i === 4
                      ? 'border-accent-red/40 shadow-lg shadow-accent-red/5'
                      : 'border-card-border'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center font-bold text-sm ${
                        i === 4
                          ? 'bg-accent-red text-white'
                          : 'bg-gold/15 text-gold'
                      }`}
                    >
                      {step.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-text-primary">
                          {step.title}
                        </h3>
                        {step.detail && (
                          <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-0.5 rounded-sm">
                            {step.detail}
                          </span>
                        )}
                      </div>
                      <p className="text-text-secondary text-base leading-relaxed">
                        {step.description}
                      </p>
                      {i === 4 && (
                        <p className="mt-3 text-text-secondary text-sm leading-relaxed border-t border-card-border pt-3">
                          This is where the real separation happens. Candidates
                          receive a task based on <em>your</em> actual business
                          challenges &mdash; not a generic case study. We
                          evaluate strategic thinking, execution quality, and how
                          they communicate results.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Outcome */}
          <div className="mt-12 text-center reveal">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card-bg border border-gold/20 rounded-md">
              <span className="text-accent-red font-bold text-2xl">&lt;10%</span>
              <span className="text-text-secondary text-sm">
                of candidates make it through to your shortlist
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-6 bg-primary-dark">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
            Want to Work Together?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="font-serif italic text-text-secondary text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            15 minutes. No pitch, no pressure. Just a real conversation about
            your hiring needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-accent-red text-white font-bold rounded-md hover:brightness-110 transition-all text-lg shadow-lg shadow-accent-red/20 uppercase tracking-wide"
            >
              Book a Discovery Call
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 border border-text-secondary/20 text-text-primary font-semibold rounded-md hover:border-gold/40 hover:text-gold transition-all text-lg"
            >
              Or DM Me on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
