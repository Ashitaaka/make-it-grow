import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArchiveModal from "../../components/admin/ArchiveModal";
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

  const toCheckIdeas = ideas && ideas.filter((idea) => idea.id_status === 1);
  const allOtherIDeas = ideas && ideas.filter((idea) => idea.id_status !== 1);
  const sortedOtherIdeas =
    allOtherIDeas &&
    allOtherIDeas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  return (
    <div className="admin_page">
      <div className="admin_ideas_container">
        <div className="admin_ideas_moderation">
          <h1 className="moderation_title">Decisions a moderer</h1>
          <div className="moderation_lines">
            {toCheckIdeas &&
              toCheckIdeas.map((idea, index) => (
                <div key={index} className="moderation_line">
                  <Link
                    to={`/idea/${idea.idea_id}`}
                    className="moderation_icon"
                  >
                    <TbZoomCheck />
                  </Link>
                  <div className="moderation_title">{idea.title}</div>
                  <ArchiveModal idea={idea} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
