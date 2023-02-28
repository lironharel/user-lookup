import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import UserInfo from "./components/userInfo/UserInfo";
import UserList from "./components/userList/UserList";
import PageNotFound from "./components/shared/error/PageNotFound";
import axios from "axios";
import './app.scss'

function App() {
   const [users, setUsers] = useState([]);
   const [error, setError] = useState(null);
   const location = useLocation();
   
   useEffect(() => {
      async function fetchUsers() {
         try {
           const response = await axios.get('https://jsonplaceholder.typicode.com/users');
           const fetchedUsers = response.data;
           setUsers(fetchedUsers);
         } catch (error) {
           console.log('User Fetch Error:', error);
           setError(error.message);
         }
       }
   
       if (location.pathname === '/' || !users.length) {
         fetchUsers();
   }}, [location.pathname, users.length])

   return (
      <div className="app-main-container">
         <Routes>
            <Route exact path="/" element={<UserList users={users} error={error} />} />
            <Route path="/users/:username" element={<UserInfo users={users} error={error} />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </div>
   );
}

export default App;
