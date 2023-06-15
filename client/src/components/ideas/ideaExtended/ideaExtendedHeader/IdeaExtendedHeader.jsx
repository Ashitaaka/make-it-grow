import React from 'react';
import './ideaextendedheader.css';

const IdeaExtendedHeader = () => {
  return (
    <div className="header-container">
      <div className="top-header">
        <button className="closing-button"></button>
        <div className="tags-container">
          <p className="location-tag">Bordeaux</p>
          <p className="location-tag">Saint-Jean-de-pied-de-Port</p>
          <p className="status-tag">A voter</p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default IdeaExtendedHeader;
