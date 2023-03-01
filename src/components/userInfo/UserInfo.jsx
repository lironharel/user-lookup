import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { ReactComponent as LeftArrow } from "../../assets/icons/chevron_left.svg"
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg"
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg"
import { ReactComponent as WorkIcon } from "../../assets/icons/work.svg"
import UserInfoRow from "./userInfoRow/UserInfoRow";
import './userInfo.scss'

function UserInfo() {
   const { selectedUser, goToUsersList } = useContext(UserContext);

   return (
      <div>
         <div className="page-heading-container">
            <h3 className="blue-heading">{selectedUser?.name.toUpperCase()}</h3>
            <button className="back-btn btn" onClick={goToUsersList}>
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
               <UserInfoRow property={'Name'} value={selectedUser?.name} />
               <UserInfoRow property={'Username'} value={selectedUser?.username} />
               <UserInfoRow property={'Phone'} value={selectedUser?.phone} />
               <UserInfoRow property={'Email'} value={selectedUser?.email} />
               <UserInfoRow property={'Website'} value={selectedUser?.website} />
            </div>
         </div>
         <div className="user-info-section">
            <div className="section-header-container">
               <HomeIcon className="section-icon" />
               <h3 className="section-title">Address</h3>
            </div>
            <div className="section-body-container">
               <UserInfoRow property={'Street'} value={selectedUser?.address?.street} />
               <UserInfoRow property={'Suite'} value={selectedUser?.address?.suite} />
               <UserInfoRow property={'City'} value={selectedUser?.address?.city} />
               <UserInfoRow property={'Zipcode'} value={selectedUser?.address?.zipcode} />
            </div>
         </div>
         <div className="user-info-section">
            <div className="section-header-container">
               <WorkIcon className="section-icon work-icon" />
               <h3 className="section-title">Company</h3>
            </div>
            <div className="section-body-container">
               <UserInfoRow property={'Name'} value={selectedUser?.company?.name} />
               <UserInfoRow property={'Catch Phrase'} value={selectedUser?.company?.catchPhrase} />
            </div>
         </div>      
      </div>
   );
}



export default UserInfo;
