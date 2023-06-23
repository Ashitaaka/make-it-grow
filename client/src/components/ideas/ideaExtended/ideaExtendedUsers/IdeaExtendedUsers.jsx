import React from 'react';
import './ideaextendedusers.css';
const USER_LENGTH = 4;

const IdeaExtendedUsers = ({ users }) => {
  // Add condition to replace the 11th image if there are more than 11 images

  const experts = users.filter((user) => user.is_expert);
  const owner = users.find((user) => user.is_owner);

  return (
    <div className="users-container">
      <div className="creator">
        <p>
          Par {owner.firstname} {owner.lastname}
        </p>
        <img className="users-img" src={owner.picture} />
      </div>
      <div className="vertical-line"></div>
      <div className="impacted-users">
        <p>Personnes impactées</p>

        <div className="img-mapping">
          {users.map((user, index) => {
            if (index < USER_LENGTH) {
              return (
                <img key={index} className="users-img" src={user.picture} />
              ); // Return the JSX element to render the image
            }
          })}
          {users.length > USER_LENGTH ? (
            <div className="overlay_img">
              <p>...</p>
              <img className="img" src={users[users.length - 1].picture} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="experts">
        <p>Personnes expertes</p>
        <div className="img-mapping">
          {experts.map((expert, index) => {
            if (index < USER_LENGTH) {
              return (
                <img key={index} className="users-img" src={expert.picture} />
              ); // Return the JSX element to render the image
            }
          })}
          {experts.length > USER_LENGTH ? (
            <div className="overlay_img">
              <p>...</p>
              <img className="img" src={experts[experts.length - 1].picture} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default IdeaExtendedUsers;
