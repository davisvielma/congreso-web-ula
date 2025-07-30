import { useThemeStore } from "@/store/theme"
import { useEffect } from "react"

const useTheme = () => {
  const { theme } = useThemeStore()

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")

    localStorage.setItem("theme", theme)
  }, [theme])
}

export default useTheme