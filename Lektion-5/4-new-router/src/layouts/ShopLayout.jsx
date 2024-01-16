import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"

function ShopLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}
export default ShopLayout