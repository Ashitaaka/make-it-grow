import React from 'react';
import './ideaextended.css';
import IdeaExtendedHeader from './ideaExtendedHeader/IdeaExtendedHeader';
import IdeaExtendedStatus from './ideaExtendedStatus/IdeaExtendedStatus';
import IdeaExtendedUsers from './ideaExtendedUsers/IdeaExtendedUsers';
import IdeaExtendedDetails from './ideaExtendedDetails/IdeaExtendedDetails';

const IdeaExtended = () => {
  return (
    <div className="idea-extended-container">
      <IdeaExtendedHeader />
      <IdeaExtendedStatus />
      <IdeaExtendedUsers />
      <IdeaExtendedDetails />
    </div>
  );
};

export default IdeaExtended;
