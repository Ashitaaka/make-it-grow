import React from "react";
import "../accordion/accordion.css";
import {
  goToState5,
  goToStateRejectedByExpert,
} from "../../../../../services/httpServices";

const ExpertButton = ({ idea }) => {
  //approve the idea
  const handleApproveExpertStatus = () => {
    //Getting current date
    const currentDate = new Date();
    // Add 7 days to current date
    const deadline = new Date(
      currentDate.setMinutes(currentDate.getMinutes() + 2)
    );
    goToState5(idea, deadline);
  };

  //return the idea to previous step
  const handleRejectExpertStatus = () => {
    goToStateRejectedByExpert(idea);
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
          handleRejectExpertStatus();
          window.location.reload(false);
        }}
      >
        Rejeter
      </button>
      <button
        className="cta-button"
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
          handleApproveExpertStatus();
          window.location.reload(false);
        }}
      >
        Approuver
      </button>
    </div>
  );
};

export default ExpertButton;
