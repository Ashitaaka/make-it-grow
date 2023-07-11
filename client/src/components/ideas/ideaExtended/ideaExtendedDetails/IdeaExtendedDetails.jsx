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

const IdeaExtendedDetails = ({ idea, users }) => {
  const { removeToken, setToken, token } = tokenStorage();

  const owner = users.find((user) => user.is_owner);
  const [expandedSections, setExpandedSections] = useState({
    details: true,
    impact: false,
    benefits: false,
    risks: false,
    comments: false,
  });

  const toggleContent = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

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
      <AccordionComment idea={idea} title={"Commentaires"} users={users} />

      {/*  Wysiwyg comments section */}

      <div className="cta-button-container">
        <button
          className="cta-button"
          style={{
            backgroundColor: `transparent`,
            border: `2px solid var(${idea.color})`,
            color: `var(${idea.color})`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = `var(${idea.color})`;
            e.target.style.color = `white`;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = `transparent`;
            e.target.style.color = `var(${idea.color})`;
          }}
        >
          Voter
        </button>
        <button
          className="cta-button"
          style={{
            backgroundColor: `transparent`,
            border: `2px solid var(${idea.color})`,
            color: `var(${idea.color})`,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = `var(${idea.color})`;
            e.target.style.color = `white`;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = `transparent`;
            e.target.style.color = `var(${idea.color})`;
          }}
        >
          Donner mon avis
        </button>
        {token && token.id_role === 2 && idea && idea.id_status === 1 ? (
          <button
            className="cta-button"
            style={{
              backgroundColor: `transparent`,
              border: `2px solid var(${idea.color})`,
              color: `var(${idea.color})`,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = `var(${idea.color})`;
              e.target.style.color = `white`;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = `transparent`;
              e.target.style.color = `var(${idea.color})`;
            }}
            onClick={() => {
              handleUpdateIdeaStatus();
              window.location.reload(false);
            }}
          >
            Approuver
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default IdeaExtendedDetails;
