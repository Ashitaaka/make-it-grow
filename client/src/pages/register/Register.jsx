import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
// Import css
import './register.css'
//import assets
import mig_logo from '../../assets/logo_MIG.svg'
import gellule from '../../assets/icons/gellule.svg'

const Register = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email : "",
        password: "",
        id_location : ""
    });
    const [formError, setFormError] = useState();
    const [locations, setLocations] = useState([])
    const [isLocationsLoaded, setIsLocationsLoaded] = useState(false)

    // console.log(form);

    useEffect(()=>{
        axios.get('http://localhost:5080/api/locations')
            .then((res) => {
                setLocations(res.data)
                setIsLocationsLoaded(true);
            })
    },[])

    const formChanges = (e) =>{
        // console.log(e.target.name);
        setForm({ ...form, [e.target.name] : e.target.value })
    };

    const formSending = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:5080/api/users/register', form)
            .then((res) => {
                // console.log(res.data);
            })
            .catch((error) => {
                setFormError(error.response.data);
            });
            
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        };

  return (
    <div className='register'>
        <img className="gellule_small" src={gellule} alt="" />
        <img className="gellule_mid" src={gellule} alt="" />
        <img className="gellule_large" src={gellule} alt="" />

       <div className="left_container">
           <div className="register_container">
                <img className="logo" src={mig_logo} alt="Make It Grow" />

                <div className="login_register">
                    <Link to="/login"><p>Login</p></Link>
                    <Link to="#"><p style={{fontWeight:'600'}}>Créer un nouveau compte</p></Link>
                </div>

                <form className="register_form" action="" onSubmit={formSending} onChange={formChanges}>
                    <div className="fullname">
                        <input type="text" id="firstname" name="firstname" placeholder="Prénom" required/>
                        <input type="text" id="lastname" name="lastname" placeholder="Nom" required/>
                    </div>
                    <input type="text" id="email" name="email" placeholder="Email" required/>
                    <input type="text" id="password" name="password" placeholder="Password" required/>
                    <select  name="id_location" id="id_location" defaultValue="" required>
                        <option value="" disabled hidden>
                            Sélectionnez un lieu
                        </option>
                        {isLocationsLoaded && locations.map((location)=>(
                            <option key={location.id} value={location.id} >{location.country} - {location.city}</option>
                        ))}
                    </select>
                    {formError
                        ? formError.map(el => (
                        <p key={el.context.label} className='register_error'>{el.context.label} : {el.message}</p> )
                        )
                        : null}
                    <button type='submit'>Créez un compte</button>
                </form>
           </div>
       </div>
    </div>
  );
}

export default Register