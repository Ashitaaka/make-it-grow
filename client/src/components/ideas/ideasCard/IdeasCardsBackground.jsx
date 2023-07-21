import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import IdeasCard from "./IdeasCard";
import "./IdeasCard.css";
import { Link } from "react-router-dom";
import FilterBar from "../../filterBar/FilterBar";
import SearchContext from "../../../utils/context/SearchContext";

const IdeasCardsBackground = () => {
  const [ideas, setIdeas] = useState([]);
  const [filters, setFilters] = useState({
    categories: "",
    city: "",
    status: "",
  });

  useEffect(() => {
    axios
      .get(`/ideas/?fields=id,title,locations,status,categories,users`)
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  const { search, setSearch } = useContext(SearchContext);

  console.log(search);

  return (
    <div className="ideas_cards_container">
      <FilterBar ideas={ideas} setFilters={setFilters} filters={filters} />
      <div className="ideas_cards_background">
        {ideas &&
          ideas
            .filter(
              (idea) =>
                (!filters.city || filters.city === idea.city) &&
                (!filters.status || filters.status === idea.status) &&
                (!filters.categories ||
                  filters.categories === idea.categories[0])
            )
            .map(
              (idea, index) =>
                idea.id_status !== 8 && (
                  <Link
                    to={`/idea/${idea.idea_id}`}
                    className="card_background"
                    key={index}
                  >
                    <IdeasCard idea={idea} />
                  </Link>
                )
            )}
      </div>
    </div>
  );
};

export default IdeasCardsBackground;
