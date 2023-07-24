import React, { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import IdeasCard from "./IdeasCard";
import "./IdeasCard.css";
import { Link } from "react-router-dom";
import FilterBar from "../../filterBar/FilterBar";
import SearchContext from "../../../utils/context/SearchContext";
import { getAllIdeas } from "../../../services/httpServices";

const IdeasCardsBackground = () => {
  const [ideas, setIdeas] = useState([]);
  const [filters, setFilters] = useState({
    categories: "",
    city: "",
    status: "",
  });

  useEffect(() => {
    getAllIdeas()
      .then((res) => res.data)
      .then((data) => setIdeas(...[data]));
  }, []);

  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="ideas_cards_container">
      <FilterBar ideas={ideas} setFilters={setFilters} filters={filters} />
      <div className="ideas_cards_background">
        {ideas &&
          ideas
            .filter(
              (idea) =>
                (!search ||
                  idea.title.toLowerCase().includes(search.toLowerCase())) &&
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
                    className={
                      idea.id_status === 7
                        ? "card_background rejected"
                        : "card_background"
                    }
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
