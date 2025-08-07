import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import { scrollTo } from "@/utils"

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2026-11-15T09:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Congreso de
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">Desarrollo Web</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Universidad de Los Andes Venezuela
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-12 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium">15 de Noviembre, 2026</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Auditorio La Hechicera, ULA</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-medium">3 Tracks Especializados</span>
            </div>
          </motion.div>

          {/* Countdown mejorado */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {Object.entries(timeLeft).map(([unit, value]) => (
              <motion.div
                key={unit}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 dark:bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm font-medium text-gray-600 dark:text-gray-400 capitalize">
                  {unit === "days" ? "Días" : unit === "hours" ? "Horas" : unit === "minutes" ? "Minutos" : "Segundos"}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold"
                onClick={() => scrollTo("registration")}
              >
                Regístrate Ahora
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm border-white/30 hover:bg-white/20 dark:hover:bg-gray-700/50 px-8 py-4 text-lg rounded-full font-semibold"
                onClick={() => scrollTo("agenda")}
              >
                Ver Agenda
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection