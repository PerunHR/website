import { CALENDLY_URL, LINKEDIN_URL } from '@/lib/constants'

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-deep-blue overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Ready to Stop Hiring{' '}
            <span className="text-accent-red">B-Players</span>?
          </h2>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="font-serif italic text-text-secondary text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            15 minutes. No pitch, no pressure. If I can help, I&rsquo;ll tell
            you how. If I can&rsquo;t, I&rsquo;ll tell you that too.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
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
  )
}
