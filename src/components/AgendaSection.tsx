import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Code, Database, Brain, Calendar } from "lucide-react"

type Track = "all" | "frontend" | "backend" | "ia"

interface AgendaItem {
  id: string
  title: string
  speaker: string
  time: string
  track: "frontend" | "backend" | "ia"
  description: string
}

const agendaData: AgendaItem[] = [
  {
    id: "1",
    title: "React 19: Nuevas Características",
    speaker: "María González",
    time: "09:00 - 09:45",
    track: "frontend",
    description: "Explorando las últimas características de React 19 y cómo implementarlas en proyectos reales.",
  },
  {
    id: "2",
    title: "Node.js y Microservicios",
    speaker: "Carlos Rodríguez",
    time: "09:00 - 09:45",
    track: "backend",
    description: "Arquitectura de microservicios con Node.js y mejores prácticas de desarrollo.",
  },
  {
    id: "3",
    title: "IA en el Desarrollo Web",
    speaker: "Ana Martínez",
    time: "09:00 - 09:45",
    track: "ia",
    description: "Integración de inteligencia artificial en aplicaciones web modernas.",
  },
  {
    id: "4",
    title: "TypeScript Avanzado",
    speaker: "Luis Pérez",
    time: "10:00 - 10:45",
    track: "frontend",
    description: "Técnicas avanzadas de TypeScript para aplicaciones escalables.",
  },
  {
    id: "5",
    title: "GraphQL y APIs Modernas",
    speaker: "Elena Vargas",
    time: "10:00 - 10:45",
    track: "backend",
    description: "Construcción de APIs eficientes con GraphQL y Apollo Server.",
  },
  {
    id: "6",
    title: "Machine Learning con TensorFlow.js",
    speaker: "Roberto Silva",
    time: "10:00 - 10:45",
    track: "ia",
    description: "Implementación de modelos de ML directamente en el navegador.",
  },
]

const trackConfig = {
  frontend: {
    label: "Frontend",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  backend: {
    label: "Backend",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    icon: Database,
    gradient: "from-green-500 to-emerald-500",
  },
  ia: {
    label: "Inteligencia Artificial",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
  },
}

const AgendaSection = () => {
  const [activeTrack, setActiveTrack] = useState<Track>("all")

  const filteredAgenda = activeTrack === "all" ? agendaData : agendaData.filter((item) => item.track === activeTrack)

  return (
    <section id="agenda" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/50 w-full">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-800 dark:text-blue-200 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Programa del Evento
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Agenda del Evento</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Tres tracks especializados con los mejores expertos en desarrollo web de Venezuela y Latinoamérica
          </p>
        </motion.div>

        {/* Filtros mejorados */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeTrack === "all" ? "default" : "outline"}
              onClick={() => setActiveTrack("all")}
              className="rounded-full px-6 py-3 font-semibold"
            >
              Todos los Tracks
            </Button>
          </motion.div>

          {Object.entries(trackConfig).map(([key, config]) => {
            const Icon = config.icon
            return (
              <motion.div key={key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeTrack === key ? "default" : "outline"}
                  onClick={() => setActiveTrack(key as Track)}
                  className="rounded-full px-6 py-3 font-semibold flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {config.label}
                </Button>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Agenda Cards mejoradas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgenda.map((item, index) => {
            const trackInfo = trackConfig[item.track]
            const Icon = trackInfo.icon

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white dark:bg-gray-800">
                  <div className={`h-2 bg-gradient-to-r ${trackInfo.gradient}`} />

                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className={`${trackInfo.color} flex items-center gap-1`}>
                        <Icon className="w-3 h-3" />
                        {trackInfo.label}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.time}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="flex items-center text-base">
                      <User className="w-4 h-4 mr-2" />
                      {item.speaker}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AgendaSection