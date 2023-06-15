import React from 'react';
import { useState, useEffect } from 'react';
import './ideaextended.css';
import IdeaExtendedHeader from './ideaExtendedHeader/IdeaExtendedHeader';
import IdeaExtendedStatus from './ideaExtendedStatus/IdeaExtendedStatus';
import IdeaExtendedUsers from './ideaExtendedUsers/IdeaExtendedUsers';
import IdeaExtendedDetails from './ideaExtendedDetails/IdeaExtendedDetails';
import { getIdeadById } from '../../../services/httpServices';

const IdeaExtended = () => {
  const [idea, setIdea] = useState();

  useEffect(() => {
    getIdeadById(1).then((data) => setIdea(data));
  }, []);

  if (!idea) return null;
  return (
    <div className="idea-extended-container">
      <IdeaExtendedHeader idea={idea} />
    </div>
  );
};

export default IdeaExtended;
