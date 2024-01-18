import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"
import { useEffect } from "react"

function AuthLayout() {

  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      navigate("/private")
    }
  }, [token])

  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-200">
      <p className="text-3xl font-bold text-center my-5">Auth</p>
      <Outlet />
    </div>
  )
}
export default AuthLayout