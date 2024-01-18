import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/authContext"
import { useEffect } from "react"

function RootLayout() {

  return (
    <>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </>
  )
}
export default RootLayout