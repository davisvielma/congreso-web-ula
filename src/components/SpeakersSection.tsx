import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FaGithub as Github, FaLinkedin as Linkedin, FaXTwitter as Twitter } from "react-icons/fa6"

interface Speaker {
  id: string
  name: string
  role: string
  company: string
  bio: string
  image: string
  specialties: string[]
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

const speakersData: Speaker[] = [
  {
    id: "1",
    name: "María González",
    role: "Senior Frontend Developer",
    company: "TechCorp Venezuela",
    bio: "Especialista en React y arquitecturas frontend modernas con más de 8 años de experiencia.",
    image: "",
    specialties: ["React", "TypeScript", "Next.js"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    role: "Backend Architect",
    company: "DevSolutions",
    bio: "Experto en microservicios y arquitecturas escalables, líder técnico con 10+ años de experiencia.",
    image: "",
    specialties: ["Node.js", "Docker", "AWS"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
  {
    id: "3",
    name: "Ana Martínez",
    role: "AI/ML Engineer",
    company: "InnovateLab",
    bio: "Pionera en la integración de IA en aplicaciones web, PhD en Computer Science.",
    image: "",
    specialties: ["TensorFlow", "Python", "Machine Learning"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
  {
    id: "4",
    name: "Luis Pérez",
    role: "Full Stack Developer",
    company: "StartupVE",
    bio: "Desarrollador full stack apasionado por las tecnologías emergentes y la innovación.",
    image: "",
    specialties: ["Vue.js", "Laravel", "GraphQL"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
  {
    id: "5",
    name: "Elena Vargas",
    role: "DevOps Engineer",
    company: "CloudTech",
    bio: "Especialista en infraestructura cloud y automatización de procesos de desarrollo.",
    image: "",
    specialties: ["Kubernetes", "CI/CD", "Terraform"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
  {
    id: "6",
    name: "Roberto Silva",
    role: "Data Scientist",
    company: "DataVenezuela",
    bio: "Científico de datos con enfoque en aplicaciones web y visualización interactiva.",
    image: "",
    specialties: ["D3.js", "Python", "Data Viz"],
    social: {
      twitter: "@usuario",
      linkedin: "usuario",
      github: "usuario",
    },
  },
]

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-900 w-full">
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
              <Card
                key={speaker.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up bg-white dark:bg-gray-800"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection