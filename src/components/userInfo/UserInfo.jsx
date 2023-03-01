import React from "react";
import { ReactComponent as LeftArrow } from "../../assets/icons/chevron_left.svg"
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import { ReactComponent as WorkIcon } from "../../assets/icons/work.svg"
import UserInfoRow from "./userInfoRow/UserInfoRow";
import './userInfo.scss'

function UserInfo({ user, navToMainPage }) {

   return (
      <div>
         <div className="page-heading-container">
            <h3 className="blue-heading">{user?.name.toUpperCase()}</h3>
            <button className="back-btn btn" onClick={navToMainPage}>
               <LeftArrow className="back-btn-arrow"/>
               <span>Back</span>
            </button>
         </div>
         <div className="user-info-section">
            <div className="section-header-container">
               <PersonIcon className="section-icon" />
               <h3 className="section-title">User Info</h3>
            </div>
            <div className="section-body-container">
               <UserInfoRow property={'Name'} value={user?.name} />
               <UserInfoRow property={'Username'} value={user?.username} />
               <UserInfoRow property={'Phone'} value={user?.phone} />
               <UserInfoRow property={'Email'} value={user?.email} />
               <UserInfoRow property={'Website'} value={user?.website} />
            </div>
         </div>
         <div className="user-info-section">
            <div className="section-header-container">
               <HomeIcon className="section-icon" />
               <h3 className="section-title">Address</h3>
            </div>
            <div className="section-body-container">
               <UserInfoRow property={'Street'} value={user?.address?.street} />
               <UserInfoRow property={'Suite'} value={user?.address?.suite} />
               <UserInfoRow property={'City'} value={user?.address?.city} />
               <UserInfoRow property={'Zipcode'} value={user?.address?.zipcode} />
            </div>
         </div>
         <div className="user-info-section">
            <div className="section-header-container">
               <WorkIcon className="section-icon work-icon" />
               <h3 className="section-title">Company</h3>
            </div>
            <div className="section-body-container">
               <UserInfoRow property={'Name'} value={user?.company?.name} />
               <UserInfoRow property={'Catch Phrase'} value={user?.company?.catchPhrase} />
            </div>
         </div>      
      </div>
   );
}



export default UserInfo;
