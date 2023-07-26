import React from "react";
import { Link } from "react-router-dom";

//import components
import { AiOutlineArrowLeft } from "react-icons/ai";

//import css
import "./ideaextendedheader.css";

const IdeaExtendedHeader = ({ idea }) => {
  return (
    <div className="header-container">
      <div className="top-header">
        <Link to={"/dashboard"}>
          <AiOutlineArrowLeft className="closing-button" />
        </Link>
        <div className="tags-container">
          <p className="location-tag">{idea.city}</p>

          {idea.categories &&
            idea.categories.map((cat, index) => (
              <p
                key={index}
                style={{ backgroundColor: `var(${idea.color})` }}
                className="status-tag location-tag tag_categories"
              >
                {cat}
              </p>
            ))}
        </div>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default IdeaExtendedHeader;
