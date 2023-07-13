import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArchiveModal from "../../components/admin/ArchiveModal";
import genericPicture from "../../assets/icons/genericPicture_2.jpg";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import "./admin.css";
import RoleForm from "./RoleForm";

const Admin = () => {
  const [ideas, setIdeas] = useState([]);
  const [users, setUsers] = useState([]);

  const [activeTab, setActiveTab] = useState("ideas");

  useEffect(() => {
    axios
      .get("/ideas/?fields=id,title,status")
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  useEffect(() => {
    axios
      .get("/users/?fields=users,role")
      .then((res) => res.data)
      .then((data) => setUsers(...[data]));
  }, []);

  const allUsers = users.reduce((acc, user) => {
    const users = acc;

    if (!users.some(({ user_id }) => user_id === user.user_id)) {
      users.push(user);
    }
    return users;
  }, []);

  const allRoles = users.reduce((acc, user) => {
    const roles = acc;

    if (!roles.some(({ role_id }) => role_id === user.role_id)) {
      roles.push({
        role_id: user.role_id,
        role: user.role,
      });
    }
    return roles;
  }, []);

  const toCheckIdeas = ideas && ideas.filter((idea) => idea.id_status === 1);

  const inProgressIDeas =
    ideas &&
    ideas.filter((idea) => idea.id_status !== 1 && idea.is_closed !== 1);

  const sortedinProgressIDeas =
    inProgressIDeas &&
    inProgressIDeas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="admin_page">
      <div className="admin_tabs">
        <div
          className={`admin_tab ${activeTab === "ideas" ? "active" : ""}`}
          onClick={() => handleTabChange("ideas")}
        >
          Gestion des idées
        </div>
        <div
          className={`admin_tab ${activeTab === "users" ? "active" : ""}`}
          onClick={() => handleTabChange("users")}
        >
          Gestion des utilisateurs
        </div>
      </div>

      {activeTab === "ideas" && (
        <div className="ideas_tab">
          <div className="admin_ideas_moderation">
            <h1 className="moderation_title">Decisions a moderer</h1>
            <div className="moderation_lines">
              {toCheckIdeas &&
                toCheckIdeas.map((idea, index) => (
                  <div key={index} className="moderation_line">
                    <div className="line_content">
                      <Link
                        to={`/idea/${idea.idea_id}`}
                        className="moderation_icon"
                      >
                        <PiMagnifyingGlassBold />
                      </Link>
                      <div className="moderation_title">{idea.title}</div>
                    </div>
                    <ArchiveModal idea={idea} />
                  </div>
                ))}
            </div>
          </div>
          <div className="admin_ideas_all_other">
            <h1 className="moderation_title">Toutes les decision</h1>
            <div className="moderation_lines">
              {ideas &&
                ideas.map((idea, index) => (
                  <div key={index} className="moderation_line">
                    <div className="line_content">
                      <Link
                        to={`/idea/${idea.idea_id}`}
                        className="moderation_icon"
                      >
                        <PiMagnifyingGlassBold />
                      </Link>
                      <div>{idea.title}</div>
                    </div>

                    <ArchiveModal idea={idea} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "users" && (
        <div className="users_tab">
          <div className="admin_users_management">
            <h1 className="users_title">Gestion des utilisateurs</h1>
            <div className="users_lines">
              {allUsers &&
                allUsers.map((user) => (
                  <div key={user.user_id} className="user_line">
                    <div className="line_content">
                      <img src={user.picture ? user.picture : genericPicture} />
                      <p>{user.firstname}</p>
                      <p>{user.lastname}</p>
                    </div>
                    <RoleForm currentRole={user.role} allRoles={allRoles} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
