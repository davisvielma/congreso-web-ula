import Loader from "@/components/Loader"
import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

const AppLayout = lazy(() => import("@/layout/AppLayout"))
const LandingPage = lazy(() => import("@/screen/LandingPage"))
const NotFoundPage = lazy(() => import("@/screen/NotFoundPage"))

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
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default AppRouter