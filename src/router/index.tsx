import { lazy, Suspense } from "react"
import Loader from "../components/Loader"
import { BrowserRouter, Route, Routes } from "react-router"

const AppLayout = lazy(() => import("./../layout/AppLayout"))
const LandingPage = lazy(() => import("./../screen/LandingPage"))

const Pathnames = {
  lading: '/'
}

const AppRouter = () => {
  return (
     <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center">
          <Loader />
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path={Pathnames.lading} element={<LandingPage />} />
          </Route>
          

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter