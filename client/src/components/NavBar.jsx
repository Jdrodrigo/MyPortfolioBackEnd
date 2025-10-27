import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <header className="navbar">
      {/* ✅ Logo pinned left */}
      <div className="navbar-left">
        <Link to="/" className="logo-wrap">
          <Logo />
        </Link>
      </div>

      {/* ✅ Nav aligned right */}
      <div className="navbar-right">
        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}




