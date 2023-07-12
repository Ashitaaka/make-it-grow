import React from 'react'
import "./filterBar.css"

const FilterBar = ({ ideas }) => {

    const ideasInformations = ideas.reduce(
        (accumulator, { categories, city, status }) =>{
            const allCategories = accumulator.categories;
            const allLocations = accumulator.cities;
            const allStatus = accumulator.status;

            if(!allCategories.includes(categories[0])){
                allCategories.push(categories[0]);
            };

            if(!allLocations.includes(city)){
                allLocations.push(city);
            };

            if(!allStatus.includes(status)){
                allStatus.push(status);
            };

            return {
                categories : allCategories,
                cities : allLocations,
                status : allStatus,
            }
        },
        { categories : [], cities : [], status : [] }
    );

    console.log(ideasInformations)
    const handleFilterCategories = () =>{
        
    }

    const handleFilterlocations = () =>{

    }

    const handleFilterStatus = () =>{

    }

  return (
    <div className='filter_bar_container'>
        <form className='filter_form' onChange={handleFilterCategories}>
            <label htmlFor="categories-filter">
            Filtrer par catégorie
                <select name="categories-filter" id="categories-filter">
                <option value="" disabled selected hidden>Sélectionner une catégorie</option>
                {ideasInformations &&
                ideasInformations.categories.map((category, index) => (
                     <option key={index} value={category}>{category}</option>
                ))}
                </select>
            </label>
        </form>
        <form className='filter_form' onChange={handleFilterlocations}>
            <label htmlFor="locations-filter">
            Filtrer par lieu
                <select name="locations-filter" id="locations-filter">
                <option value="" disabled selected hidden>Sélectionner un lieu</option>
                {ideasInformations &&
                ideasInformations.cities.map((city, index) => (
                     <option key={index} value={city}>{city}</option>
                ))}
                </select>
            </label>
        </form>
        <form className='filter_form' onChange={handleFilterStatus}>
            <label htmlFor="status-filter">
            Filtrer par lieu
                <select name="status-filter" id="status-filter">
                <option value="" disabled selected hidden>Sélectionner un statut</option>
                {ideasInformations &&
                ideasInformations.status.map((status, index) => (
                     <option key={index} value={status}>{status}</option>
                ))}
                </select>
            </label>
        </form>
    </div>
  )
}

export default FilterBar