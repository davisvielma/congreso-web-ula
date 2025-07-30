import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useThemeStore } from "@/store/theme"

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore()
  const [mounted, setMounted] = useState(false)

  // Evitar hidration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border-white/20"
      >
        <div className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    )
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border-white/20 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-200"
        aria-label={`Cambiar a tema ${theme === "light" ? "oscuro" : "claro"}`}
      >
        {theme === "light" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
        )}
      </Button>
    </motion.div>
  )
}

export default ThemeToggle