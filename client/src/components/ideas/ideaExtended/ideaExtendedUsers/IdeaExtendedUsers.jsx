import React from 'react';
import './ideaextendedusers.css';
import guillaume from '../../../../../public/images/profile-pictures/guillaume.jpg';

const IdeaExtendedUsers = ({ idea }) => {
  const users = [
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
    { guillaume },
  ]; // Add your image sources here

  // Add condition to replace the 11th image if there are more than 11 images

  return (
    <div className="users-container">
      <div className="creator">
        <p>Par Guillaume Leclout</p>
        <img className="users-img" src={guillaume} />
      </div>
      <div className="impacted-users">
        <p>Personnes impactées</p>

        <div className="img-mapping">
          {images.map((image, index) => {
            if (index < 4) {
              return (
                <img key={index} className="users-img" src={image.guillaume} />
              ); // Return the JSX element to render the image
            }
          })}
          {images.length > 4 ? (
            <div className="overlay_img">
              <p>...</p>
              <img className="g" src={images[5].guillaume} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="experts">
        <p>Personnes expertes</p>
        <div className="img-mapping">
          {images.map((image, index) => {
            if (index < 4) {
              return (
                <img key={index} className="users-img" src={image.guillaume} />
              ); // Return the JSX element to render the image
            }
          })}
          {images.length > 4 ? (
            <div className="overlay_img">
              <p>...</p>
              <img className="g" src={images[5].guillaume} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default IdeaExtendedUsers;
