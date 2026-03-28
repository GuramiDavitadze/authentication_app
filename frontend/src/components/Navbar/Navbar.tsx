import { Link,NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-bar-container">
        <div className="logo">
          <Link to="/">Auth</Link>
        </div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="login">Login</NavLink>
          <NavLink to="signup">Signup</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
