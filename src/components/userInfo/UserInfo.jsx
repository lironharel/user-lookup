import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import BreadCrumbs from "../shared/breadCrumbs/BreadCrumbs";
import { ReactComponent as LeftArrow } from "../../assets/icons/chevron_left.svg"
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import { ReactComponent as WorkIcon } from "../../assets/icons/work.svg"
import './userInfo.scss'
import ErrorFetchingData from "../shared/error/ErrorFetchingData";
import UserNotFound from "../shared/error/UserNotFound";


function UserInfo({users, error}) {
   const {username} = useParams('username');
   const selectedUser = users.find(user => user.username === username);
   
   if (error) {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <ErrorFetchingData />
         </div>
      )
   }

   else if (!selectedUser) {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <UserNotFound />
      </div>
      )
   }

   else {
      return (
         <div>
            <BreadCrumbs selectedUser={selectedUser}/>
            <hr className="bread-crumbs-separator" />
            <div className="page-heading-container">
               <h3 className="blue-heading">{selectedUser?.name.toUpperCase()}</h3>
               <Link to={'/'} className="back-link">
                  <button className="back-btn btn">
                     <LeftArrow className="back-btn-arrow"/>
                     <span>Back</span>
                  </button>
               </Link>
            </div>
            <div className="user-info-section">
               <div className="section-header-container">
                  <PersonIcon className="section-icon" />
                  <h3 className="section-title">User Info</h3>
               </div>
               <div className="section-body-container">
                  <div className="user-info-row">
                     <span className="user-info-property">Name:</span>
                     <span className="user-info-value">{selectedUser?.name}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Username:</span>
                     <span className="user-info-value">{selectedUser?.username}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Phone:</span>
                     <span className="user-info-value">{selectedUser?.phone}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Email:</span>
                     <span className="user-info-value">{selectedUser?.email}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Website:</span>
                     <span className="user-info-value">{selectedUser?.website}</span>
                  </div>
               </div>
            </div>
            <div className="user-info-section">
               <div className="section-header-container">
                  <HomeIcon className="section-icon" />
                  <h3 className="section-title">Address</h3>
               </div>
               <div className="section-body-container">
                  <div className="user-info-row">
                     <span className="user-info-property">Street:</span>
                     <span className="user-info-value">{selectedUser?.address?.street}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Suite:</span>
                     <span className="user-info-value">{selectedUser?.address?.suite}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">City:</span>
                     <span className="user-info-value">{selectedUser?.address?.city}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Zipcode:</span>
                     <span className="user-info-value">{selectedUser?.address?.zipcode}</span>
                  </div>
               </div>
            </div>
            <div className="user-info-section">
               <div className="section-header-container">
                  <WorkIcon className="section-icon work-icon" />
                  <h3 className="section-title">Company</h3>
               </div>
               <div className="section-body-container">
                  <div className="user-info-row">
                     <span className="user-info-property">Name:</span>
                     <span className="user-info-value">{selectedUser?.company?.name}</span>
                  </div>
                  <div className="user-info-row">
                     <span className="user-info-property">Catch Phrase:</span>
                     <span className="user-info-value">{selectedUser?.company?.catchPhrase}</span>
                  </div>
               </div>
            </div>      
         </div>
      );
   }


}

export default UserInfo;
