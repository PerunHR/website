import type { Metadata } from 'next'
import { EMAIL } from '@/lib/constants'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy — PerunHR',
  description: 'PerunHR privacy policy — how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 bg-primary-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-sm mb-12">
            Last updated: February 2026
          </p>

          <div className="space-y-8 text-text-secondary text-base leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Who We Are
              </h2>
              <p>
                PerunHR is a DTC recruitment service operated by Stefan
                Markovic. This website, perunhr.com, is used to provide
                information about our services and allow prospective clients to
                schedule Discovery Calls.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Information We Collect
              </h2>
              <p className="mb-3">
                We collect minimal information through this website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-text-primary">Analytics data:</strong>{' '}
                  We use Google Analytics 4 (GA4) to understand how visitors use
                  our site. This includes pages viewed, time on site, referral
                  source, and general geographic region. GA4 uses cookies to
                  collect this data.
                </li>
                <li>
                  <strong className="text-text-primary">
                    Calendly booking data:
                  </strong>{' '}
                  When you book a Discovery Call through our embedded Calendly
                  widget, Calendly collects your name, email, and any
                  information you provide. This is governed by{' '}
                  <a
                    href="https://calendly.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:underline"
                  >
                    Calendly&rsquo;s Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong className="text-text-primary">
                    Direct communications:
                  </strong>{' '}
                  If you contact us via email or LinkedIn, we retain the content
                  of those communications.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Cookies
              </h2>
              <p className="mb-3">This site uses the following cookies:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-text-primary">
                    Analytics cookies (GA4):
                  </strong>{' '}
                  Used to measure site traffic and understand visitor behavior.
                  For visitors in the European Economic Area (EEA), these
                  cookies are only loaded after you provide explicit consent via
                  our cookie banner.
                </li>
                <li>
                  <strong className="text-text-primary">
                    Functional cookies:
                  </strong>{' '}
                  We store your theme preference and cookie consent choice in
                  your browser&rsquo;s local storage. These are not tracking
                  cookies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Your Rights
              </h2>
              <p className="mb-3">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request deletion of your data</li>
                <li>Opt out of analytics tracking (decline cookies via our banner, or use your browser&rsquo;s Do Not Track setting)</li>
                <li>Withdraw consent at any time by clearing your browser cookies</li>
              </ul>
              <p className="mt-3">
                California residents have additional rights under the CCPA,
                including the right to know what data is collected and the right
                to opt out of its sale. We do not sell personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Data Sharing
              </h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. Analytics data is
                processed by Google in accordance with{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Google&rsquo;s Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-text-primary mb-3">
                Contact
              </h2>
              <p>
                For any privacy-related questions or requests, contact us at{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gold hover:underline"
                >
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
