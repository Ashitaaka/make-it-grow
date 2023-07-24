import React from "react";
import "../accordion/accordion.css";
import { votePost } from "../../../../../services/httpServices";

const VoteButton = ({ idea, userId }) => {
  const handleVoteForIdeaStatus = () => {
    votePost(idea, userId, 1);
  };

  const handleVoteAgainstIdeaStatus = () => {
    votePost(idea, userId, 0);
  };

  return (
    <div className="container_button_action">
      <button
        className="cta_button_action_status"
        style={{
          backgroundColor: `var(${idea.color})`,
          border: `2px solid var(${idea.color})`,
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = `var(${idea.color})`;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = `var(${idea.color})`;
          e.target.style.color = "white";
        }}
        onClick={() => {
          handleVoteForIdeaStatus();
          window.location.reload(false);
        }}
      >
        Pour
      </button>
      <button
        className="cta_button_action_status"
        style={{
          backgroundColor: `var(${idea.color})`,
          border: `2px solid var(${idea.color})`,
          color: "white",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = `var(${idea.color})`;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = `var(${idea.color})`;
          e.target.style.color = "white";
        }}
        onClick={() => {
          handleVoteAgainstIdeaStatus();
          window.location.reload(false);
        }}
      >
        Contre
      </button>
    </div>
  );
};

export default VoteButton;
