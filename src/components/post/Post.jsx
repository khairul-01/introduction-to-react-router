import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
   const {title, id} = post;
   const navigate = useNavigate();
   const postStyle = {
      border: '4px solid palegoldenrod',
      padding: '5px',
      margin: '3px'
   }
   const handleShowDet = () => {
      navigate(`/posts/${id}`);
   }
   return (
      <div style={postStyle}>
         <h2>Post Id: {id}</h2>
         <h5>Title: {title}</h5>
         <Link to={`/posts/${id}`}>Post Deatails</Link>
         <Link to={`/posts/${id}`}> <button>Show Details</button> </Link>
         <button onClick={handleShowDet}>Click to show details</button>
      </div>
   );
};

export default Post;