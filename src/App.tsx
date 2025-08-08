import { ToastContainer } from 'react-toastify'
import Metadata from './components/Metadata'
import useTheme from './hooks/useTheme'
import AppRouter from './router'

function App() {
  useTheme()

  return (
    <>
      <Metadata
        title="Congreso de Desarrollo Web - ULA"
        ogImage="/web.svg"
        description="Congreso de Desarrollo Web organizado por la Universidad de Los Andes - 2026"
        keywords={['ULA', 'congreso', 'web']}
      />
      <AppRouter />
      <ToastContainer />
    </>
  )
}

export default App
