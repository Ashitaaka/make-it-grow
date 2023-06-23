import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import IdeasCard from './IdeasCard';

import './IdeasCard.css';
import { Link } from 'react-router-dom';

const IdeasCardsBackground = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5080/api/ideas/?fields=id,title,locations,status,categories,users`
      )
      .then((res) => res.data)
      .then((data) => setIdeas(data));
  }, []);

  return (
    <div className="ideas_cards_background">
      {ideas.map((idea, index) => (
        <Link to={`/idea/${idea.id}`} className="card_background">
          <IdeasCard idea={idea} key={index} />
        </Link>
      ))}
    </div>
  );
};

export default IdeasCardsBackground;
