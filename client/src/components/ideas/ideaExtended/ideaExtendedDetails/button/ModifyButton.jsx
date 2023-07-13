import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../accordion/accordion.css'


const ModifyButton = ({idea}) => {

  const navigate = useNavigate();


  const handleRejectAfterDebateIdeaStatus = () => {
    axios.put(`ideas/${idea.idea_id}`, {    
        is_closed: 1,
        id_status: 8,
    })
    navigate("/dashboard")

  };

    const handleUpdateModifIdeaStatus = () => {
        axios.put(`ideas/${idea.idea_id}`, { id_status: 4 });
      };

    const handleModifyIdeaStatus = () => {
        axios.get(`ideas/${idea.idea_id}`, { id_status: 2 });
      };
  return (
    <div className='container_button_action'>

          <button
            className="cta_button_action_status"
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
              handleRejectAfterDebateIdeaStatus ();
              window.location.reload(false);
            }}
          >
            Rejeter
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
              handleModifyIdeaStatus();
              window.location.reload(false);
            }}
          >
            Modifier
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
              handleUpdateModifIdeaStatus();
              window.location.reload(false);
            }}
          >
            Approuver
          </button>

    </div>
  )
}

export default ModifyButton