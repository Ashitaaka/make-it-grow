import React, { useRef, useState } from "react";
import './changeProfilPicture.css';
import { importNewPicture } from "../../services/httpServices";


const ChangeProfilPicture = ({ userid, isProfilModal, setIsProfilModal, setPicURL }) => {
    
    //Create a ref to the input field
    const myNewPicture = useRef(null);
    const formData = new FormData();

    //Uploading the picture and updating the user picture in DB
    const onChangePicture = (e) => {
        e.preventDefault();
    
        formData.append("profil-picture", myNewPicture.current.files[0]);

        importNewPicture(formData, userid);

        setIsProfilModal(!isProfilModal);

        setTimeout(()=>{
            setPicURL(`/api/public/profil-pictures/${myNewPicture.current.files[0].name}`);
        }, 1000)
        
    }

  return (
    <div className={isProfilModal ? "profil_picture_modal_bg visible" : "profil_picture_modal_bg"}>
        <div className= "profil_picture_modal">
            <h3>Modifier la photo de profil</h3>
            <hr />
            <form encType="multipart/form-data" onSubmit={onChangePicture}>
                <label htmlFor="profil-picture">
                    <p className="import_picture_btn">Importer une photo</p>
                </label>
                <input hidden={true} type="file" id="profil-picture" name="profil-picture" ref={myNewPicture}/>
                <div className="profil_picture_buttons">
                    <button type="submit" className="import_validation_btn">valider</button>
                    <button 
                        type="button" 
                        className="import_cancel_btn" 
                        onClick={() => {
                        setIsProfilModal(!isProfilModal);
                        myNewPicture.current.value = null;
                        }}
                    >
                            Annuler
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ChangeProfilPicture