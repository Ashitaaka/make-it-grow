import React from 'react';
import { useState, useEffect } from 'react';
import './ideaextended.css';
import IdeaExtendedHeader from './ideaExtendedHeader/IdeaExtendedHeader';
import IdeaExtendedStatus from './ideaExtendedStatus/IdeaExtendedStatus';
import IdeaExtendedUsers from './ideaExtendedUsers/IdeaExtendedUsers';
import IdeaExtendedDetails from './ideaExtendedDetails/IdeaExtendedDetails';
import { getIdeaById } from '../../../services/httpServices';

const IdeaExtended = () => {
  const [idea, setIdea] = useState();

  useEffect(() => {
    getIdeaById(3).then((data) => setIdea(data));
  }, []);

  if (!idea) return null;
  return (
    <div className="idea-extended-container">
      <IdeaExtendedHeader idea={idea} />
      <IdeaExtendedStatus idea={idea} />
      <IdeaExtendedUsers users={idea.users} />
      <IdeaExtendedDetails idea={idea} users={idea.users} />
    </div>
  );
};

export default IdeaExtended;
