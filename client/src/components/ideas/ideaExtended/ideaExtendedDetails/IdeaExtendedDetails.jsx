import { useEffect, useState } from "react";
import {modifyIdea } from "../../../../services/httpServices";
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
import ModifyButton from "./button/ModifyButton";
import ExpertButton from "./button/ExpertButton";
import VoteButton from "./button/VoteButton";
import PopUpModifIdea from "../../createIdea/pop-up/PopUpModifIdea";

const IdeaExtendedDetails = ({ idea, users, impactedUsers }) => {
  /* modification section idea */
  const [modificationAreOn, SetModificationAreOn] = useState(false);
  const [readyToSendV2, setReadyToSendV2] = useState(false);
  const [popUpActive, setPopUpActive] = useState(false);
  const [ideaImpact, setIdeaImpact] = useState(idea.impact);
  const [ideaDetail, setIdeaDetail] = useState(idea.detail);
  const [ideaBenefit, setIdeaBenefit] = useState(idea.benefit);
  const [idearisk, setIdeaRisk] = useState(idea.risk);
  const [userHasVoted, setUserHasVoted] = useState([]);

  const isUserExpert = (impactedUsers, idea, token) => {
    return impactedUsers.find(
      (expert) =>
        expert.user_id_categories.includes(idea.cat_id) &&
        token?.id === expert.user_id
    );
  };

  //Getting infos about connected user
  const { token } = tokenStorage();

  useEffect(()=>{
    axios.get(`/ideas/${idea.idea_id}/?fields=users`)
      .then((res) => setUserHasVoted(res.data.users))
      .catch((err)=> console.error(err))
  },[]);

  console.log(userHasVoted);

  useEffect(() => {
    if (readyToSendV2) {
      const ideaV2 = {
        detail: ideaDetail,
        benefit: ideaBenefit,
        impact: ideaImpact,
        risk: idearisk
      };
  
      const handleIdeaIsModify = async (ideaV2) => {
        try {
          const isSuccess = await modifyIdea(idea, ideaV2);
          if (isSuccess) {
            setPopUpActive(true);
            setReadyToSendV2(false);
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      handleIdeaIsModify(ideaV2);
    }
  }, [readyToSendV2]);

  /* end modification section idea */

  return (
    <div className="idea-details-container">
      {/*  Accordion section */}
      {popUpActive ? <PopUpModifIdea ideaId={idea.idea_id} /> : null}
      <AccordionDetail
        idea={idea}
        title={"Détails de l'idée"}
        modificationAreOn={modificationAreOn}
        readyToSendV2={readyToSendV2}
        ideaDetail={ideaDetail}
        setIdeaDetail={setIdeaDetail}
      />
      <AccordionImpact
        idea={idea}
        title={"Impact sur l'organisation"}
        modificationAreOn={modificationAreOn}
        ideaImpact={ideaImpact}
        setIdeaImpact={setIdeaImpact}
      />
      <AccordionBenefit
        idea={idea}
        title={"Bénéfices"}
        modificationAreOn={modificationAreOn}
        ideaBenefit={ideaBenefit}
        setIdeaBenefit={setIdeaBenefit}
      />
      <AccordionRisk
        idea={idea}
        title={"Risque"}
        modificationAreOn={modificationAreOn}
        idearisk={idearisk}
        setIdeaRisk={setIdeaRisk}
      />
      <AccordionComment
        idea={idea}
        title={"Commentaires"}
        users={users}
        token={token}
      />

      {/*  Wysiwyg comments section */}

      <div className="cta-button-container">
        {token && token.id_role === 2 && idea && idea.id_status === 1 ? (
          <ApproveOrDeclined idea={idea} />
        ) : null}

        {idea &&
        idea.id_status === 3 &&
        token &&
        token.id === idea.users[0].user_id ? (
          <ModifyButton
            idea={idea}
            SetModificationAreOn={SetModificationAreOn}
            modificationAreOn={modificationAreOn}
            setReadyToSendV2={setReadyToSendV2}
            setPopUpActive={setPopUpActive}
          />
        ) : null}

        {isUserExpert(impactedUsers, idea, token) &&
        idea &&
        idea.id_status === 4 ? (
          <ExpertButton idea={idea} />
        ) : null}

        {
          idea && idea.id_status === 5 && idea.users[0].user_id !== token.id && !userHasVoted.some(el => el.user_id == token.id) 
          ? <VoteButton idea={idea} userId={token.id} /> 
          : null
        }
      </div>
    </div>
  );
};

export default IdeaExtendedDetails;
