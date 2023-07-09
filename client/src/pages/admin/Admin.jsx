import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TbZoomCheck } from "react-icons/tb";
import "./admin.css";

const Admin = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios
      .get("/ideas/?fields=id,title,status")
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  // const sortedIdeas =
  //   ideas && ideas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  const toCheckIdeas = ideas && ideas.filter((idea) => idea.id_status === 1);

  return (
    <div className="admin_page">
      <div className="admin_ideas_container">
        <div className="admin_ideas_moderation">
          <h1 className="moderation_title">Decisions a moderer</h1>
          <div className="moderation_lines">
            {toCheckIdeas &&
              toCheckIdeas.map((idea, index) => (
                <Link key={index} to={`/ideas/${idea.idea_id}`}>
                  <div className="moderation_line">
                    <TbZoomCheck className="moderation_icon" />
                    <div className="moderation_title">{idea.title}</div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
