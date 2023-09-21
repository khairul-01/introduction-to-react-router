import { useLoaderData } from "react-router-dom";
import User from "../user/user";
import "./users.css"

const Users = () => {

   const users = useLoaderData();

   // state --> data
   // state --> loader
   // useEffect
   // fetch --> state set  --> set state

   return (
      <div>
         <h2>Welcome users: {users.length} </h2>
         <div className="user-display">
            {
               users.map((user, idx) => <User key={idx} user={user}></User>)
            }
         </div>
      </div>
   );
};

export default Users;