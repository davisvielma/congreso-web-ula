import { MapPin, Mail, Phone } from "lucide-react"
import { FaFacebookF as Facebook, FaXTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin, FaGithub as Github } from "react-icons/fa6";

export const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-500" },
  { name: "X", icon: Twitter, href: "https://x.com", color: "hover:text-gray-900 dark:hover:text-white" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-500" },
  { name: "GitHub", icon: Github, href: "https://github.com", color: "hover:text-gray-900 dark:hover:text-white" }
]

export const quickLinks = [
  { name: "Agenda", href: "#agenda" },
  { name: "Speakers", href: "#speakers" },
  { name: "Registro", href: "#registration" },
  { name: "Ubicación", href: "#location" },
  { name: "Sponsors", href: "#sponsors" },
]

export const contactInfo = [
  { icon: Mail, text: "congreso@ula.ve", href: "mailto:congreso@ula.ve" },
  { icon: Phone, text: "+58 274 222-1111", href: "tel:+582742221111" },
  { icon: MapPin, text: "Mérida, Venezuela", href: "#location" },
]