import useTheme from "./hooks/useTheme"
import AppRouter from "./router"

function App() {
  useTheme()

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
