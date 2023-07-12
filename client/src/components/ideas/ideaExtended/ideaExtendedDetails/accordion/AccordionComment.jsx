import React, { useState, useRef, useEffect } from 'react';
import "./accordion.css";
import Monochev from "../../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../../assets/icons/mono_chevrons_icone_blanc.svg";
import genericIcon from "../../../../../assets/icons/genericPicture_2.jpg";
import CommentForm from './CommentForm';

const AccordionComment = ({ title, idea, users, token }) => {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState(idea.comment);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainer = useRef(null);

  const onOpening = () => {
    setOpen(!open);
    setMaxHeight((prevMaxHeight) => (prevMaxHeight === 0 ? contentContainer.current.scrollHeight : 0));
  };



  useEffect(() => {
    if(!open){
      setMaxHeight(0)
    }else{
    setMaxHeight(contentContainer.current.scrollHeight)};
  }, [comments]);
  return (
    <div className="accordion_container">
      <div
        className="header"
        onClick={onOpening}
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
      <div ref={contentContainer} className="content_container" style={{ maxHeight: `${maxHeight}px` }}>
        <div className="p-content">
          <div className="comment_container">
            {comments.map((comment, index) => {
              const commentOfUser = comment.id_user;
              const userInfos = users.find((user) => user.user_id === commentOfUser);
              return (
                <div key={index} className="user_comment_container">
                  <div className="user_info">
                    {userInfos && (
                      <img
                        src={userInfos.picture ? userInfos.picture : genericIcon}
                        alt="User"
                        className="user_picture"
                      />
                    )}
                    <p>
                      {userInfos ? `${userInfos.firstname} ${userInfos.lastname}` : null}
                    </p>
                  </div>
                  <div className="comment">{comment.content}</div>
                  <hr />
                </div>
              );
            })}
          </div>
          
          {idea.status==='débat' && idea.location_id===token.id_location  ? <CommentForm idea={idea} setComments={setComments}/> :null   }
         
        </div>
      </div>
    </div>
  );
};

export default AccordionComment;
