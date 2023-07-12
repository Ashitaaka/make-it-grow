import React, { useEffect, useState } from "react";
import "./ideaextendedusers.css";
import genericPicture from "../../../../assets/icons/genericPicture_2.jpg";
const USER_LENGTH = 4;

const IdeaExtendedUsers = ({ users, impactedUsers, idea }) => {
  // Add condition to replace the 11th image if there are more than 11 images

  // const experts = impactedUsers.find((user) =>
  //   user.user_id_categories.includes(idea.cat_id)
  // );

  console.log(impactedUsers);

  const owner = users.find((user) => user.is_owner);

  return (
    <div className="users-container">
      <div className="creator">
        <p>
          Par {owner.firstname} {owner.lastname}
        </p>
        <img
          className="users-img"
          src={owner.picture ? owner.picture : genericPicture}
        />
      </div>
      <div className="vertical-line"></div>
      <div className="impacted-users">
        <p>Personnes impactées</p>

        <div className="img-mapping">
          {impactedUsers.map((user, index) => {
            if (index < USER_LENGTH) {
              return (
                <img key={index} className="users-img" src={user.picture} />
              ); // Return the JSX element to render the image
            }
          })}
          {users.length > USER_LENGTH ? (
            <div className="overlay_img">
              <p>...</p>
              <img
                className="img"
                src={
                  users[users.length - 1].picture
                    ? users[users.length - 1].picture
                    : genericPicture
                }
              />
            </div>
          ) : null}
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="experts">
        <p>Personnes expertes</p>
        <div className="img-mapping">
          {experts &&
            experts.map((expert, index) => {
              if (index < USER_LENGTH) {
                return (
                  <img
                    key={expert.user_id}
                    className="users-img"
                    src={expert.picture ? expert.picture : expert.picture}
                  />
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
