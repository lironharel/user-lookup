import React, { useContext } from "react";
import BreadCrumbs from "../components/common/breadCrumbs/BreadCrumbs";
import Error from "../components/common/error/Error";
import UserInfo from "../components/userInfo/UserInfo";
import UsersList from "../components/usersList/UsersList";
import { UserContext } from "../context/userContext";

function UserLookup() {
   const { selectedUser, navToUsersList, error } = useContext(UserContext);

   if (error) {
      return (
         <div>
            <BreadCrumbs mainPage={'Users List'} />
            <hr className="bread-crumbs-separator" />
            <Error 
               heading={'Error fetching data'} 
               content={'Please try again later.'} 
            />
         </div>
      );
   }

   // User has clicked a specific user to view more info - Show User Info view
   else if (selectedUser) {
      return (
         <div>
            <BreadCrumbs
               mainPage={'Users List'}
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
            <BreadCrumbs mainPage={'Users List'} />
            <hr className="bread-crumbs-separator" />
            <UsersList />
         </div>
      );
   }
}

export default UserLookup;
