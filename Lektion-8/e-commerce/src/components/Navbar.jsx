import { IoLogoOctocat } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="h-16 container m-auto flex items-center justify-between">
        <Link to="/">
          <IoLogoOctocat className="text-white h-10 w-10" />
        </Link>


        <ul className="flex items-center gap-4">
          <li><NavLink to="/" className="text-white">Home</NavLink></li>
          <li>
            <FaShoppingCart className="text-white h-5 w-5 cursor-pointer" />
          </li>
        </ul>
      </div>
    </nav>
  )
}