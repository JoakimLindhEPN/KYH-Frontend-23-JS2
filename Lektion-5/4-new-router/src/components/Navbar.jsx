import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1>Logo</h1>
        <ul className="nav-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}