import { HeroSection } from '@/components/home/HeroSection'
import { ServicesSection } from '@/components/home/ServicesSection'
import { FeatureMarquee } from '@/components/home/FeatureMarquee'
import { AboutSection } from '@/components/home/AboutSection'
import { HowItWorksSection } from '@/components/home/HowItWorksSection'
import { TeamSection } from '@/components/home/TeamSection'
import { FaqSection } from '@/components/home/FaqSection'
import { PricingSection } from '@/components/home/PricingSection'
import { TestimonialSection } from '@/components/home/TestimonialSection'
import { BlogSection } from '@/components/home/BlogSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <FeatureMarquee />
      <AboutSection />
      <HowItWorksSection />
      <TeamSection />
      <FaqSection />
      <PricingSection />
      <TestimonialSection />
      <BlogSection />
    </main>
  )
}
