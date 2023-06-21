import React, { useState, useEffect} from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import './createIdea.css'

const CreateIdea = () => {

  
  const[title, setTitle] =useState("Titre de l'idée *");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const[choosenCategory, setChoosenCategory] = useState('')
  const [categorys, setCategory] = useState([]);
  const[filterCategorys, setFilterCategorys] = useState([])


  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const emptytheTitle = () => {
    if(title === "Titre de l'idée *"){
      setTitle("")
    }
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCategoryChange = (event) => {
    setChoosenCategory(event.target.value);
  };

  useEffect(()=>{
    axios.get(`http://localhost:5080/api/ideas/?fields=categories`)
        .then((res)  => res.data)
        .then((data)=> setCategory(data))
    },[])


  // Take all the categorys from the bd and create a new Array with no repeat categorys
  const noRepeatCategorys = []

  for (let i = 0; i < categorys.length; i++) {
    const valeur = categorys[i];
    if (!noRepeatCategorys.includes(valeur)) {
      noRepeatCategorys.push(valeur);
    }
  }

  console.log(noRepeatCategorys)

  

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
            <div className="arrow_down"></div>
            </div>
    </div>

          </div>

          <div className="section_categorie">
            <p className='categorie_name'>Catégorie</p>
            <label htmlFor="category"></label>
            <select id="category" value={choosenCategory} onChange={handleCategoryChange} >
              <option value="">Sélectionnez une catégorie</option>
              {noRepeatCategorys.map((category, index) => (

                < option  key={index} value={category.category}>{category.category}</option>
              ))}
            </select>
            
          </div>
        
          <div className="section_place">
            <p className='categorie_name'>Lieux</p>

          </div>

        </div>

      </div>
    </div>
  )
}

export default CreateIdea