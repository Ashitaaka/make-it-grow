import React from "react";
import { useState, useEffect } from "react";
import "./ideaextended.css";
import IdeaExtendedHeader from "./ideaExtendedHeader/IdeaExtendedHeader";
import IdeaExtendedStatus from "./ideaExtendedStatus/IdeaExtendedStatus";
import IdeaExtendedUsers from "./ideaExtendedUsers/IdeaExtendedUsers";
import IdeaExtendedDetails from "./ideaExtendedDetails/IdeaExtendedDetails";
import { getIdeaById, getUsersByCity } from "../../../services/httpServices";
import { useParams } from "react-router-dom";

const IdeaExtended = () => {
  const [idea, setIdea] = useState(null);
  const [users, setusers] = useState([]);

  const { id } = useParams(); // Destructure the `id` property from useParams()

  useEffect(() => {
    id && getIdeaById(parseInt(id)).then((data) => setIdea(data));
  }, [id]); // Add `id` to the dependency array to trigger the effect when it changes

  //Getting current date
  const currentDate = new Date();
  // Add 7 days to current date
  const deadline = new Date(
    currentDate.setMinutes(currentDate.getMinutes() + 2)
  );

  useEffect(() => {
    idea &&
      getUsersByCity(idea.city)
        .then((res) => res.data)
        .then((data) => setusers(...[data]));
  }, [idea]);
  if (!idea) return null;

  return (
    <div className="idea-extended-container">
      {idea.id_status === 6 ? (
        <div
          className="idea_extended_flag"
          style={{ backgroundColor: `var(${idea.color})` }}
        >
          Idée acceptée
        </div>
      ) : null}

      {idea.id_status === 7 ? (
        <div
          className="idea_extended_flag"
          style={{ backgroundColor: `var(${idea.color})` }}
        >
          Idée refusée
        </div>
      ) : null}

      <IdeaExtendedHeader idea={idea} />
      <IdeaExtendedStatus idea={idea} />
      <IdeaExtendedUsers users={idea.users} impactedUsers={users} idea={idea} />
      <IdeaExtendedDetails idea={idea} users={users} impactedUsers={users} />
    </div>
  );
};

export default IdeaExtended;
