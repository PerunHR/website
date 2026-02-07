'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { GA_MEASUREMENT_ID } from '@/lib/constants'

function isEuFromCookie(): boolean | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|; )geo-eu=([01])/)
  if (match) return match[1] === '1'
  return null // cookie not set (local dev)
}

// Fallback for local development where Vercel headers aren't available
function isEuFromTimezone(): boolean {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
    return tz.startsWith('Europe/')
  } catch {
    return false
  }
}

function getConsent(): boolean | null {
  if (typeof window === 'undefined') return null
  const val = localStorage.getItem('perunhr-cookie-consent')
  if (val === 'accepted') return true
  if (val === 'declined') return false
  return null
}

export function Analytics() {
  const [consent, setConsent] = useState<boolean | null>(null)
  const [isEu, setIsEu] = useState<boolean | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Prefer Vercel geo cookie, fall back to timezone for local dev
    const geoResult = isEuFromCookie()
    const eu = geoResult !== null ? geoResult : isEuFromTimezone()
    setIsEu(eu)

    if (!eu) {
      setConsent(true)
    } else {
      const stored = getConsent()
      setConsent(stored)
    }
  }, [])

  const shouldLoad = consent === true && !loaded
  const showBanner = isEu === true && consent === null

  const handleAccept = () => {
    localStorage.setItem('perunhr-cookie-consent', 'accepted')
    setConsent(true)
  }

  const handleDecline = () => {
    localStorage.setItem('perunhr-cookie-consent', 'declined')
    setConsent(false)
  }

  return (
    <>
      {/* GA4 Scripts — only load when consent is granted */}
      {shouldLoad && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
            onLoad={() => setLoaded(true)}
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}

      {/* Cookie Consent Banner — EU visitors only */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 sm:p-6">
          <div className="max-w-2xl mx-auto bg-card-bg border border-card-border rounded-md p-5 shadow-2xl">
            <p className="text-text-primary text-sm leading-relaxed mb-4">
              We use cookies to analyze site traffic and improve your experience.
              By accepting, you consent to the use of analytics cookies.{' '}
              <a
                href="/privacy"
                className="text-gold hover:underline"
              >
                Privacy Policy
              </a>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-accent-red text-white font-bold rounded-md text-sm hover:brightness-110 transition-all uppercase tracking-wide"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-5 py-2 border border-text-secondary/20 text-text-secondary font-medium rounded-md text-sm hover:text-text-primary hover:border-text-secondary/40 transition-all"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
