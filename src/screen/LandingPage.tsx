import AgendaSection from "@/components/AgendaSection"
import FloatingBackToTop from "@/components/FloatingBackToTop"
import HeroSection from "@/components/HeroSection"
import SpeakersSection from "@/components/SpeakersSection"

const LandingPage = () => {

  return (
    <div className="flex flex-col items-center z-10">
      <HeroSection /> 
      <AgendaSection />
      <SpeakersSection />

      <FloatingBackToTop />
    </div>
  )
}

export default LandingPage