import React from 'react'
import axios from 'axios';
import '../accordion/accordion.css'


const ModifyButton = ({idea}) => {

    const handleModifyIdeaStatus = () => {
        axios.get(`ideas/${idea.idea_id}`, { id_status: 2 });
      };
  return (
    <div className='ModifyButton'>
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
    </div>
  )
}

export default ModifyButton