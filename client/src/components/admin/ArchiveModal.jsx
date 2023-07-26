import React from "react";
import "./archiveModal.css";
import { useState } from "react";
import { FcDeleteRow } from "react-icons/fc";
import { archiveIdea } from "../../services/httpServices";

const ArchiveModal = ({ idea }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [error, setError] = useState(false);
  const [archiveForm, setArchiveForm] = useState({
    is_closed: 1,
    id_status: 8,
  });

  const archiveformSending = (e, id_idea) => {
    e.preventDefault();

    archiveIdea(id_idea, archiveForm)
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
            <h3>Etes-vous sur de vouloir archiver l'idée</h3>
            <p>"{idea.title}"</p>
          </div>
          <div className="archive_buttons">
            <button
              onClick={(e) => {
                archiveformSending(e, idea.idea_id);
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
