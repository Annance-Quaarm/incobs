import { HeroSection } from '@/components/landing/hero-section'
import { ProblemSection } from '@/components/landing/problem-section'
import { SolutionSection } from '@/components/landing/solution-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { VisionSection } from '@/components/landing/vision-section'
import { CTASection } from '@/components/landing/cta-section'
import { Footer } from '@/components/landing/footer'

export default function LandingPage() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <VisionSection />
            <CTASection />
            <Footer />
        </main>
    )
}