import { Outlet } from "react-router"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ParticlesBackground from "@/components/ParticlesBackground"

const AppLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-[1300px] w-full mx-auto py-4 px-3 sm:py-6 sm:px-5 md:py-8 md:px-7 lg:px-10 xl:px-14 grow flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Outlet />
        <ParticlesBackground />
      </div>
      <Footer />
    </main>
  )
}

export default AppLayout