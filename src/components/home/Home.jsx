import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {
   return (
      <div>
         <Header></Header>
         <h2>This is from home component</h2>

         <Outlet></Outlet>

         <div>Thank you for visiting us.</div>
      </div>
   );
};

export default Home;