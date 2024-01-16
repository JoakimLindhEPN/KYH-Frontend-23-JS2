import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div>
      <h1>AUTH</h1>
      <Outlet />
    </div>
  )
}
export default AuthLayout