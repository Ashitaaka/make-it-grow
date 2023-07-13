import React from 'react'
import "./filterBar.css"

const FilterBar = ({ ideas, filters, setFilters }) => {

    //Getting all categories, locations and status available
    const allFilters = ideas.reduce(
        (accumulator, { categories, city, status }) =>{
            const allCategories = accumulator.categories;
            const allLocations = accumulator.cities;
            const allStatus = accumulator.status;

            if(!allCategories.includes(categories[0]) && status !== "rejeté"){
                allCategories.push(categories[0]);
            };

            if(!allLocations.includes(city) && status !== "rejeté"){
                allLocations.push(city);
            };

            if(!allStatus.includes(status) && status !== "rejeté"){
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


    const handleFiltersChange = (e) =>{
        const key = e.target.name;
        const value = e.target.value;

        setFilters({
            ...filters,
            [key] : value,
        })
    }

  return (
    <div className='filter_bar_container'>

        <form className='filter_form' onChange={handleFiltersChange}>

            <div className="filter_field">
                <select name="categories" id="categories-filter" defaultValue="">
                    <option value="">Toutes les catégories</option>
                    {allFilters &&
                    allFilters.categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="filter_field">
                <select name="city" id="locations-filter" defaultValue="">
                    <option value="">Tous les lieux</option>
                    {allFilters &&
                    allFilters.cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </div>

            <div className="filter_field">
                <select name="status" id="status-filter" defaultValue="">
                    <option value="">Tous les statuts</option>
                    {allFilters &&
                    allFilters.status.map((status, index) => (
                            <option key={index} value={status}>{status}</option>
                    ))}
                </select>
            </div>
            
        </form>

    </div>
  )
}

export default FilterBar