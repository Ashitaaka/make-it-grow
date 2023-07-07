import React, { useState, createRef } from "react";
// import css
import "./accordion.css";
// import assets
import Monochev from "../../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../../assets/icons/mono_chevrons_icone_blanc.svg";
import genericIcon from "../../../../../assets/icons/genericPicture_2.jpg";

const AccordionComment = ({ title, idea, users }) => {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainer = createRef();

  const onOpening = (e) => {
    setOpen(!open);
    setMaxHeight(maxHeight === 0 ? contentContainer.current.scrollHeight : 0);
  };

  return (
    <div className="accordion_container">
      {/* Header */}
      <div
        className="header"
        onClick={onOpening}
        style={{
          backgroundColor: `var(--ultra-light-color)`,
        }}
      >
        <div className="title">
          <div
            className="categorie"
            style={{
              backgroundColor: open ? `var(${idea.color})` : "transparent",
              border: open ? "none" : `2px solid var(${idea.color})`,
            }}
          ></div>
          <h2>{title}</h2>
        </div>
        {open ? (
          <img
            src={MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: `var(${idea.color})`,
              transform: "rotate(270deg)",
            }}
          />
        ) : (
          <img
            src={Monochev}
            alt="Arrow"
            style={{
              backgroundColor: "var(--ultra-light-color)",
            }}
          />
        )}
      </div>
      {/* Content */}
      <div
        ref={contentContainer}
        className="content_container"
        style={{ maxHeight }}
      >
        <div className="p-content">
          <div className="comment_container">
            {idea.comment && idea.comment.length > 0
              ? idea.comment.map((comment, index) => {
                  const userId = idea.id_user;
                  const user = users.find((user) => user.user_id === userId);
                  return (
                    <div key={index} className="user_comment_container">
                      <div className="user_info">
                        {user && user.picture && (
                          <img
                            src={user.picture ? user.picture : genericIcon}
                            alt="User"
                            className="user_picture"
                          />
                        )}
                        <p>
                          {user ? `${user.firstname} ${user.lastname}` : null}
                        </p>
                      </div>
                      <div className="comment">{comment}</div>
                      <hr />
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComment;
