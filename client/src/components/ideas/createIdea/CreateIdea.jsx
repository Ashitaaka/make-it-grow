import React, { useState, useEffect} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactQuill from 'react-quill'; //text editor
import 'react-quill/dist/quill.snow.css'; //text editor css


import './createIdea.css'

const CreateIdea = () => {

  
  const [title, setTitle] =useState("Titre de l'idée *");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [choosenCategory, setChoosenCategory] = useState('');
  const [categorys, setCategory] = useState([]);
  const [ideaLocation, setIdeaLocation] = useState([]);
  const [choosenLocation, setChoosenLocation] = useState('')
  const [ideaText, setIdeaText] = useState('')
  const [ideaImpactText, setIdeaImpactText] = useState('')
  const [ideaDetailsText, setIdeaDetailsText] = useState('')


  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  };

  const emptytheTitle = () => {
    if(title === "Titre de l'idée *"){
      setTitle("")
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event) => {
    setChoosenCategory(event.target.value);
  };
 
  const handleLocationChange = (event) => {
    setChoosenLocation(event.target.value);
  };

  const handleIdeaTextChange = (event) => {
    setIdeaText(event.target.value);
  };
  const handleIdeaImpactTextChange = (event) => {
    setIdeaImpactText(event.target.value);
  };
  const handleIdeaDetailsTextChange = (event) => {
    setIdeaDetailsText(event.target.value);
  };

  useEffect(()=>{
    axios.get(`http://localhost:5080/api/ideas/?fields=categories`)
        .then((res)  => res.data)
        .then((data)=> setCategory(data))
    },[])
  
  useEffect(()=>{
    axios.get(`http://localhost:5080/api/ideas/?fields=locations`)
        .then((res)  => res.data)
        .then((data)=> setIdeaLocation(data))
    },[])

  // Take all the categorys from the bd and create a new Array with no repeat categorys
  const noRepeatCategorys = []

  for (let i = 0; i < categorys.length; i++) {
    const valeur = categorys[i].category;
    if (!noRepeatCategorys.includes(valeur)) {
      noRepeatCategorys.push(valeur);
    }
  }
// Take all the locations from the bd and create a new Array with no repeat locations
  const noRepeatLocations = []

  for (let i = 0; i < ideaLocation.length; i++) {
    const valeur = ideaLocation[i].city;
    if (!noRepeatLocations.includes(valeur)) {
      noRepeatLocations.push(valeur);
    }
  }
  

  return (
    <div className='create_idea_bckg'>
      <div className="create_idea_background_form">
        <div className="title_form_section">
          <label htmlFor="title"></label>
          <input
            className={`title_form`}
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            onClick={emptytheTitle}
          />
        </div>
        <div className="section_date_categorie_place">
          <div className="section_date">
            <p className='categorie_name'>Dates de fin</p>
            <div>
              <div className="date_square_section">
               <label htmlFor="date"></label>
               <DatePicker
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className='form_date_picker'
                />
              </div>
            </div>
          </div>
          <div className="section_categorie">
              <p className='categorie_name'>Catégorie</p>
              <label htmlFor="category"></label>
              <select className='category_options' id="category" value={choosenCategory} onChange={handleCategoryChange} >
                <option value="">Sélectionnez une catégorie</option>
                {noRepeatCategorys.map((category, index) => (

                < option  key={index} value={category}>{category}</option>
                ))}
              </select>           
          </div>        
          <div className="section_place">
            <p className='categorie_name'>Lieux</p>
            <label htmlFor="location"></label>
            <select className='location_options' id="location" value={choosenLocation} onChange={handleLocationChange}>
              <option value="">Sélectionnez un lieu</option>
              {noRepeatLocations.map((city, index) => (
              < option  key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='quill_container'>
          <div className='quill_section'>
            <div className='title_section'>
            <p className='idea_description'>Les détails de l'idée</p>
            <div className='help_section'>
              <p className='help_element'>?</p>
              <p className='help_info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur fugiat, provident neque sint, consequatur odio, quae velit vero voluptatem praesentium! Ipsum aliquid sequi libero doloremque pariatur commodi obcaecati vel.</p>
            </div>
            </div>
            <ReactQuill className='text_zone' value={ideaDetailsText} onChange={handleIdeaDetailsTextChange}/>
            <p className='letter_counter'>encore 200 caractères <small>(min 200)</small></p>
          </div>
          <div className='quill_section'>
            <p className='idea_description'>Impact sur l'organisation</p>
            
            <ReactQuill className='text_zone' value={ideaImpactText} onChange={handleIdeaImpactTextChange}/>
            <p className='letter_counter'>encore 200 caractères <small>(min 200)</small></p>
          </div>
          <div className='quill_section'>
            <p className='idea_description'>Bénéfices</p>
            <ReactQuill className='text_zone' value={ideaText} onChange={handleIdeaTextChange}/>
            <p className='letter_counter'>encore 200 caractères <small>(min 200)</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateIdea;