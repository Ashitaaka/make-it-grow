import React, { useContext } from "react";
import search_icon from "../../assets/icons/search_icone.svg";
import SearchContext from "../../utils/context/SearchContext";

const SearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  //on changing search bar input
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="searchbar">
      <img className="search_icon" src={search_icon} alt="" />
      <input
        type="text"
        id="search_input"
        name="search_input"
        onKeyUp={onSearch}
        placeholder="Rechercher une idée"
      />
    </div>
  );
};

export default SearchBar;
