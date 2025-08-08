import { motion } from 'framer-motion'
import { speakersData } from '@/data/speakers'
import SpeakerCard from './card/SpeakerCard'

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900/50 w-full">
      <div className="container mx-auto lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Speakers Destacados</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce a los expertos que compartirán sus conocimientos y experiencias
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {speakersData.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full max-w-[400px]"
            >
              <SpeakerCard index={index} speaker={speaker} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection
