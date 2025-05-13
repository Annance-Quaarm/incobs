import { CTASection } from "./_components/cta-section";
import { FeaturesSection } from "./_components/features-section";
import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero-section";
import { ProblemSection } from "./_components/problem-section";
import { SolutionSection } from "./_components/solution-section";
import { VisionSection } from "./_components/vision-section";


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