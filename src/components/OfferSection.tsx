import { ROLES, PRICING_MODELS, CALENDLY_URL } from '@/lib/constants'

export function OfferSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-primary-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            Services &amp; Investment
          </span>
          <h2 className="gold-line gold-line-center inline-block mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary pb-4">
            What I Offer
          </h2>
        </div>

        {/* Roles Grid */}
        <div className="mb-20">
          <h3 className="reveal gold-line text-lg font-bold text-gold mb-8 uppercase tracking-[0.15em] pb-3">
            Positions I Fill
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger">
            {ROLES.map((role, i) => (
              <div
                key={i}
                className="reveal-scale group bg-card-bg border border-card-border rounded-md p-5 hover:border-gold/30 transition-all"
              >
                <h4 className="font-bold text-text-primary mb-1.5 text-sm uppercase tracking-wide">
                  {role.title}
                </h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {role.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Models */}
        <div>
          <h3 className="reveal gold-line text-lg font-bold text-gold mb-8 uppercase tracking-[0.15em] pb-3">
            Investment
          </h3>
          <div className="grid md:grid-cols-3 gap-4 stagger">
            {PRICING_MODELS.map((plan, i) => (
              <div
                key={i}
                className={`reveal-scale relative bg-card-bg border rounded-md p-7 transition-all ${
                  i === 0
                    ? 'border-accent-red/40 shadow-lg shadow-accent-red/5'
                    : 'border-card-border hover:border-gold/30'
                }`}
              >
                {i === 0 && (
                  <span className="absolute -top-3 left-6 text-[10px] font-bold text-white bg-accent-red px-3 py-1 rounded-sm uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <h4 className="text-lg font-bold text-text-primary mb-1">
                  {plan.model}
                </h4>
                <p className="text-2xl font-bold text-accent-red mb-3 tracking-tight">
                  {plan.investment}
                </p>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-3">
                  {plan.bestFor}
                </p>
                <p className="text-text-secondary text-sm">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>

          {/* Guarantee callout */}
          <div className="reveal mt-8 flex items-center justify-center gap-3 text-text-secondary text-sm">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gold"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>
              <span className="text-gold font-semibold">90-day guarantee</span>{' '}
              on every placement. If the hire doesn&rsquo;t work out, I replace them. Free.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
