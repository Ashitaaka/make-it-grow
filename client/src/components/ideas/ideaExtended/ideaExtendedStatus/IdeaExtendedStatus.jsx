import React from 'react';
import './ideaextendedstatus.css';

const IdeaExtendedStatus = () => {
  return (
    <div className='idea-status-container'>
      <div className='idea-title'>
        <h1>Démenager de Paris au primptemps 2023 pour tenter l'aventure de Milan</h1>
      </div>

      <div className="timeline-container">
          <div className="creation">
            <p>Projet créé</p>
            <div className="creation-dot dot"></div>
          </div>

          <div className="debate checkpoint">
            <p>En débat</p>
            <div className="debate-dot dot"></div>
          </div>

          <div className="synthese checkpoint">
            <p>Synthèse en cours</p>
            <div className="synthese-dot dot"></div>
          </div>

          <div className="vote checkpoint">
            <p>En vote</p>
            <div className="vote-dot dot"></div>
          </div>

          <div className="deadline">
            <p>Date de fin</p>
            <div className="deadline-dot dot"></div>
          </div>

        <div className="rod"></div>
      </div>

    </div>
    ) 
};

export default IdeaExtendedStatus;
