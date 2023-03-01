import React, { useContext } from "react";
import { ReactComponent as RightArrow } from "../../assets/icons/chevron_right.svg";
import { UserContext } from "../../context/userContext";
import './breadCrumbs.scss'

function BreadCrumbs() {
   const {selectedUser, goToUsersList} = useContext(UserContext);

   if (selectedUser) {
      return (
         <div className="bread-crumbs-container">
            <span className="bread-crumbs-users-list link" onClick={goToUsersList}>Users List</span>
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
