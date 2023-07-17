import React from "react";
import "./archiveModal.css";
import { FcDeleteRow } from "react-icons/fc";
import { useState } from "react";
import axios from "axios";

const ArchiveUser = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState(false);

  const archiveformSending = (e, user_id) => {
    e.preventDefault();
    axios
      .delete(`/users/${user_id}`)
      .then((res) => {
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const handleArchiveModal = () => setIsModalVisible(!isModalVisible);

  return (
    <div>
      <FcDeleteRow
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
                archiveformSending(e, user.user_id);
                handleArchiveModal;
                // window.location.reload(false);
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
