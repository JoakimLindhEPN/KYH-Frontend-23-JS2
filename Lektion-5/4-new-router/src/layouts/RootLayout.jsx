import { Outlet } from "react-router-dom"
import { Navbar } from '../components/Navbar'
function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
export default RootLayout