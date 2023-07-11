import React from "react";
import "./archiveModal.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import axios from "axios";

const ArchiveModal = ({ idea }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState(false);
  const [archiveForm, setArchiveForm] = useState({
    is_closed: 1,
    id_status: 8,
  });

  const archiveformSending = (e, id_idea) => {
    e.preventDefault();
    axios
      .put(`/ideas/${id_idea}`, archiveForm)
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
      <AiOutlineDelete
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
            <h3>Etes-vous sur de vouloir supprimer l'idée</h3>
            <p>"{idea.title}"</p>
          </div>
          <div className="archive_buttons">
            <button
              onClick={(e) => {
                archiveformSending(e, idea.idea_id);
                console.log(idea.idea_id);
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

export default ArchiveModal;
