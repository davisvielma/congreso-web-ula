import { navigationItems } from "./links"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  activeSection: string
  scrollToSection: (href: string) => void
  setIsMobileMenuOpen: (isOpen: boolean) => void
  isMobileMenuOpen: boolean
}

const MobileMenu = ({ activeSection, isMobileMenuOpen, scrollToSection, setIsMobileMenuOpen }: Props) => {
  return (
    <>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="container mx-auto px-4 py-4">
                <div className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    const isActive = activeSection === item.href.substring(1)

                    return (
                      <motion.button
                        key={item.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileMenu