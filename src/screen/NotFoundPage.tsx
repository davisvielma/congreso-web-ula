import { Link } from "react-router"
import { motion } from "framer-motion"

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 grow">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-8xl text-red-600">404</h1>
        <h2 className="font-semibold text-2xl text-center">Pagina no encontrada</h2>
      </div>
      <p className="text-gray-500 text-center">Lo sentimos, la página que buscas no existe.</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="p-2.5 font-medium bg-blue-500 text-white rounded-xl hover:underline">
          Volver al inicio
        </Link>
      </motion.div>

    </section>
  )
}

export default NotFoundPage