import './userBox.scss';

const UserBox = ({ user, onClickMoreInfo }) => {

   const getUserInitials = (fullName) => {
      return fullName.split(' ')
         .filter(name => !name.endsWith('.') && name.length > 1)
         .reduce((acc, curr) => acc + curr[0], '')
         .toUpperCase()
   }

   const userInitails = getUserInitials(user?.name);

   return (
      <div className="user-box-container">
         <div className="user-box-badge"><span className="user-box-initials">{userInitails}</span></div>
         <div className="user-box-info">
            <span className="user-box-full-name">{user?.name}</span>
            <span className="user-box-email">{user?.email}</span>
         </div>
         <button className="user-box-link btn" onClick={() => onClickMoreInfo(user)}>More Info</button>
      </div>
   );
};

export default UserBox;
