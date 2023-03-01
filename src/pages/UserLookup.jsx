import React, { useContext, useEffect } from 'react'
import BreadCrumbs from '../components/breadCrumbs/BreadCrumbs';
import ErrorFetchingData from '../components/common/error/ErrorFetchingData';
import LoadingWheel from '../components/common/loadingWheel/LoadingWheel';
import UserInfo from '../components/userInfo/UserInfo';
import UsersList from '../components/usersList/UsersList';
import { UserContext } from '../context/userContext'

function UserLookup() {
   const { selectedUser, fetchUsers, loading, error } = useContext(UserContext);
   
   // Fetch users on every page load
   useEffect(() => {
      fetchUsers();
   }, [])
   
   if (loading) {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <LoadingWheel />
         </div>
        )
   }

   else if (error) {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <ErrorFetchingData />
         </div>
        )
   }

   // User has clicked a specific user to view more info - Show User Info view
   else if (selectedUser) {
      return (
       <div>
          <BreadCrumbs />
          <hr className="bread-crumbs-separator" />
          <UserInfo />
       </div>
      )
   }

   // Show Users List view
   else {
      return (
         <div>
            <BreadCrumbs />
            <hr className="bread-crumbs-separator" />
            <UsersList />
         </div>
        )
   }
}

export default UserLookup