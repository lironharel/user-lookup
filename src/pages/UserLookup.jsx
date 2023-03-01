import React, { useContext, useEffect } from "react";
import BreadCrumbs from "../components/breadCrumbs/BreadCrumbs";
import ErrorFetchingData from "../components/common/error/ErrorFetchingData";
import UserInfo from "../components/userInfo/UserInfo";
import UsersList from "../components/usersList/UsersList";
import { UserContext } from "../context/userContext";

function UserLookup() {
   const { selectedUser, navToUsersList, fetchUsers, error } =
      useContext(UserContext);

   // Fetch users on every page load
   useEffect(() => {
      fetchUsers();
   }, [fetchUsers]);

   if (error) {
      return (
         <div>
            <BreadCrumbs mainPage={"Users List"} />
            <hr className="bread-crumbs-separator" />
            <ErrorFetchingData />
         </div>
      );
   }

   // User has clicked a specific user to view more info - Show User Info view
   else if (selectedUser) {
      return (
         <div>
            <BreadCrumbs
               mainPage={"Users List"}
               subPage={selectedUser?.name}
               navToMainPage={navToUsersList}
            />
            <hr className="bread-crumbs-separator" />
            <UserInfo user={selectedUser} navToMainPage={navToUsersList} />
         </div>
      );
   }

   // Show Users List view
   else {
      return (
         <div>
            <BreadCrumbs mainPage={"Users List"} />
            <hr className="bread-crumbs-separator" />
            <UsersList />
         </div>
      );
   }
}

export default UserLookup;
