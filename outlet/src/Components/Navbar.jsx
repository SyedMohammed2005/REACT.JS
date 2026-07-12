import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/login">Login</NavLink>

      <NavLink to="/dashboard/profile">Profile</NavLink>

      <NavLink to="/dashboard/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;