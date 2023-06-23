import React from 'react';
import './ideaextendedheader.css';
import closingicon from '../../../../assets/icons/closing-icon.svg';

const IdeaExtendedHeader = ({ idea }) => {
  return (
    <div className="header-container">
      <div className="top-header">
        <img className="closing-button" src={closingicon} alt="Home" />
        <div className="tags-container">
          <p className="location-tag">{idea.city}</p>
          <p className="location-tag">{idea.city}</p>
          <p
            style={{ backgroundColor: `var(${idea.color})` }}
            className="status-tag tag_categories">
            {idea.category}
          </p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default IdeaExtendedHeader;
