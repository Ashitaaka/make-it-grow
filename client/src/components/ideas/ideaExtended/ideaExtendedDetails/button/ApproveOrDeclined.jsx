import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../accordion/accordion.css'

const ApproveOrDeclined = ({idea}) => {

    const navigate = useNavigate();
    const handleUpdateIdeaStatus = () => {
        axios.put(`ideas/${idea.idea_id}`, { id_status: 2 });
      };
    const handleRejectIdeaStatus = () => {
        axios.put(`ideas/${idea.idea_id}`, {    
            is_closed: 1,
            id_status: 8,
        })
        navigate("/dashboard")

      };

  return (
    <div className='ApproveOrDeclined'>
        <button
            className="cta-button"
            style={{
              backgroundColor:  `var(${idea.color})`,
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
              backgroundColor:  `var(${idea.color})`,
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
            onClick={() => {
                handleRejectIdeaStatus ();
              window.location.reload(false);
            }}
          >
            Rejeter
          </button>

    </div>
  )
}

export default ApproveOrDeclined