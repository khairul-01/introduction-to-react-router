import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../header/Header";

const Home = () => {

   const navigation = useNavigation();
   const location = useLocation();
   console.log(location);

   return (
      <div>
         <Header></Header>
         <h2>This is from home component</h2>
         {
            navigation.state === "loading"?
            <h1>Loading.......</h1>:
            <Outlet></Outlet>
         }

         <footer>
            <div>Thank you for visiting us.</div>
         </footer>
      </div>
   );
};

export default Home;