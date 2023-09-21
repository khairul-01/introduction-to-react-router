import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
   const postDet = useLoaderData();
   const {id, title, body} = postDet;
   const navigate = useNavigate();
   const {postId} = useParams();
   console.log(postId);
   const handleBack = () => {
      navigate(-1);
   }
   return (
      <div>
         <h2>ID: {id}</h2>
         <h2>Post details about: {title}</h2>
         <p>Body: {body}</p>
         <button onClick={handleBack}>Go Back</button>
      </div>
   );
};

export default PostDetails;