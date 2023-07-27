import React from "react";
import { Link } from "react-router-dom";

//import css
import "./popUp.css";

const PopUp = () => {
  return (
    <div className="thanks_pop_up_section">
      <div className="pop_up_content_container">
        <div className="pop_up_title_section">
          <p className="title_pop_up">Merci pour votre participation !</p>
          <div className="square_bckg"></div>
        </div>

        <p className="text_explenation_pop_up">
          Un adminstrateur va validé votre idée, puis les personnes impactés
          pourront échanger avec vous pour consolider votre idée ! Youpi !
        </p>
        <Link to={"/"} className="go_home_button">
          <button>Retour à la Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PopUp;
