import AgendaSection from "@/components/AgendaSection"
import FloatingBackToTop from "@/components/FloatingBackToTop"
import HeroSection from "@/components/HeroSection"
import QuizSection from "@/components/QuizSection"
import RegistrationSection from "@/components/RegistrationSection"
import SpeakersSection from "@/components/SpeakersSection"
import { ToastContainer } from 'react-toastify'

const LandingPage = () => {

  return (
    <div className="flex flex-col items-center z-10">
      <HeroSection /> 
      <AgendaSection />
      <SpeakersSection />
      <QuizSection />
      <RegistrationSection />

      <FloatingBackToTop />
      <ToastContainer />
    </div>
  )
}

export default LandingPage