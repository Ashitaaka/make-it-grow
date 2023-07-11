import React from "react";
import "./notAuthorized.css";
import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="not_authorized_content">
      <div className="not_autorized_message">
        <h3>Vous n'êtes pas autorisé</h3>
        <Link to="/dashboard">
          <button>OK</button>
        </Link>
      </div>
    </div>
  );
};

export default NotAuthorized;
