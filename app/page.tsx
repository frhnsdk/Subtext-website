import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PrivacySection from '@/components/PrivacySection'
import TechSection from '@/components/TechSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PrivacySection />
      <TechSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
