import FloatingBackToTop from "@/components/FloatingBackToTop"
import { useThemeStore } from "@/store/theme"

const LandingPage = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="my-20 z-10">
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Cambiar theme</button>

      <FloatingBackToTop />
    </div>
  )
}

export default LandingPage