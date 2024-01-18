import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { useEffect } from 'react'

function PrivateLayout() {

  const { token, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!token) {
      navigate("/auth/login")
    }
  }, [token])

  return (
    <div>
      <p className="text-3xl text-center font-bold">PRIVATE</p>
      <button onClick={logout}>Logout</button>
      <Outlet />
    </div>
  )
}
export default PrivateLayout