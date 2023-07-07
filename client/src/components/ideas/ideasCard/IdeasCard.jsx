import React from "react";
import "./IdeasCard.css";

const IdeasCard = ({ idea }) => {
  return (
    <>
      <div>
        <p
          style={{ backgroundColor: `var(${idea.color})` }}
          className={"card_categories"}
        >
          {idea.categories[0]}
        </p>
      </div>
      <p className="card_title">{idea.title}</p>
      <div>
        <p className="card_city">{idea.city}</p>
      </div>
      <div className="card_state_background">
        <div>
          <p className="card_state">{idea.status}</p>
        </div>
        <p className="card_number_day_left">{`${idea.delay} days left`}</p>
      </div>
    </>
  );
};

export default IdeasCard;
