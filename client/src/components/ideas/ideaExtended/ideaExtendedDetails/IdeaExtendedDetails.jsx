import { useState } from "react";
import Monochev from "../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../assets/icons/mono_chevrons_icone_blanc.svg";
import tokenStorage from "../../../../hooks/useToken";
import "./ideaextendeddetails.css";
import AccordionDetail from "./accordion/AccordionDetail";
import AccordionBenefit from "./accordion/AccordionBenefit";
import AccordionImpact from "./accordion/AccordionImpact";
import AccordionRisk from "./accordion/AccordionRisk";
import AccordionComment from "./accordion/AccordionComment";
import axios from "axios";
import ApproveOrDeclined from "./button/ApproveOrDeclined";

const IdeaExtendedDetails = ({ idea, users }) => {
  const {removeToken , setToken, token}= tokenStorage()

  const handleUpdateIdeaStatus = () => {
    axios.put(`ideas/${idea.idea_id}`, { id_status: 2 });
  };

  return (
    <div className="idea-details-container">
      {/*  Accordion section */}
      <AccordionDetail idea={idea} title={"Détails de l'idée"} />
      <AccordionImpact idea={idea} title={"Impact sur l'organisation"} />
      <AccordionBenefit idea={idea} title={"Bénéfices"} />
      <AccordionRisk idea={idea} title={"Risque"} />
      <AccordionComment idea={idea} title={"Commentaires"} users={users} token={token} />

      {/*  Wysiwyg comments section */}

      <div className="cta-button-container">

        {token && token.id_role === 2 && idea && idea.id_status === 1 ? (
          <ApproveOrDeclined idea={idea}/>
        ) : null}
      </div>
    </div>
  );
};

export default IdeaExtendedDetails;
