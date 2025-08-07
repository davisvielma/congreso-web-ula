import AgendaSection from "@/components/AgendaSection"
import FloatingBackToTop from "@/components/FloatingBackToTop"
import HeroSection from "@/components/HeroSection"
import LocationSection from "@/components/LocationSection"
import QuizSection from "@/components/QuizSection"
import RegistrationSection from "@/components/RegistrationSection"
import SpeakersSection from "@/components/SpeakersSection"

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center z-10">
      <HeroSection /> 
      <AgendaSection />
      <SpeakersSection />
      <QuizSection />
      <RegistrationSection />
      <LocationSection />

      <FloatingBackToTop />
      
    </div>
  )
}

export default LandingPage