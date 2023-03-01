import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
   const [users, setUsers] = useState([]);
   const [selectedUser, setSelectedUser] = useState(null);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   const handleFetchError = (error) => {
      console.error("Error fetching users from api", error.message);
      setError(error);
   };

   const fetchUsers = async () => {
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
   };

   return (
      <UserContext.Provider
         value={{
            fetchUsers,
            users,
            selectedUser,
            setSelectedUser,
            loading,
            error,
         }}
      >
         {props.children}
      </UserContext.Provider>
   );
};

export default UserContextProvider;
