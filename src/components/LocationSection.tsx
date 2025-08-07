import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { info, infoList } from "@/data/location"

const LocationSection = () => {
  return (
    <section id="location" className="py-20 px-6">
      <div className="container mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Ubicación del Evento</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nos encontraremos en el corazón de la Universidad de Los Andes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center max-w-lg lg:max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  Auditorio La Hechicera
                </CardTitle>
                <CardDescription className="text-lg">Universidad de Los Andes, Mérida, Venezuela</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {infoList.map(({ Icon, desciption, title }) => (
                    <div key={title} className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <h4 className="font-semibold">{title}</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {desciption[0]}
                          <br />
                          {desciption[1]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative hidden sm:block"
          >
            <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
              <div className="aspect-video relative">

                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900 dark:to-green-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                        <h3 className="font-bold text-lg">Auditorio La Hechicera</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Universidad de Los Andes</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Mérida, Venezuela</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute top-8 right-8 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {info.map(({ Icon, color, desciption, title }) => (
            <Card key={title} className="text-center">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 ${color.background} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${color.icon}`} />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{desciption}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LocationSection