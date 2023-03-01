import React, { useContext } from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/chevron_right.svg";
import { UserContext } from "../../context/userContext";
import './breadCrumbs.scss'

function BreadCrumbs() {
   const {selectedUser, setSelectedUser, fetchUsers} = useContext(UserContext);

   // Navigates to main Users List view by setting back selectedUser to null
   const NavToUsersList = () => {
      setSelectedUser(null);
      fetchUsers();
   }

   if (selectedUser) {
      return (
         <div className="bread-crumbs-container">
            <span className="bread-crumbs-users-list link" onClick={NavToUsersList}>Users List</span>
            <RightArrow className="bread-crumbs-arrow"/>
            <span className="bread-crumbs-selected-user">{selectedUser?.name }</span>
         </div>
      );
   }
   else {
      return (
         <div className="bread-crumbs-container">
            <span className="bread-crumbs-users-list">Users List</span>
         </div>
      );
   }
   
}

export default BreadCrumbs;
