import { Link, Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <div className="h-screen bg-purple-900 text-white px-5">
      <div className="text-end pt-5">
        <Link to="/auth/login" className="bg-purple-950 px-8 py-2 rounded-lg">Log In</Link>
      </div>
      <Outlet />
    </div>
  )
}
export default PublicLayout