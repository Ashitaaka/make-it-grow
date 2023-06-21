import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./profiledetails.css";

const ProfileDetails = () => {
  const [updateForm, setUpdateForm] = useState({
    firstname: "",
    lastname: "",
    service: "",
    occupation: "",
    id_location: "",
  });

  const { userid } = useParams();
  const [user, setUser] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5080/api/users/${userid}/?fields=id,firstname,lastname,picture,service,occupation,locations,email`
      )
      .then((res) => res.data)
      .then((data) => {
        setUser(...data);
        setIsDataLoaded(true);
      });
  }, []);

  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5080/api/locations`)
      .then((res) => res.data)
      .then((data) => {
        setLocations(data);
      });
  }, []);

  const updateformChanges = (e) => {
    setUpdateForm({ ...updateForm, [e.target.name]: e.target.value });
  };

  const updateformSending = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5080/api/users/${userid}/update`, updateForm)
      .then((res) => {
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  return !isDataLoaded ? null : (
    <div className="profile_page">
      <div className="profile_container">
        <div className="profile_head">
          <img src={user.picture} alt="" />
          <div className="profile_infos">
            <div className="profile_name">
              <h1>
                {user.firstname} {user.lastname}
              </h1>
              <p className="occupation">{user.occupation}</p>
            </div>
            <button className="button_profil">Modifier le profil</button>
          </div>
        </div>
        <div className="profile_content">
          <div className="profile_details">
            <p>Email:</p>
            <p>{user.email}</p>
            <br />
            <p>Ville:</p>
            <p>{user.city}</p>
            <br />
            <p>Pays:</p>
            <p>{user.country}</p>
          </div>
        </div>
      </div>

      <div className="update_profile">
        <h2>Modifiez vos informations</h2>
        <form
          className="update_form"
          action=""
          onSubmit={updateformSending}
          onChange={updateformChanges}
        >
          <div className="update_content">
            <div>
              <label htmlFor="firstname"> Prenom : </label>
              <input
                defaultValue={user.firstname}
                type="text"
                name="firstname"
                id="firstname"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname"> NOM : </label>
              <input
                defaultValue={user.lastname}
                type="text"
                name="lastname"
                id="lastname"
                required
              />
            </div>
            <div>
              <label htmlFor="service"> Service : </label>
              <input
                defaultValue={user.service}
                type="text"
                name="service"
                id="service"
              />
            </div>
            <div>
              <label htmlFor="occupation"> Fonction : </label>
              <input
                defaultValue={user.occupation}
                type="text"
                name="occupation"
                id="occupation"
              />
            </div>
            <div>
              <label htmlFor="id_location">Sélectionnez un lieu:</label>
              <select name="id_location" id="id_location" defaultValue="">
                <option value="" disabled hidden>
                  {`${user.country} - ${user.city}`}
                </option>
                {locations &&
                  locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.country} - {location.city}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <button id="update_button" type="submit">
            Confirmez les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileDetails;
