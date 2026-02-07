import { METRICS } from '@/lib/constants'

export function ProofSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-section-alt">
      <div className="max-w-6xl mx-auto">
        {/* Anonymized Case Study */}
        <div className="max-w-3xl mx-auto mb-20 reveal">
          <div className="relative bg-card-bg border border-card-border rounded-md p-8 md:p-10 overflow-hidden">
            {/* Gold accent top edge */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-gold rounded-sm" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.2em]">
                Case Study
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
              US DTC Brand, Health &amp; Wellness Space
            </h3>

            <p className="text-text-secondary mb-8 leading-relaxed">
              When I started, the CEO was doing everything himself. Sales,
              marketing, operations, customer service. Here&rsquo;s what
              happened after I stepped in:
            </p>

            <ul className="space-y-5">
              {[
                {
                  role: 'EA / Second-in-Command',
                  result:
                    'CEO went from 14-hour days to strategic work only',
                },
                {
                  role: 'COO',
                  result:
                    'Systematized operations, built SOPs, enabled new product line launch',
                },
                {
                  role: 'Currently filling',
                  result:
                    'Creative Director, Copywriter, Shopify Designer, Video Editor',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-sm bg-accent-red/10 flex items-center justify-center">
                    <svg
                      className="text-accent-red"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-text-primary">
                      {item.role}
                    </span>
                    <span className="text-text-secondary"> — {item.result}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className="reveal-count text-center p-6 bg-card-bg border border-card-border rounded-md relative overflow-hidden"
            >
              {/* Subtle gold glow behind number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gold-glow blur-xl" />
              <div className="relative">
                <div className="text-3xl sm:text-4xl font-bold text-accent-red mb-1 tracking-tight">
                  {metric.value}
                </div>
                <div className="text-text-secondary text-xs uppercase tracking-wider font-medium">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
