import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import PostsContextProvider from "../contexts/PostsContext"

function RootLayout() {
  return (
    <PostsContextProvider>
      <div className="">

        <Navbar />
        <div className="px-2 max-w-[600px] m-auto">
          <Outlet />
        </div>
      </div>
    </PostsContextProvider>
  )
}
export default RootLayout