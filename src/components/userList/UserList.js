import React from "react";
import BreadCrumbs from "../shared/breadCrumbs/BreadCrumbs";
import ErrorFetchingData from "../shared/error/ErrorFetchingData";
import UserBox from "./userBox/UserBox";
import './userList.scss'

function UserList({users, error}) {
   if(error) {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <ErrorFetchingData />
         </div>
      )
   }
   return (
      <div>
         <BreadCrumbs />
         <hr className="bread-crumbs-separator" />
         <div className="page-heading-container">
            <h3 className="blue-heading">ALL USERS ({users.length})</h3>
         </div>
         <div className="users-grid-container">
            {users.map(user => <UserBox key={user.id} user={user} />)}
         </div>
      </div>
   );
}

export default UserList;
