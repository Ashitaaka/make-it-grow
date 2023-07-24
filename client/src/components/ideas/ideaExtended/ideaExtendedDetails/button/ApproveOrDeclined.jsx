import React from "react";
import { useNavigate } from "react-router-dom";
import "../accordion/accordion.css";
import {
  goToState2,
  goToStateRejected,
} from "../../../../../services/httpServices";

const ApproveOrDeclined = ({ idea }) => {
  const navigate = useNavigate();

  //On accepting the Idea
  const handleUpdateIdeaStatus = (e) => {
    //Getting current date
    const currentDate = new Date();
    // Add 7 days to current date
    const deadline = new Date(
      currentDate.setMinutes(currentDate.getMinutes() + 2)
    );
    // const deadline = new Date(currentDate.setDate(currentDate.getDate() + 8));

    goToState2(idea, deadline);
  };

  //On rejecting the idea
  const handleRejectIdeaStatus = () => {
    goToStateRejected(idea);
    navigate("/dashboard");
  };

  return (
    <div className="container_button_action">
      <button
        className="cta_button_action_status"
        style={{
          width: "fit-content",
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
          handleUpdateIdeaStatus();
          window.location.reload(false);
        }}
      >
        Approuver
      </button>
      <button
        className="cta-button"
        style={{
          width: "fit-content",
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
          handleRejectIdeaStatus();
          window.location.reload(false);
        }}
      >
        Rejeter
      </button>
    </div>
  );
};

export default ApproveOrDeclined;
