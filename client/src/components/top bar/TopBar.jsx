import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
//import css
import './topBar.css'
//import assets
import mig_logo from '../../assets/logo_MIG.svg'
import search_icon from '../../assets/icons/search_icone.svg'
import notification_icon from '../../assets/icons/notification_icone.svg'


const TopBar = ({ clickedButton, setClickedButton }) => {

    const [ user, setUser ] = useState([]);
    const [ isLoaded, setIsLoaded ] = useState(false);

    const onSearch = (e) =>{
        console.log(e.target.value)
    }

    useEffect(()=>{
        axios.get(`http://localhost:5080/api/users/2`)
            .then((res) => res.data)
            .then((data) => {
                setUser(...data);
                setIsLoaded(true);
            })
    },[]);

    if(!isLoaded) return null;

  return (
    <div className='top_bar'>
        <Link 
            to={'/'}
            onClick={()=>setClickedButton('home')}
        >
            <img className="logo" src={mig_logo} alt="Make It Grow" />
        </Link>

        <div className="right_container">
            <div className="searchbar">
                <img className="search_icon" src={search_icon} alt="" />
                <input type="text" id="search_input" name="search_input" onKeyUp={onSearch} placeholder="Rechercher une idée" />
            </div>
            <Link 
                to={`/profile/${user.id}`}
                onClick={()=>setClickedButton('profile')}
            >
                <div className="personnal_profile">
                    <img className="notification_icon" src={notification_icon} alt="" />
                    <div className="profile_infos">
                        <img className='profile_picture' src={user.picture} alt="profile picture" />
                        <p className='profile_name'>{`${user.firstname} ${user.lastname}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default TopBar