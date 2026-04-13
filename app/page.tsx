import Navbar from '@/components/Navbar'
import InfinityCursor from '@/components/InfinityCursor'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import AppPreviewSection from '@/components/AppPreviewSection'
import PrivacySection from '@/components/PrivacySection'
import TechSection from '@/components/TechSection'
import CTABanner from '@/components/CTABanner'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <InfinityCursor />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AppPreviewSection />
      <PrivacySection />
      <TechSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
