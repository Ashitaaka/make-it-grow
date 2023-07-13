import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FcCancel, FcCheckmark } from "react-icons/fc";

import { useState, useEffect } from "react";

import "./roleform.css";

const RoleForm = ({ currentRole, allRoles }) => {
  const [isModifying, setIsModifying] = useState(false);

  const handleModifyUser = (value) => {
    setIsModifying(value);
  };

  return (
    <div className="role_form">
      {!isModifying ? (
        <p>{currentRole}</p>
      ) : (
        <form action="" className="modify_form_icons">
          <select defaultValue={currentRole}>
            {allRoles &&
              allRoles.map((role) => (
                <option value={role.role_id}>{role.role}</option>
              ))}
          </select>
          <FcCheckmark
            className="modify_form_icon"
            type="submit"
            onClick={() => handleModifyUser(false)}
          />
          <FcCancel
            className="modify_form_icon"
            type="button"
            onClick={() => handleModifyUser(false)}
          />
        </form>
      )}

      <BiSolidPencil
        className="role_modify_icon"
        onClick={() => handleModifyUser(true)}
      />
    </div>
  );
};

export default RoleForm;
