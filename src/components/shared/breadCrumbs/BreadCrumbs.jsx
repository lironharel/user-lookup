import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as RightArrow } from "../../../assets/icons/chevron_right.svg";
import './breadCrumbs.scss'

function BreadCrumbs({ selectedUser }) {
   if (selectedUser) {
      return (
         <div className="bread-crumbs-container">
            <Link to={'/'} className="bread-crumbs-users-list">Users List</Link>
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
