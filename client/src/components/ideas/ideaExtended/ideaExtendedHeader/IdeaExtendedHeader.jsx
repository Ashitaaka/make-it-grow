import React from 'react';
import './ideaextendedheader.css';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const IdeaExtendedHeader = ({ clickedButton, setClickedButton, idea }) => {
  return (
    <div className="header-container">
      <div className="top-header">
        <Link to={'/'} onClick={() => setClickedButton('home')}>
          <AiOutlineArrowLeft className="closing-button" />
        </Link>
        <div className="tags-container">
          <p className="location-tag">{idea.city}</p>
          <p className="location-tag">{idea.city}</p>
          <p
            style={{ backgroundColor: `var(${idea.color})` }}
            className="status-tag location-tag tag_categories">
            {idea.categories}
          </p>
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default IdeaExtendedHeader;
