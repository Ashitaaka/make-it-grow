import React, { useRef, useState } from 'react';
import './accordion.css'
import { postComment } from '../../../../../services/httpServices';



const CommentForm = ({idea, setComments}) => {
  const userInfo = JSON.parse(localStorage.getItem('makeItGrowToken'));
  const commentfields = useRef(null)



    const [newComment, setNewComment] = useState({
        content: "",
        id_comment: null,
        id_user: userInfo.id,
        id_idea: idea.idea_id,
      });

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
        postComment(newComment)
        .then(() => {
          setComments((prevComments) => [...prevComments, newComment]);
          setNewComment({
            content: "",
            id_comment: null,
            id_user: userInfo.id,
            id_idea: idea.idea_id,
          });
          commentfields.current.value=''
        });
      };

  return (
    <div> 
      <form className="comment-form" onChange={textCommentChanging} >
        <textarea 
          ref={commentfields}
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
          // value={newComment.content}
        />
        <button
          className="btn-comment"
          style={{
            backgroundColor: `var(${idea.color})`,
            border: `2px solid var(${idea.color})`,
            color:"white" ,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor ="transparent";
            e.target.style.color =`var(${idea.color})` ;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = `var(${idea.color})`;
            e.target.style.color = "white";
          }}
          type="submit"
          onClick={postNewComment}
        >
          Commentez
        </button>
      </form>
  </div>
  )
}

export default CommentForm