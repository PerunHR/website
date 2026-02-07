import { HeroSection } from '@/components/HeroSection'
import { ProblemSection } from '@/components/ProblemSection'
import { ProcessSection } from '@/components/ProcessSection'
import { ProofSection } from '@/components/ProofSection'
import { OfferSection } from '@/components/OfferSection'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <ProofSection />
      <OfferSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
