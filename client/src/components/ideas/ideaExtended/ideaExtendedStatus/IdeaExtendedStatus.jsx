import React from 'react';
import './ideaextendedstatus.css';

const IdeaExtendedStatus = ({ idea }) => {
  const calculateProgress = (checkpoint) => {
    if (idea.status === checkpoint) {
      return 'progress';
    }
    return '';
  };

  return (
    <div className="idea-status-container">
      <div className="idea-title">
        <h1>{idea.title}</h1>
      </div>

      <div className="timeline-container">
        <div className={`creation ${calculateProgress('Projet créé')}`}>
          <p>Projet créé</p>
          <div
            className={`creation-dot dot ${calculateProgress(
              'Projet créé'
            )}`}></div>
        </div>

        <div className={`debate checkpoint ${calculateProgress('En débat')}`}>
          <p>En débat</p>
          <div
            className={`debate-dot dot ${calculateProgress('En débat')}`}></div>
        </div>

        <div
          className={`synthese checkpoint ${calculateProgress(
            'Synthèse en cours'
          )}`}>
          <p>Synthèse en cours</p>
          <div
            className={`synthese-dot dot ${calculateProgress(
              'Synthèse en cours'
            )}`}></div>
        </div>

        <div className={`vote checkpoint ${calculateProgress('En vote')}`}>
          <p>En vote</p>
          <div className={`vote-dot dot ${calculateProgress('En vote')}`}></div>
        </div>

        <div className="deadline">
          <p>Date de fin</p>
          <div className="deadline-dot dot"></div>
        </div>

        <div className={`rod ${calculateProgress('Date de fin')}`}></div>
      </div>
    </div>
  );
};

export default IdeaExtendedStatus;
