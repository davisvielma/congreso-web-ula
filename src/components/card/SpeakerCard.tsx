import type { Speaker } from "@/types"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as Twitter } from "react-icons/fa6"


interface Props {
  speaker: Speaker
  index: number
}

const SpeakerCard = ({ speaker, index }: Props) => {
  return (
    <Card
      key={speaker.id}
      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up bg-white dark:bg-gray-800"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardContent className="px-1.5 py-4 sm:p-6 text-center">
        <div className="relative mb-6">
          <img
            src={speaker.image || "/photoProfileDefault.webp"}
            alt={speaker.name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500 group-hover:border-yellow-400 transition-colors duration-300"
          />
          <div className="absolute inset-0 bg-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{speaker.name}</h3>

        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">{speaker.role}</p>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{speaker.company}</p>

        <div className="flex gap-2 mb-4 justify-center">
          {speaker.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-xs">
              {specialty}
            </Badge>
          ))}
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {speaker.bio}
        </p>

        <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {speaker.social.twitter && (
            <motion.a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
          )}
          {speaker.social.linkedin && (
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-blue-500 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          )}
          {speaker.social.github && (
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default SpeakerCard