import React from 'react'
import axios from 'axios';
import '../accordion/accordion.css'

const ExpertButton = ({idea}) => {
    const handleApproveExpertStatus = () => {
        axios.put(`ideas/${idea.idea_id}`, { id_status: 5 });
        };
    const handleRejectExpertStatus = () => {
        axios.put(`ideas/${idea.idea_id}`, { id_status: 4})
        };

  return (
    <div className='ExpertButton'>

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
                handleRejectExpertStatus ();
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
                handleApproveExpertStatus();
              window.location.reload(false);
            }}
          >
            Approuver
          </button>

    </div>
  )
}



export default ExpertButton