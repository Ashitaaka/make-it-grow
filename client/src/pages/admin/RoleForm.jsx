import React from "react";
import { BiSolidPencil } from "react-icons/bi";
import { FcCancel, FcCheckmark } from "react-icons/fc";
import { userRoleSwitch } from "../../services/httpServices";

import { useState } from "react";

import "./roleform.css";

const RoleForm = ({ currentRole, allRoles, user_id }) => {
  const initRole = allRoles.find(({ role }) => role === currentRole);

  const [isModifying, setIsModifying] = useState(false);
  const [sendFormRole, setsendFormRole] = useState(initRole);

  const handleModifyUser = (value) => {
    setIsModifying(value);
    setsendFormRole(initRole);
  };

  const handleRoleChange = (e) => {
    const foundRole = allRoles.find(
      ({ role_id }) => role_id === Number(e.target.value)
    );

    setsendFormRole({
      role: foundRole.role,
      role_id: foundRole.role_id,
    });
  };

  const handleSendForm = () => {
    sendFormRole &&
      userRoleSwitch(user_id, { id_role: sendFormRole.role_id })
        .then((res) => console.log("Supression OK", res))
        .catch((err) => {
          setError(true);
        });

    setIsModifying(false);
  };

  return (
    <div className="role_form">
      {!isModifying ? (
        <p className="moderation_text">{sendFormRole.role}</p>
      ) : (
        <form
          action=""
          className="modify_form_icons"
          onChange={handleRoleChange}
        >
          <select>
            <option disabled selected value>
              -- select a role --
            </option>
            {allRoles &&
              allRoles.map((role) => (
                <option
                  className="moderation_text"
                  key={role.role_id}
                  value={role.role_id}
                >
                  {role.role}
                </option>
              ))}
          </select>
          <FcCheckmark
            size={24}
            className="modify_form_icon"
            type="submit"
            onClick={handleSendForm}
          />
          <FcCancel
            size={24}
            className="modify_form_icon"
            type="button"
            onClick={() => handleModifyUser(false)}
          />
        </form>
      )}

      <BiSolidPencil
        size={40}
        className="role_modify_icon"
        onClick={() => handleModifyUser(true)}
      />
    </div>
  );
};

export default RoleForm;
