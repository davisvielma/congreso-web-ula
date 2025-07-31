import { Link } from "react-router"
import { motion } from "framer-motion"

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 grow z-10 min-h-[80vh]">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-8xl text-red-600">404</h1>
        <h2 className="font-semibold text-3xl text-center">Pagina no encontrada</h2>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-center text-xl mb-8">Lo sentimos, la página que buscas no existe.</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="px-4 py-3 font-medium bg-blue-500 text-white rounded-xl hover:underline">
          Volver al inicio
        </Link>
      </motion.div>

    </section>
  )
}

export default NotFoundPage