import React, { useState } from 'react';
import './ideaextendedstatus.css';

const IdeaExtendedStatus = ({ idea }) => {
  const [progress, setProgress] = useState(0);

  const updateProgress = (event) => {
    const newProgress = progress + Number(event.target.value);
    console.log(newProgress, event.target.value, progress);
    setProgress(newProgress > 100 ? 100 : newProgress);
  };

  const getDotColor = (dotName) => {
    if (dotName === 'debate-dot') {
      if (progress >= 25) {
        return `var(${idea.color})`;
      } else {
        return 'var(--tag-background-color)';
      }
    } else if (dotName === 'synthese-dot') {
      if (progress >= 50) {
        return `var(${idea.color})`;
      } else {
        return 'var(--tag-background-color)';
      }
    } else if (dotName === 'vote-dot') {
      if (progress >= 75) {
        return `var(${idea.color})`;
      } else {
        return 'var(--tag-background-color)';
      }
    } else if (dotName === 'deadline-dot') {
      if (progress >= 100) {
        return `var(${idea.color})`;
      } else {
        return 'var(--tag-background-color)';
      }
    } else {
      return 'var(--tag-background-color)';
    }
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
            style={{ backgroundColor: `var(${idea.color})` }}
          ></div>
        </div>
        <div className="debate checkpoint">
          <p>En débat</p>
          <div
            className="debate-dot dot progress"
            style={{ backgroundColor: getDotColor('debate-dot') }}
          ></div>
        </div>
        <div className="synthese checkpoint">
          <p>Synthèse en cours</p>
          <div
            className="synthese-dot dot progress"
            style={{ backgroundColor: getDotColor('synthese-dot') }}
          ></div>
        </div>
        <div className="vote checkpoint">
          <p>En vote</p>
          <div
            className="vote-dot dot progress"
            style={{ backgroundColor: getDotColor('vote-dot') }}
          ></div>
        </div>
        <div className="deadline">
          <p>Date de fin</p>
          <div
            className="deadline-dot dot progress"
            style={{ backgroundColor: getDotColor('deadline-dot') }}
          ></div>
        </div>
        <div
          className="rod progress"
          style={{ width: `${progress}%`, color: `var(${idea.color})` }}
        ></div>
        <div className="initial"></div>
      </div>
      <div className="button-timeline">
        <button
          className="button-next"
          onClick={updateProgress}
          value={-25}
          disabled={progress <= 0}
          style={{
            backgroundColor: `transparent`,
            border: `2px solid var(${idea.color})`,
            color: `var(${idea.color})`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = `var(${idea.color})`;
            e.target.style.color = `white`;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = `transparent`;
            e.target.style.color = `var(${idea.color})`;
          }}
        >
          Previous
        </button>
        <button
          className="button-next"
          onClick={updateProgress}
          value={25}
          disabled={progress >= 100}
          style={{
            backgroundColor: `transparent`,
            border: `2px solid var(${idea.color})`,
            color: `var(${idea.color})`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = `var(${idea.color})`;
            e.target.style.color = `white`;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = `transparent`;
            e.target.style.color = `var(${idea.color})`;
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IdeaExtendedStatus;
