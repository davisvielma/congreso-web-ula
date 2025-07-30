import { useThemeStore } from "@/store/theme"

const LandingPage = () => {
  const { theme, setTheme } = useThemeStore()

  return (
    <div className="my-20">
      <p>Theme: { theme }</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Cambiar theme</button>
    </div>
  )
}

export default LandingPage