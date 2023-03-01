import React, { createContext, useCallback, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
   const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   // Error handling for users list api fetch
   const handleFetchError = (error) => {
      console.error("Error fetching users from api", error.message);
      setError(error);
   };

   // Fetches users list from api
   const fetchUsers = useCallback(async () => {
      setLoading(true);
      try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users");
         if (!response.ok) {
            throw Error(`Response status ${response.status}`);
         }
         const users = await response.json();
         setUsers(users);
         setLoading(false);
      } catch (error) {
         handleFetchError(error);
         setLoading(false);
      }
   }, []);

   // Navigation function to Users List view
   const navToUsersList = () => {
      setSelectedUser(null);
   }

   // Navigation function to User Info view for the user boxes
   const navToUserInfo = (user) => {
      setSelectedUser(user);
   }

   return (
      <UserContext.Provider
         value={{
            fetchUsers,
            users,
            selectedUser,
            setSelectedUser,
            loading,
            error,
            navToUsersList,
            navToUserInfo
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};

export default UserContextProvider;
