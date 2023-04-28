import React from "react";
import User from "../../types-modules/User";
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg'
import { ReactComponent as LinkIcon } from '../../assets/icon-website.svg'
import { ReactComponent as BusinessIcon } from '../../assets/icon-company.svg'

const UserContacts: React.FC<{ user: User }> = ({ user }) => {

  const location = user?.location ? user.location : "Not Available";
  const googleLocation = user?.location ? 'https://www.google.com/maps/place/' + user.location : "Not Available";
  const twitterName = user?.twitter_username ? user.twitter_username : "Not Available";
  const twitterUrl = user?.twitter_username ? 'https://twitter.com/' + user.twitter_username : "";
  const blogString = user?.blog ? user.blog : "Not Available";
  const company = user?.company ? user.company : "Not Available";
  const companyURL = user?.company ? user.company : "Not Available";

  const avalible = (URL: string, title: string, Icon: JSX.Element) => {
    if (title !== "Not Available"){
      return (
        <a className="user-link" href={URL}>
          {Icon}
          <div className="link-text">{title}</div>
        </a>
      );
    } else {
      return (
        <div className="link-unavalible">
          {Icon}
          <div className="link-text-unavalible">{title}</div>
        </div>
      );
    }
  }
  
  return (
    <div className="user-contact">
      {avalible(googleLocation, location, <LocationIcon />)}
      {avalible(twitterUrl, twitterName, <TwitterIcon />)}
      {avalible(user?.blog || '', blogString, <LinkIcon />)}
      {avalible(companyURL, company, <BusinessIcon />)}
    </div>
  );
};

export default UserContacts;