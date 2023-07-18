import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import genericPicture from "../../assets/icons/genericPicture_2.jpg";
import "./profiledetails.css";
import camera from "../../assets/icons/camera.svg"
import ChangeProfilPicture from "./ChangeProfilPicture";

const ProfileDetails = () => {
  const { userid } = useParams();
  const [user, setUser] = useState({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [locations, setLocations] = useState([]);
  const [updateForm, setUpdateForm] = useState({});
  const [picURL, setPicURL] = useState("")

  //Is Profil picture Modal visible?
  const [isProfilModal, setIsProfilModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `/users/${userid}/?fields=id,firstname,lastname,picture,service,occupation,locations,email`
      )
      .then((res) => res.data)
      .then(([data]) => {
        setUser(data);
        setPicURL(data.picture)
        setIsDataLoaded(true);
        setUpdateForm({
          firstname: data.firstname,
          lastname: data.lastname,
          service: data.service,
          occupation: data.occupation,
        });
      });
  }, []);

  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`/locations`)
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
      .put(`/users/${userid}`, updateForm)
      .then((res) => {
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };


  return !isDataLoaded ? null : (
    <div className="profile_page">
      
      {/* Modal to upload new profil picture */}
      <ChangeProfilPicture 
        userid={userid}
        isProfilModal={isProfilModal}
        setIsProfilModal={setIsProfilModal} 
        setPicURL={setPicURL}
      /> 

      {/* All user infos */}
      <div className="profile_container">
        <div className="profile_head">
          <div className="profil_pic">
            <img src={picURL ? picURL : '../../src/assets/icons/genericPicture_2.jpg'} alt="photo de profil" />
            <div className="overlay" onClick={() => setIsProfilModal(!isProfilModal)}>
              <img src={camera} alt="" />
            </div>
          </div>

          <div className="profile_infos">
            <div className="profile_name">
              <h1>
                {user.firstname} {user.lastname}
              </h1>
              <p className="occupation">{user.occupation ? user.occupation : 'Travaille chez Makesense'}</p>
            </div>
          </div>
        </div>

        <div className="profile_content">
          <div className="profile_details">
            <p className="profil_labels">Email:</p>
            <p>{user.email}</p>
            <br />
            <p className="profil_labels">Ville:</p>
            <p>{user.city}</p>
            <br />
            <p className="profil_labels">Pays:</p>
            <p>{user.country}</p>
          </div>
        </div>
      </div>

      {/* Form to update user infos */}
      <div className="update_profile">
        <h2>Modifiez vos informations</h2>
        
        <form className="update_form" action="" onSubmit={updateformSending}>
          <div className="update_content">
            <div>
              <label htmlFor="firstname"> Prenom : </label>
              <input
                onChange={updateformChanges}
                value={updateForm.firstname}
                type="text"
                name="firstname"
                id="firstname"
                required
              />
            </div>
            <div>
              <label htmlFor="lastname"> NOM : </label>
              <input
                onChange={updateformChanges}
                value={updateForm.lastname}
                type="text"
                name="lastname"
                id="lastname"
                required
              />
            </div>
            <div>
              <label htmlFor="service"> Service : </label>
              <input
                onChange={updateformChanges}
                value={updateForm.service}
                type="text"
                name="service"
                id="service"
              />
            </div>
            <div>
              <label htmlFor="occupation"> Fonction : </label>
              <input
                onChange={updateformChanges}
                value={updateForm.occupation}
                type="text"
                name="occupation"
                id="occupation"
              />
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
