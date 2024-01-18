import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-emerald-800 py-4">
      <div className=" max-w-[600px] m-auto px-2 flex justify-between items-center">
        <Link className="text-white text-2xl font-semibold" to="/"><p>My Posts</p></Link>
        <ul className="flex gap-x-8">
          <li><NavLink className="text-white [&.active]:underline" to="/">Home</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/posts">Posts</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/create">Create new Post</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}