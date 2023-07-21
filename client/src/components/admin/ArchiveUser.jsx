import React from "react";
import "./archiveModal.css";
import { FcDeleteRow } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";
import { deleteUser } from "../../services/httpServices";

const ArchiveUser = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState(false);

  const archiveformSending = (e, user_id) => {
    e.preventDefault();
    deleteUser(user_id)
      .then((res) => console.log("Supression OK", res))
      .catch((err) => {
        setError(true);
      });
  };

  const handleArchiveModal = () => setIsModalVisible(!isModalVisible);

  return (
    <div>
      <FcDeleteRow
        size={24}
        className="moderation_delete_icon"
        onClick={handleArchiveModal}
      />
      <div
        className={
          isModalVisible
            ? "validation_modal_section"
            : "validation_modal_section invisible"
        }
      >
        <div className="archive_modal_content">
          <div className="confirmationMessage">
            <h3>Etes-vous sur de vouloir supprimer l'utilisateur</h3>
            <p>
              "{user.firstname} {user.lastname}"
            </p>
          </div>
          <div className="archive_buttons">
            <button
              onClick={(e) => {
                console.log("OUI");
                archiveformSending(e, user.user_id);
                handleArchiveModal();
                window.location.reload(false);
              }}
            >
              Confirmer
            </button>
            <button onClick={handleArchiveModal}>Annuler</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveUser;
