import React from "react";
import User from "../types-modules/User";
import UserContacts from './UserCard/UserContacts'
import UserData from "./UserCard/UserData";

const UserCard: React.FC<{ user: User, darkMode: boolean }> = ({ user, darkMode }) => {
  
  return (
    <div className={`user-card ${darkMode ? 'user-card-dark' : ''}`}>
      <img
      src={user.avatar_url}
      alt={'Logo'}
      height={100}
      width={100}
      className="user-avatar"
      />
      <div className="user-data">
        <UserData darkMode={darkMode} user={user}  />
        <UserContacts {...{ user }} />
      </div>
    </div>
  );
};

export default UserCard;