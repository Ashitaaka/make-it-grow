import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArchiveModal from "../../components/admin/ArchiveModal";
import genericPicture from "../../assets/icons/genericPicture_2.jpg";
import { PiMagnifyingGlassBold } from "react-icons/pi";

import "./admin.css";
import RoleForm from "./RoleForm";
import ArchiveUser from "../../components/admin/ArchiveUser";

const Admin = () => {
  const [ideas, setIdeas] = useState([]);
  const [users, setUsers] = useState([]);
  const [newCategory, setNewCategory] = useState({});
  const [newLocation, setNewLocation] = useState({});
  // const [isModifying, setIsModifying] = useState(false);

  const [activeTab, setActiveTab] = useState("ideas");

  useEffect(() => {
    axios
      .get("/ideas/?fields=id,title,status")
      .then((res) => res.data)
      .then(setIdeas);
  }, []);

  useEffect(() => {
    axios
      .get("/users/?fields=users,role")
      .then((res) => res.data)
      .then(setUsers);
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

  const sortedAllIdeas =
    ideas && ideas.sort((a, b) => (a.id_status > b.id_status ? 1 : -1));

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const selectIdeasStatusClass = (idea_status) => {
    switch (idea_status) {
      case 1:
        return "admin_idea_status moderation_color";
      case 2:
        return "admin_idea_status debat_color";
      case 3:
        return "admin_idea_status synthese_color";
      case 4:
        return "admin_idea_status expertise_color";
      case 5:
        return "admin_idea_status vote_color";
      case 6:
        return "admin_idea_status accepted_color";
      case 7:
        return "admin_idea_status refused_color";
      case 8:
        return "admin_idea_status rejected_color";
      default:
        return "admin_idea_status";
    }
  };

  const handleNewCategory = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewCategory({ [key]: value, color: "--primary-color" });
  };
  const handleNewCountry = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setNewLocation({ ...newLocation, [key]: value });
  };

  const handleNewCity = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewLocation({ ...newLocation, [key]: value });
  };

  const handleSendNewParam = (e, param) => {
    e.preventDefault();
    param &&
      axios.post(
        `/${param}`,
        param === "categories" ? newCategory : newLocation
      );
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
        <div
          className={`admin_tab ${activeTab === "params" ? "active" : ""}`}
          onClick={() => handleTabChange("params")}
        >
          Catégories et lieux
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
              {sortedAllIdeas &&
                sortedAllIdeas.map((idea, index) => (
                  <div key={index} className="moderation_line">
                    <div className="line_content">
                      <Link
                        to={`/idea/${idea.idea_id}`}
                        className="moderation_icon"
                      >
                        <PiMagnifyingGlassBold />
                      </Link>
                      <div className={selectIdeasStatusClass(idea.id_status)}>
                        {idea.status}
                      </div>
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
                    <RoleForm
                      currentRole={user.role}
                      allRoles={allRoles}
                      user_id={user.user_id}
                    />
                    <ArchiveUser user={user} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "params" && (
        <div className="admin_params_management">
          <h2>Ajouter une categorie :</h2>
          <form onChange={handleNewCategory}>
            <label htmlFor="label">Nouvelle catégorie :</label>
            <input type="text" id="label" name="label" />
            {
              <input
                type="submit"
                value={"Submit"}
                onClick={(e) => handleSendNewParam(e, "categories")}
              />
            }
          </form>
          <form onChange={handleNewCountry}>
            <label htmlFor="label">Nouveau pays :</label>
            <input type="text" id="country" name="country" />
          </form>
          <form onChange={handleNewCity}>
            <label htmlFor="label">Nouvelle ville :</label>
            <input type="text" id="city" name="city" />
          </form>
          {
            <input
              type="submit"
              value={"Submit"}
              onClick={(e) => handleSendNewParam(e, "locations")}
            />
          }
        </div>
      )}
    </div>
  );
};

export default Admin;
