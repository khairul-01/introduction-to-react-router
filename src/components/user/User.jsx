import { Link } from "react-router-dom";
import "./user.css"

const User = ({user}) => {
   const {name, email, phone, id} = user;
   return (
      <div className="user-container">
         <h2>{name}</h2>
         <h5>{email}</h5>
         <h5>{phone}</h5>
         <Link to={`/user/${id}`}>Show Details</Link>
         <Link to={`/user/${id}`}> <button>Click Me</button> </Link>
      </div>
   );
};

export default User;