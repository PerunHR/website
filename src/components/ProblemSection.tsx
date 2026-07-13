export function ProblemSection() {
  return (
    <section className="py-20 md:py-28 px-6 bg-section-alt">
      <div className="max-w-3xl mx-auto">
        {/* Serif pull quote */}
        <blockquote className="reveal font-serif text-2xl sm:text-3xl md:text-4xl italic text-text-primary leading-snug mb-10">
          &ldquo;If you&rsquo;re scaling a DTC brand, you&rsquo;ve probably
          made at least one hire that looked perfect on paper but
          couldn&rsquo;t deliver.&rdquo;
        </blockquote>

        <div className="w-16 h-0.5 bg-accent-red mb-10" />

        <div className="space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
          <p className="reveal">
            The &ldquo;Head of Growth&rdquo; who was really just a media buyer
            with an inflated title. The &ldquo;Creative Director&rdquo; who
            couldn&rsquo;t produce a single VSL that converted.
          </p>

          <p className="reveal">
            Every bad hire costs{' '}
            <span className="text-accent-red font-bold text-xl">
              $50–100K+
            </span>{' '}
            in lost revenue and momentum you can&rsquo;t get back.
          </p>

          <p className="reveal">
            Most recruiters make this worse. They don&rsquo;t understand DTC.
            They can&rsquo;t tell the difference between someone who
            &ldquo;managed&rdquo; Facebook Ads and someone who actually owned a
            P&amp;L and scaled spend from $50K to $500K/month.
          </p>

          <div className="reveal pt-4 pl-6 border-l-2 border-gold">
            <p className="text-text-primary font-semibold text-lg sm:text-xl leading-relaxed">
              I can. Because I wasn&rsquo;t just a recruiter. I was the{' '}
              <span className="text-gold">
                Head of Talent for a US DTC brand
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
