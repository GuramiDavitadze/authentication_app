import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuthContext } from "src/hooks/AuthHooks";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
  const { user, handleLogout } = useAuthContext();
  return (
    <nav className="nav">
      <div className="nav-bar-container">
        <div className="logo">
          <Link to="/">Auth</Link>
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          {!user ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile">profile</NavLink>
              <button className="logout-btn" onClick={handleLogout}>
                <IoIosLogOut />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
