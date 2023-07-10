import React, { useState, createRef } from 'react';
import axios from 'axios'
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

  const userInfos = JSON.parse(localStorage.getItem('makeItGrowToken'))
  console.log(userInfos)
  console.log('idea:',idea);


  const [newComment, setNewComment]= useState({
    content: "",
    id_comment: null,
    id_user: userInfos.id ,
    id_idea: idea.id + 1
}
  )

  const onOpening = (e) => {
    setOpen(!open);
    setMaxHeight(maxHeight === 0 ? contentContainer.current.scrollHeight : 0);
  };

  const textCommentChanging =(e)=>{
    const key = e.target.name
    const value = e.target.value
    
    setNewComment({
      ...newComment,
      [key]:value
    })
  }
  
  
  const postComment = (e) => {
    e.preventDefault()
    return axios
      .post(
        `/comments`,newComment
      )
      .then((res) => {
        
        return res.data;
      })
      .catch((error) => {
        return Promise.reject(error.response.data);
      });
    }


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
              ? idea.comment.map((comment, index) => (

                  
                    <div key={index} className="user_comment_container">
                      <div className="user_info">

                   
                          <img
                            src={users[0].picture ? users[0].picture : genericIcon}
                            alt="User"
                            className="user_picture"
                          />
                        
                        <p>
                          {users ? `${users[0].firstname} ${users[0].lastname}` : null}
                        </p>
                      </div>
                      <div className="comment">{comment}</div>
                      <hr />
                    </div>
                  
              ))
              : null}
          </div>
          <form onChange={textCommentChanging}>
            <textarea id="content" name="content" placeholder='Exprimez-vous . . .'>
            
            </textarea>
            <button type='submit' onClick={postComment}>Commentez</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccordionComment;
