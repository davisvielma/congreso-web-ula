import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 grow">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-5xl text-red-600">404</h1>
        <h2 className="font-semibold text-xl">Pagina no encontrada</h2>
      </div>
      <p className="text-gray-500">Lo sentimos, la página que buscas no existe.</p>
      <Link to="/" className="p-2.5 font-medium bg-blue-500 text-white rounded-xl hover:underline">
        Volver al inicio
      </Link>
    </section>
  )
}

export default NotFoundPage