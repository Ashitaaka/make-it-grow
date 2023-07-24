import React from "react";

//import components
import { BsFillPatchCheckFill, BsFillPatchPlusFill } from 'react-icons/bs'

//import CSS
import "./IdeasCard.css";
const IdeasCard = ({ idea }) => {

  //Get 1 day in milliseconds
  const one_day=1000*60*60*24;

  //calculate how many days left to the deadline
  const currentDate = new Date();
  const dayLeft =  Math.round((new Date(idea.deadline) - currentDate)/one_day);

  return (
    <>
      <div>
        {/*If the idea status is : "refused"*/}
        {idea.id_status === 7 
        ?<BsFillPatchPlusFill 
          className="accepted_icon" 
          size={30}
          style={{ color: `var(${idea.color})`, transform:"rotate(45deg)" }} 
        />
        : null}

        {/*If the idea status is : "accepted"*/}
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
        <p className="card_number_day_left">{`${dayLeft} jours restants`}</p>
      </div>
    </>
  );
};

export default IdeasCard;
