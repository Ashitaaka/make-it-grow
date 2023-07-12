import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import IdeasCard from "./IdeasCard";

import "./IdeasCard.css";
import { Link } from "react-router-dom";

const IdeasCardsBackground = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios
      .get(`/ideas/?fields=id,title,locations,status,categories,users`)
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  return (
    <div className="ideas_cards_background">
      {ideas &&
        ideas.map((idea, index) => (
          idea.id_status !== 8 && ( 
            <Link
              to={`/idea/${idea.idea_id}`}
              className="card_background"
              key={index}
            >
              <IdeasCard idea={idea} />
            </Link>
          )
        ))}
    </div>
  );
};

export default IdeasCardsBackground;
