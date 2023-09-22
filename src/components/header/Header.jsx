import { Link, NavLink } from "react-router-dom";
import "./Heacer.css";

const Header = () => {
   return (
      <div>
         <h2>Navbar</h2>
         <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/users"}>User Info</NavLink>
            <NavLink to={"/posts"}>Posts</NavLink>
            <NavLink to={"/contact"}>Contact Us</NavLink>
         </nav>
      </div>
   );
};

export default Header;