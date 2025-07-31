import AgendaSection from "@/components/AgendaSection"
import FloatingBackToTop from "@/components/FloatingBackToTop"
import HeroSection from "@/components/HeroSection"

const LandingPage = () => {

  return (
    <div className="flex flex-col items-center gap-6 z-10">
      <HeroSection /> 
      <AgendaSection />

      <FloatingBackToTop />
    </div>
  )
}

export default LandingPage