import React from "react";
import "./IdeasCard.css";
import { BsFillPatchCheckFill, BsFillPatchPlusFill } from 'react-icons/bs'

const IdeasCard = ({ idea }) => {
  return (
    <>
      <div>
        {idea.id_status === 7 
        ?<BsFillPatchPlusFill 
          className="accepted_icon" 
          size={30}
          style={{ color: `var(${idea.color})`, transform:"rotate(45deg)" }} 
        />
        : null}
        {idea.id_status === 6 
        ?<BsFillPatchCheckFill 
          className="accepted_icon" 
          size={30}
          style={{ color: `var(${idea.color})` }} 
        />
        : null}
        <p
          style={{ backgroundColor: `var(${idea.color})` }}
          className="card_categories"
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
