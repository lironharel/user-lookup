import { Link } from "react-router-dom";
import './error.scss';

function UserNotFound() {
   return (
     <div className="error-fetching-data">
       <h2>User Not Found</h2>
       <p>Please chose a user from the list.</p>
       <Link to={'/'}>
         <button className="error-btn btn" >Back</button>
      </Link>
     </div>
   );
 }
 
 export default UserNotFound;