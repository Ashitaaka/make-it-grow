import React from 'react';
import IdeaExtended from '../components/ideas/ideaExtended/ideaExtended';
import IdeasCardsBackground from '../components/ideas/ideasCard/IdeasCardsBackground';
import './home.css';

const Home = () => {
  return (
    <div className="home_background">
      <IdeasCardsBackground />
      <IdeaExtended />
    </div>
  );
};

export default Home;
