import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../accordion/accordion.css";
import confetti from "canvas-confetti"; //confetti for button

const ModifyButton = ({
  idea,
  SetModificationAreOn,
  modificationAreOn,
  setReadyToSendV2,
  setPopUpActive,
}) => {
  const navigate = useNavigate();

  const handleRejectAfterDebateIdeaStatus = () => {
    axios.put(`ideas/${idea.idea_id}`, {
      is_closed: 1,
      id_status: 8,
    });
    navigate("/dashboard");
  };

  const handleUpdateModifIdeaStatus = () => {
    axios.put(`ideas/${idea.idea_id}`, { id_status: 4 }).then((res) => {
      setPopUpActive(true);
      confetti({
        zIndex: 30000000,
      });
    });
  };

  const handleModifyIdeaStatus = () => {
    SetModificationAreOn(true);
  };

  const validateModifyIdeaStatus = () => {
    SetModificationAreOn(false);
    setReadyToSendV2(true);
    location.reload();
  };

  const cancelModifyIdeaStatus = () => {
    location.reload();
  };

  return (
    <div>
      {modificationAreOn ? null : (
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
              handleRejectAfterDebateIdeaStatus();
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
            onClick={handleModifyIdeaStatus}
          >
            Modifier
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
              handleUpdateModifIdeaStatus();
            }}
          >
            Approuver
          </button>
        </div>
      )}

      {modificationAreOn ? (
        <div className="container_button_action">
          <button
            className="cta-button"
            onClick={cancelModifyIdeaStatus}
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
          >
            Annuler Modifications
          </button>
          <button
            className="cta-button"
            onClick={validateModifyIdeaStatus}
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
          >
            Valider Modifications
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ModifyButton;
