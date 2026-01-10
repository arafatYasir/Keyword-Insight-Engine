import HeroSection from "@/components/hero/HeroSection"
import HowItWorksSection from "@/components/how-it-works/HowItWorksSection"
import InsightSection from "@/components/insights/InsightSection"
import OffersSection from "@/components/offers/OffersSection"


const Home = () => {
  return (
    <main>
      {/* ---- Hero Section ---- */}
      <HeroSection />

      {/* ---- How It Works Section ---- */}
      <HowItWorksSection />

      {/* ---- Insights Section ---- */}
      <InsightSection />

      {/* ---- Offers Section ---- */}
      <OffersSection />
    </main>
  )
}

export default Home