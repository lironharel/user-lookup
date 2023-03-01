import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import UserBox from "./userBox/UserBox";
import './usersList.scss'

function UsersList() {
   const {users} = useContext(UserContext);

   return (
      <div>
         <div className="page-heading-container">
            <h3 className="blue-heading">ALL USERS ({users.length})</h3>
         </div>
         <div className="users-grid-container">
            {users.map(user => <UserBox key={user.id} user={user} />)}
         </div>
      </div>
   );
}

export default UsersList;
