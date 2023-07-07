import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./admin.css";

const Admin = () => {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios
      .get("/ideas/?fields=id,title,status")
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  const sortedIdeas =
    ideas && ideas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  return (
    <div className="admin_page">
      <div className="admin_ideas_container">
        <div className="admin_ideas_head">
          <div className="admin_head_title">Titre</div>
          <div className="admin_head_status">Status</div>
        </div>
        {sortedIdeas &&
          sortedIdeas.map((idea, index) => (
            <div key={index} className="admin_ideas_content">
              <div className="admin_ideas_title">{idea.title}</div>
              <div className="admin_ideas_status">{idea.status}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
