import React from "react";
import User from "../../types-modules/User";

const UserData: React.FC<{ user: User, darkMode: boolean }> = ({ user, darkMode }) => {

  const date = new Date(user.created_at);
  const joinedDate = `joined ${date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).replace(',', '')}`;

  const bio = user.bio ? user.bio : "This profile has no bio"
  const userName = user?.name ? user.name : user.name;
  const gitHubLink = 'https://github.com/' + user.login
  
  return (
  <>
    <div className="user-info">
      <div>
        <h2>{userName}</h2>
        <a href={gitHubLink}>@{user.login}</a>
        <p className="user-bio">{bio}</p>
      </div>
      <div style={{ color: darkMode ? '#F6F8FF' : '#FFFFFF' }}>{joinedDate}</div>
    </div>
    <div className={`user-stats  ${darkMode ? 'user-stats-dark' : ''}`}>
      <div className="git-detail">
        <p style={{ margin: '8px 0', color: darkMode ? '#F6F8FF' : '#FFFFFF' }}>Repos</p>
        <h3>{user.public_repos}</h3>
      </div>
      <div className="git-detail">
        <p style={{ margin: '8px 0', color: darkMode ? '#F6F8FF' : '#FFFFFF' }}>Followers</p>
        <h3>{user.followers}</h3>
      </div>
      <div className="git-detail">
        <p style={{ margin: '8px 0', color: darkMode ? '#F6F8FF' : '#FFFFFF' }}>Following</p>
        <h3>{user.following}</h3>
      </div>
    </div>
  </>
  );
};

export default UserData;