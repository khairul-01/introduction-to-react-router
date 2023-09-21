import { Link } from "react-router-dom";
import "./Heacer.css";

const Header = () => {
   return (
      <div>
         <h2>Navbar</h2>
         <nav>
            <Link to={'/'}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/users"}>User Info</Link>
            <Link to={"/posts"}>Posts</Link>
            <Link to={"/contact"}>Contact Us</Link>
         </nav>
      </div>
   );
};

export default Header;