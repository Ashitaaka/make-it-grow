import React, { useState, useRef, useEffect } from 'react';
import { postComment } from '../../../../../services/httpServices';
import "./accordion.css";
import Monochev from "../../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../../assets/icons/mono_chevrons_icone_blanc.svg";
import genericIcon from "../../../../../assets/icons/genericPicture_2.jpg";

const AccordionComment = ({ title, idea, users }) => {
  const [open, setOpen] = useState(true);
  const [comments, setComments] = useState(idea.comment || []);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainer = useRef(null);

  const userInfo = JSON.parse(localStorage.getItem('makeItGrowToken'));

  const [newComment, setNewComment] = useState({
    content: "",
    id_comment: null,
    id_user: userInfo.id,
    id_idea: idea.idea_id,
  });

  const onOpening = () => {
    setOpen(!open);
    setMaxHeight((prevMaxHeight) => (prevMaxHeight === 0 ? contentContainer.current.scrollHeight : 0));
  };

  const textCommentChanging = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewComment((prevNewComment) => ({
      ...prevNewComment,
      [key]: value,
    }));
  };

  const postNewComment = (e) => {
    e.preventDefault();
    postComment(newComment).then(() => {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment({
        content: "",
        id_comment: null,
        id_user: userInfo.id,
        id_idea: idea.idea_id,
      });
    });
  };

  useEffect(() => {
    setMaxHeight(contentContainer.current.scrollHeight);
  }, [comments]);

  return (
    <div className="accordion_container">
      <div
        className="header"
        onClick={onOpening}
        style={{
          backgroundColor: open ? "var(--ultra-light-color)" : "transparent",
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
          <form className="comment-form" onChange={textCommentChanging} >
            <textarea
              className="comment-zone"
              id="content"
              name="content"
              placeholder="Exprimez-vous..."
              onFocus={(e) => {
                e.target.style.outline = "none";
                e.target.style.borderColor = `var(${idea.color})`;
                e.target.style.boxShadow = `0 0 10px var(${idea.color})`;
              }}
              onBlur={(e) => {
                e.target.style.outline = "";
                e.target.style.borderColor = "";
                e.target.style.boxShadow = "";
              }}
              value={newComment.content}
            />
            <button
              className="btn-comment"
              style={{
                width: "30%",
                backgroundColor: "transparent",
                border: `2px solid var(${idea.color})`,
                color: `var(${idea.color})`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = `var(${idea.color})`;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = `var(${idea.color})`;
              }}
              type="submit"
              onClick={postNewComment}
            >
              Commentez
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccordionComment;
