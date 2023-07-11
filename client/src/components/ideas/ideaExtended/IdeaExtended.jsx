import React from "react";
import { useState, useEffect } from "react";
import "./ideaextended.css";
import IdeaExtendedHeader from "./ideaExtendedHeader/IdeaExtendedHeader";
import IdeaExtendedStatus from "./ideaExtendedStatus/IdeaExtendedStatus";
import IdeaExtendedUsers from "./ideaExtendedUsers/IdeaExtendedUsers";
import IdeaExtendedDetails from "./ideaExtendedDetails/IdeaExtendedDetails";
import { getIdeaById } from "../../../services/httpServices";
import { useParams } from "react-router-dom";
import axios from "axios";

const IdeaExtended = () => {
  const [idea, setIdea] = useState(null);
  const [users, setusers] = useState([]);
  
  const { id } = useParams(); // Destructure the `id` property from useParams()
  
  useEffect(() => {
    id && getIdeaById(parseInt(id)).then((data) => setIdea(data));
  }, [id]); // Add `id` to the dependency array to trigger the effect when it changes
  
  useEffect(() => {
    idea
    ? axios
    .get(`/users/city/${idea.city}/?fields=users`)
    .then((res) => res.data)
    .then((data) => setusers(...[data]))
    : null;
  }, [idea]);
  if (!idea) return null;
  
  return (
    <div className="idea-extended-container">
      <IdeaExtendedHeader idea={idea} />
      <IdeaExtendedStatus idea={idea} />
      <IdeaExtendedUsers users={idea.users} impactedUsers={users} />
      <IdeaExtendedDetails idea={idea} users={users} />
    </div>
  );
};

export default IdeaExtended;
