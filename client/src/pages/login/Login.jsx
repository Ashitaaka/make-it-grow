import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import Component
import { loginUser } from "../../services/httpServices";
// Import css
import "./login.css";
// Import assets
import mig_logo from "../../assets/logo_MIG.svg";
import gellule from "../../assets/icons/gellule.svg";
import useToken from "../../hooks/useToken";


const login = () => {

  const { token, setToken } = useToken();
  const [form, setForm] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState(false);


  const formChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const formSending = (e) => {
    e.preventDefault();

    loginUser(form)
      .then((res) => {
        setToken(res);
      })
      .catch((error) => {
        setFormError(true);
      });

    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  };


  return (
    <div className="login">
      <img className="gellule_small" src={gellule} alt="" />
      <img className="gellule_mid" src={gellule} alt="" />
      <img className="gellule_large" src={gellule} alt="" />

      <div className="left_container">
        <div className="login_container">
          <img className="logo" src={mig_logo} alt="Make It Grow" />

          <div className="login_register">
            <Link to="#">
              <p style={{ fontWeight: "600" }}>Login</p>
            </Link>
            <Link to="/register">
              <p>Créer un nouveau compte</p>
            </Link>
          </div>

          <form
            className="login_form"
            action=""
            onSubmit={formSending}
            onChange={formChanges}
          >
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            {formError ? (
              <p className="login_error">Email ou mot de passe invalide</p>
            ) : null}
            <Link to="#">
              <p className="forgotten_password">Mot de passe oublié</p>
            </Link>
            <button type="submit">Connectez-vous</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
