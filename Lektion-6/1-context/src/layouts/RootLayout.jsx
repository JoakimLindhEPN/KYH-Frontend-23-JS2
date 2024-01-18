import { Outlet } from "react-router-dom"
import { Navbar } from "../components/Navbar"
import PostsContextProvider from "../contexts/PostsContext"
import { useThemeContext } from "../contexts/ThemeContext"

function RootLayout() {

  const { isLightTheme } = useThemeContext()
  return (

      <PostsContextProvider>
        <div className={`h-screen ${isLightTheme ? 'bg-slate-100 text-gray-900' : 'bg-slate-800 text-white'}`}>

          <Navbar />
          <div className="px-2 max-w-[600px] m-auto">
            <Outlet />
          </div>
        </div>
      </PostsContextProvider>
  )
}
export default RootLayout