import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import LoadingWheel from "../common/loadingWheel/LoadingWheel";
import UserBox from "./userBox/UserBox";
import "./usersList.scss";

function UsersList() {
   const { users, fetchUsers, loading } = useContext(UserContext);

   // Fetch users on every load of Users List view
   useEffect(() => {
      fetchUsers();
   }, [fetchUsers]);

   // Show loading wheel if user fetching is still in progress
   if (loading) {
      return (
         <LoadingWheel />
      );
   } 
   
   else {
      return (
         <div>
            <div className="page-heading-container">
               <h3 className="blue-heading">ALL USERS ({users.length})</h3>
            </div>
            <div className="users-grid-container">
               {users.map((user) => (
                  <UserBox key={user.id} user={user} />
               ))}
            </div>
         </div>
      );
   }
}

export default UsersList;
