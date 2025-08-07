import { navigationItems } from "./links"
import { motion } from "framer-motion"

interface Props {
  activeSection: string
  scrollToSection: (href: string) => void
}


const DesktopMenu = ({activeSection, scrollToSection}: Props) => {
  return (
    <div className="hidden lg:flex items-center gap-1">
      {navigationItems.map((item) => {
        const Icon = item.icon
        const isActive = activeSection === item.href.substring(1)

        return (
          <motion.button
            key={item.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection(item.href)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
              ? "bg-blue-600 text-white shadow-lg"
              : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
          >
            <Icon className="w-4 h-4" />
            <span>{item.name}</span>
          </motion.button>
        )
      })}
    </div>
  )
}

export default DesktopMenu