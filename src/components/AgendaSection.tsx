import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { agendaData, trackConfig } from '@/data/agenda'
import type { Track } from '@/types'
import AgendaCard from './card/AgendaCard'

const AgendaSection = () => {
  const [activeTrack, setActiveTrack] = useState<Track>('all')

  const filteredAgenda = activeTrack === 'all' ? agendaData : agendaData.filter((item) => item.track === activeTrack)

  return (
    <section id="agenda" className="py-24 px-4 bg-gray-50/50 dark:bg-gray-900/50 w-full">
      <div className="container mx-auto lg:max-w-7xl">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant={activeTrack === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveTrack('all')}
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
                  variant={activeTrack === key ? 'default' : 'outline'}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
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
                className="w-full max-w-[400px]"
              >
                <AgendaCard
                  Icon={Icon}
                  color={trackInfo.color}
                  description={item.description}
                  gradient={trackInfo.gradient}
                  label={trackInfo.label}
                  speaker={item.speaker}
                  time={item.time}
                  title={item.title}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AgendaSection
