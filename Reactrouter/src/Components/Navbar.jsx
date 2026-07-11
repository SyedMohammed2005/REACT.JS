import { NavLink } from "react-router-dom";
 function Navbar() {
    return(
<nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink
    to="/about"
    className={({ isActive }) =>
        isActive ? "active" : ""
    }
>
    About
</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
</nav>
    )
 }
 export default Navbar;