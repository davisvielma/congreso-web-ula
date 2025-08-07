import { Pathnames } from "@/router/pathnames";
import { motion } from "framer-motion"
import { Calendar, MapPin, Mail, Phone, ExternalLink } from "lucide-react"
import { FaFacebookF as Facebook, FaXTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa6";
import { useLocation } from "react-router";

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500" },
  { name: "X", icon: Twitter, href: "https://x.com", color: "hover:text-gray-900 dark:hover:text-white" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
  { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" }
]

const quickLinks = [
  { name: "Agenda", href: "#agenda" },
  { name: "Speakers", href: "#speakers" },
  { name: "Registro", href: "#registration" },
  { name: "Ubicación", href: "#location" },
  { name: "Sponsors", href: "#sponsors" },
]

const contactInfo = [
  { icon: Mail, text: "congreso@ula.ve", href: "mailto:congreso@ula.ve" },
  { icon: Phone, text: "+58 274 222-1111", href: "tel:+582742221111" },
  { icon: MapPin, text: "Mérida, Venezuela", href: "#location" },
]

const Footer = () => {
  const { pathname } = useLocation()

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        const offsetTop = element.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    } else {
      window.open(href, "_blank", "noopener noreferrer")
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className={`grid gap-12 md:grid-cols-2 ${pathname === Pathnames.lading ? "lg:grid-cols-3" : ""} `}>
            {/* Logo y Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">ULA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Congreso Dev</h3>
                  <p className="text-sm text-gray-400">Universidad de Los Andes</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                El evento más importante de desarrollo web en Venezuela. Conectando desarrolladores, compartiendo
                conocimiento y construyendo el futuro tecnológico del país.
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>15 de Noviembre, 2026</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Auditorio La Hechicera, ULA</span>
              </div>
            </motion.div>

            {/* Enlaces Rápidos */}
            {pathname === Pathnames.lading && <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      {link.name}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>}

            {/* Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <li key={index}>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center gap-3 group"
                      >
                        <Icon className="w-5 h-5 text-blue-500" />
                        <span>{contact.text}</span>
                      </motion.div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-4 text-gray-400">SÍGUENOS</h5>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.button
                        key={social.name}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(social.href)}
                        className={`w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-200 hover:bg-gray-700 dark:hover:bg-gray-600`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 text-sm text-gray-400 text-center"
            >
              © 2025 Universidad de Los Andes. Todos los derechos reservados.
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer