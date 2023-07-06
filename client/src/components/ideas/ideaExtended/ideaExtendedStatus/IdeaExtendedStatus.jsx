import React, { useState } from 'react';
import './ideaextendedstatus.css';

const IdeaExtendedStatus = ({ idea }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (event) => {
    const newProgress = progress + Number(event.target.value);
    setProgress(newProgress > 100 ? 100 : newProgress);
  };

  return (
    <div className="idea-status-container">
      <div className="idea-title">
        <h1>{idea.title}</h1>
      </div>
      <div className="timeline-container">
        <div className="creation">
          <p>Projet créé</p>
          <div
            className="creation-dot dot progress"
            style={{ backgroundColor: `var(${idea.color})` }}></div>
        </div>
        <div className="debate checkpoint">
          <p>En débat</p>
          <div
            className="debate-dot dot progress"
            style={{ backgroundColor: `var(${idea.color})` }}></div>
        </div>
        <div className="synthese checkpoint">
          <p>Synthèse en cours</p>
          <div
            className="synthese-dot dot progress"
            style={{ backgroundColor: `var(${idea.color})` }}></div>
        </div>
        <div className="vote checkpoint">
          <p>En vote</p>
          <div
            className="vote-dot dot progress"
            style={{ backgroundColor: `var(${idea.color})` }}></div>
        </div>
        <div className="deadline">
          <p>Date de fin</p>
          <div
            className="deadline-dot dot progress"
            style={{ backgroundColor: `var(${idea.color})` }}></div>
        </div>
        <div
          className="rod progress"
          style={{ width: `${progress}%`, color: `var(${idea.color})` }}></div>
      </div>
      <button className="button-next" onClick={updateProgress} value={25}>
        Next
      </button>
      <button className="button-previous" onClick={updateProgress} value={-25}>
        Previous
      </button>
    </div>
  );
};

export default IdeaExtendedStatus;
