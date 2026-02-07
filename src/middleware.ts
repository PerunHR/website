import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// EEA + UK country codes (GDPR applies)
const EU_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR',
  'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL',
  'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', // EU members
  'IS', 'LI', 'NO', // EEA
  'GB', // UK (has its own GDPR equivalent)
])

export function middleware(request: NextRequest) {
  const country = request.headers.get('x-vercel-ip-country')

  // Only set geo cookie when Vercel provides the header (production)
  // In local dev, the header is absent — client falls back to timezone detection
  if (!country) return NextResponse.next()

  const isEu = EU_COUNTRIES.has(country)

  const response = NextResponse.next()
  response.cookies.set('geo-eu', isEu ? '1' : '0', {
    httpOnly: false, // needs to be readable by client JS
    secure: true,
    sameSite: 'lax',
    maxAge: 86400, // 24 hours
  })

  return response
}

export const config = {
  matcher: [
    // Run on all pages except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/).*)',
  ],
}
