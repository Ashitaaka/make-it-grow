import React from "react";
import { Link } from "react-router-dom";
import "./popUp.css";

const PopUpModifIdea = ({ideaId}) => {


  return (
    <div className="thanks_pop_up_section">
      <div className="pop_up_content_container">
        <div className="pop_up_title_section">
          <p className="title_pop_up">Merci pour votre participation !</p>
          <div className="square_bckg"></div>
        </div>

        <p className="text_explenation_pop_up">
          Un adminstrateur va validé votre idée, puis nous pourrons passer au vote ! Yaou
        </p>
        <Link to={"/"} className="go_home_button">
          <button>Retour à l'idéé</button>
        </Link>
      </div>
    </div>
  );
};

export default PopUpModifIdea;
