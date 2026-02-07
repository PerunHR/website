import { PROCESS_STEPS } from '@/lib/constants'

const INTENSITY_COLORS = [
  'bg-gold/80 text-primary-dark',
  'bg-gold/60 text-primary-dark',
  'bg-accent-red/40 text-white',
  'bg-accent-red/60 text-white',
  'bg-accent-red/80 text-white',
  'bg-accent-red text-white',
  'bg-gold text-primary-dark',
]

export function ProcessSection() {
  return (
    <section className="clip-diagonal py-24 md:py-32 px-6 bg-deep-blue -mt-1">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 reveal">
          <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            The 7-Step Methodology
          </span>
        </div>
        <div className="text-center mb-4 reveal">
          <h2 className="gold-line gold-line-center inline-block text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary pb-4">
            The Battle Test
          </h2>
        </div>
        <p className="text-center text-text-secondary text-lg max-w-xl mx-auto mb-6 reveal">
          Most candidates don&rsquo;t survive. That&rsquo;s the point.
        </p>

        {/* Funnel indicator */}
        <div className="flex items-center justify-center gap-3 mb-16 reveal">
          <span className="text-text-secondary text-sm">100% enter</span>
          <div className="flex items-center gap-0.5">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-sm bg-accent-red"
                style={{
                  width: `${32 - i * 3}px`,
                  opacity: 0.3 + i * 0.1,
                }}
              />
            ))}
          </div>
          <span className="text-accent-red font-bold text-sm">&lt;10% remain</span>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-gold/50 via-accent-red/50 to-gold/50" />
          </div>

          <div className="space-y-6 lg:space-y-0 stagger">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.number}
                className={`reveal relative lg:flex items-center lg:min-h-[130px] ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number circle (center on desktop) */}
                <div
                  className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-md items-center justify-center font-bold text-base shadow-lg ${INTENSITY_COLORS[i]}`}
                  style={{
                    clipPath:
                      i === 4
                        ? 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        : undefined,
                    width: i === 4 ? '52px' : undefined,
                    height: i === 4 ? '52px' : undefined,
                  }}
                >
                  {step.number}
                </div>

                {/* Card */}
                <div
                  className={`lg:w-[calc(50%-48px)] ${
                    i % 2 === 0 ? 'lg:mr-auto lg:pr-4' : 'lg:ml-auto lg:pl-4'
                  }`}
                >
                  <div
                    className={`bg-card-bg border rounded-md p-5 transition-all hover:translate-x-${
                      i % 2 === 0 ? '1' : '-1'
                    } ${
                      i === 4
                        ? 'border-accent-red/40 shadow-lg shadow-accent-red/5'
                        : 'border-card-border hover:border-gold/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Mobile number */}
                      <div
                        className={`lg:hidden flex-shrink-0 w-9 h-9 rounded-md flex items-center justify-center font-bold text-sm ${INTENSITY_COLORS[i]}`}
                      >
                        {step.number}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1.5">
                          <h3 className="text-base font-bold text-text-primary">
                            {step.title}
                          </h3>
                          {step.detail && (
                            <span className="text-[10px] font-bold text-gold uppercase tracking-wider bg-gold/10 px-2 py-0.5 rounded-sm">
                              {step.detail}
                            </span>
                          )}
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
