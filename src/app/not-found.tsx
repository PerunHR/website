import { CALENDLY_URL } from '@/lib/constants'

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center px-6 bg-primary-dark overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-xl mx-auto text-center">
        <div className="text-gold font-bold text-8xl sm:text-9xl mb-4 tracking-tight">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
          This page didn&rsquo;t survive the Battle Test.
        </h1>

        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />

        <p className="text-text-secondary text-base mb-10 max-w-md mx-auto">
          Less than 10% of candidates make it through &mdash; and this URL
          didn&rsquo;t either. Let&rsquo;s get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-accent-red text-white font-bold rounded-md hover:brightness-110 transition-all text-base uppercase tracking-wide"
          >
            Back to Homepage
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-text-secondary/20 text-text-primary font-semibold rounded-md hover:border-gold/40 hover:text-gold transition-all text-base"
          >
            Book a Call Instead
          </a>
        </div>
      </div>
    </main>
  )
}
