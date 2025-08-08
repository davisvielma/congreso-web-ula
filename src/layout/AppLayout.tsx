import { Outlet } from 'react-router'
import Footer from '@/components/Footer'
import Navbar from '@/components/navigation/Navbar'
import ParticlesBackground from '@/components/ParticlesBackground'

const AppLayout = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full grow flex flex-col bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Outlet />
        <ParticlesBackground />
      </div>
      <Footer />
    </main>
  )
}

export default AppLayout
