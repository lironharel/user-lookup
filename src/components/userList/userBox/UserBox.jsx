import React from "react";
import { Link } from "react-router-dom";
import './userBox.scss';

const UserBox = ({ user }) => {
   const userInitails = user.name.split(' ')
   .filter(name => !name.endsWith('.') && name.length > 1)
   .reduce((acc, curr) => acc + curr[0], '')
   .toUpperCase()

   return (
      <div className="user-box-container">
         <div className="user-box-badge"><span className="user-box-initials">{userInitails}</span></div>
         <div className="user-box-info">
            <span className="user-box-full-name">{user.name}</span>
            <span className="user-box-email">{user.email}</span>
         </div>
         <Link to={`users/${user.username}`}>
            <button className="user-box-link btn">More Info</button>
         </Link>
      </div>
   );
};

export default UserBox;
