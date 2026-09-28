/** Navbar with site navigation links */
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <header>
        <p>Fitness Tracker</p>
        <nav>
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
