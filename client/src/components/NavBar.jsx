import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useAuth } from "../context/AuthContext.jsx";

export default function NavBar() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    signout();
    navigate("/signin");
  };

  return (
    <header className="navbar">
      {/* Logo pinned left */}
      <div className="navbar-left">
        <Link to="/" className="logo-wrap">
          <Logo />
        </Link>
      </div>

      {/* Navigation aligned right */}
      <div className="navbar-right">
        <nav className="nav-links">

          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/*If USER is ADMIN — show admin panel link */}
          {user && user.role === "admin" && (
            <NavLink to="/admin/education" className="admin-link">
              Admin Panel
            </NavLink>
          )}

          {/*If NOT logged in — show Sign In + Sign Up */}
          {!user && (
            <>
              <NavLink to="/signin">Sign In</NavLink>
              <NavLink to="/signup">Sign Up</NavLink>
            </>
          )}

          {/*If logged in — show Logout */}
          {user && (
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          )}

        </nav>
      </div>
    </header>
  );
}





