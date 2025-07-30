import { Outlet } from "react-router"

const AppLayout = () => {
  return (
    <>
      <main className="max-w-[1350px] mx-auto py-4 px-3 sm:py-6 sm:px-5 md:py-8 md:px-7 lg:px-10 xl:px-14">
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout