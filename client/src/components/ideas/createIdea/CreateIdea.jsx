import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactQuill from "react-quill"; //text editor
import "react-quill/dist/quill.snow.css"; //text editor css
import confetti from "canvas-confetti"; //confetti for button

import "./createIdea.css";
import PopUp from "./pop-up/PopUp";

const CreateIdea = ({ token }) => {
  // state for data
  const [title, setTitle] = useState("Titre de l'idée *");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [categorys, setCategory] = useState([]);
  const [choosenCategory, setChoosenCategory] = useState("");
  const [idChoosenCategory, setIdChoosenCategory] = useState({});
  const [ideaLocation, setIdeaLocation] = useState([]);
  const [choosenLocation, setChoosenLocation] = useState("");
  const [idChoosenLocation, setIdChoosenLocation] = useState({});

  // State for the texte area data
  const [ideaDetailsText, setIdeaDetailsText] = useState("");
  const [ideaImpactText, setIdeaImpactText] = useState("");
  const [ideaBenefitsText, setIdeaBenefitsText] = useState("");
  const [ideaRiskText, setIdeaRiskText] = useState("");

  // State for warning
  const [showMissingInfo, setshowMissingInfo] = useState(false);
  const [uncompleteIdeaDetailsText, setUncompleteIdeaDetailsText] =
    useState(false);
  const [uncompleteIdeaImpactText, setUncompleteIdeaImpactText] =
    useState(false);
  const [uncompleteIdeaBenefitsText, setUncompleteIdeaBenefitsText] =
    useState(false);
  const [uncompleteIdeaRiskText, setUncompleteIdeaRiskText] = useState(false);
  const [uncompleteDate, setUncompleteDate] = useState(false);
  const [uncompleteCategory, setUncompleteCategory] = useState(false);
  const [uncompleteLocation, setUncompleteLocation] = useState(false);
  const [uncompleteTitle, setUncompleteTitle] = useState(false);

  // state for the pop up section

  const [popUpIsActive, setPopUpIsActive] = useState(false);

  // Variable to check if date respect a delay of 30 days
  const actualDate = new Date();
  const minimumDelay = new Date(
    actualDate.getFullYear(),
    actualDate.getMonth(),
    actualDate.getDate() + 30
  );

  // counter text area
  const detailsQuillRef = useRef();
  const impactQuillRef = useRef();
  const benefitsQuillRef = useRef();
  const riskQuillRef = useRef();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setUncompleteTitle(false);
  };

  const emptytheTitle = () => {
    if (title === "Titre de l'idée *") {
      setTitle("");
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setUncompleteDate(false);
  };

  const handleCategoryChange = (event) => {
    setChoosenCategory(event.target.value);
    setUncompleteCategory(false);
  };

  const handleLocationChange = (event) => {
    setChoosenLocation(event.target.value);
    setUncompleteLocation(false);
  };

  useEffect(() => {
    axios
      .get(`/categories`)
      .then((res) => res.data)
      .then((data) => setCategory(data));
  }, []);

  useEffect(() => {
    axios
      .get(`/locations`)
      .then((res) => res.data)
      .then((data) => setIdeaLocation(data));
  }, []);

  // Take all the categorys from the bd and create a new Array with no repeat categorys
  const noRepeatCategorys = [];

  for (let i = 0; i < categorys.length; i++) {
    const valeur = categorys[i].category;
    if (!noRepeatCategorys.includes(valeur)) {
      noRepeatCategorys.push(valeur);
    }
  }

  //get the id of the category
  useEffect(() => {
    categorys &&
      setIdChoosenCategory(
        categorys.filter((el) => el.label === choosenCategory)
      );
  }, [choosenCategory]);

  // Take all the locations from the bd and create a new Array with no repeat locations
  const noRepeatLocations = [];

  for (let i = 0; i < ideaLocation.length; i++) {
    const valeur = ideaLocation[i].city;
    if (!noRepeatLocations.includes(valeur)) {
      noRepeatLocations.push(valeur);
    }
  }

  // get the id location

  useEffect(() => {
    ideaLocation &&
      setIdChoosenLocation(
        ideaLocation.filter((el) => el.city === choosenLocation)
      );
  }, [choosenLocation]);

  // handle pour texteArea

  const handleDetailsChange = (content) => {
    setIdeaDetailsText(content);
    setshowMissingInfo(false);
    setUncompleteIdeaDetailsText(false);
  };

  const handleImpactChange = (content) => {
    setIdeaImpactText(content);
    setshowMissingInfo(false);
    setUncompleteIdeaImpactText(false);
  };

  const handleBenefitsChange = (content) => {
    setIdeaBenefitsText(content);
    setshowMissingInfo(false);
    setUncompleteIdeaBenefitsText(false);
  };

  const handleRiskChange = (content) => {
    setIdeaRiskText(content);
    setshowMissingInfo(false);
    setUncompleteIdeaRiskText(false);
  };

  // option for react quill

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["link", "image", "video"],
  ];

  const editorStyle = {
    fontSize: "16px",
  };

  //On click Submit button
  const handleButtonClick = () => {
    if (
      detailsQuillRef.current.getEditor().getLength() > 200 &&
      impactQuillRef.current.getEditor().getLength() > 200 &&
      benefitsQuillRef.current.getEditor().getLength() > 200 &&
      riskQuillRef.current.getEditor().getLength() > 200 &&
      selectedDate >= minimumDelay &&
      choosenCategory !== "" &&
      choosenLocation !== "" &&
      title !== "" &&
      title !== "Titre de l'idée *"
    ) {
      const newIdea = {
        title: title,
        id_status: 1,
        deadline: selectedDate,
        detail: ideaDetailsText,
        risk: ideaImpactText,
        benefit: ideaBenefitsText,
        impact: ideaRiskText,
        is_closed: false,
        label: idChoosenCategory && idChoosenCategory[0].id,
        city: idChoosenLocation && idChoosenLocation[0].id,
        id_user: token && token.id,
        is_owner: 1,
        vote_value: 1,
      };

      // post the new Idea
      axios.post("/ideas", newIdea).then((response) => {
        if (response.status === 201) {
          confetti();
          setPopUpIsActive(true);
        }
      });
    } else {
      detailsQuillRef.current.getEditor().getLength() < 200
        ? setUncompleteIdeaDetailsText(true)
        : null;
      impactQuillRef.current.getEditor().getLength() < 200
        ? setUncompleteIdeaImpactText(true)
        : null;
      benefitsQuillRef.current.getEditor().getLength() < 200
        ? setUncompleteIdeaBenefitsText(true)
        : null;
      riskQuillRef.current.getEditor().getLength() < 200
        ? setUncompleteIdeaRiskText(true)
        : null;
      selectedDate < minimumDelay ? setUncompleteDate(true) : null;
      choosenCategory === "" ? setUncompleteCategory(true) : null;
      choosenLocation === "" ? setUncompleteLocation(true) : null;
      title === "" || title === "Titre de l'idée *"
        ? setUncompleteTitle(true)
        : null;

      setshowMissingInfo(true);
    }
  };

  return (
    <div className="create_idea_bckg">
      <div className="create_idea_background_form">
        <div className="title_form_section">
          <label htmlFor="title"></label>
          <input
            className={
              uncompleteTitle ? `title_form uncomplete_title` : "title_form "
            }
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            onClick={emptytheTitle}
          />
        </div>
        <div className="section_date_categorie_place">
          <div className="section_date">
            <p className="categorie_name">Dates de fin</p>
            <div>
              <div className="date_square_section">
                <label htmlFor="date"></label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  className={`form_date_picker ${
                    uncompleteDate ? "uncomplete" : ""
                  }`}
                />
              </div>
              {uncompleteDate ? (
                <p className="missing_info_section">
                  Prevoyez une deadline de minimum 3o jours
                </p>
              ) : null}
            </div>
          </div>
          <div className="section_categorie">
            <p className="categorie_name">Catégorie</p>
            <label htmlFor="category"></label>
            <select
              className={
                uncompleteCategory
                  ? "category_options uncomplete"
                  : "category_options"
              }
              id="category"
              value={choosenCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Sélectionnez une catégorie</option>
              {categorys.map((category, index) => (
                <option key={index} value={category.label}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
          <div className="section_place">
            <p className="categorie_name">Lieux</p>
            <label htmlFor="location"></label>
            <select
              className={
                uncompleteLocation
                  ? "location_options uncomplete"
                  : "location_options"
              }
              id="location"
              value={choosenLocation}
              onChange={handleLocationChange}
            >
              <option value="">Sélectionnez un lieu</option>
              {ideaLocation.map((city, index) => (
                <option key={index} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="quill_container">
          <div className="quill_section">
            <div className="title_section">
              <p className="idea_description">Les détails de l'idée</p>
              <div className="help_section">
                <p className="help_element">?</p>
                <div className="help_info">
                  <ul>
                    <li>
                      Quel problème ou besoin cette idée vise-t-elle à résoudre
                      ?
                    </li>
                    <br />
                    <li>
                      Quelle est la nature de cette idée (produit, service,
                      processus, etc.) ?
                    </li>
                    <br />
                    <li>
                      En quoi cette idée est-elle innovante ou différente des
                      approches existantes ?
                    </li>
                    <br />
                    <li>
                      Quels sont les objectifs spécifiques de cette idée ?
                    </li>
                    <br />
                    <li>
                      Comment cette idée peut-elle être mise en œuvre de manière
                      pratique ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ReactQuill
              ref={detailsQuillRef}
              className={`${
                uncompleteIdeaDetailsText ? "uncomplete" : "text_zone"
              }`}
              value={ideaDetailsText}
              onChange={handleDetailsChange}
              modules={{
                toolbar: toolbarOptions,
              }}
              style={editorStyle}
            />
            {detailsQuillRef.current &&
            201 - detailsQuillRef.current.getEditor().getLength() > 0 ? (
              <p className="letter_counter">
                encore{" "}
                {detailsQuillRef.current &&
                  201 - detailsQuillRef.current.getEditor().getLength()}{" "}
                caractères minimum <small>(min 200)</small>
              </p>
            ) : null}
          </div>
          <div className="quill_section">
            <div className="title_section">
              <p className="idea_description">Impact sur l'organisation</p>
              <div className="help_section">
                <p className="help_element">?</p>
                <div className="help_info">
                  <ul>
                    <li>
                      Comment cette idée pourrait-elle améliorer l'efficacité
                      opérationnelle de l'organisation ?
                    </li>
                    <br />
                    <li>
                      Quels domaines spécifiques de l'organisation pourraient
                      bénéficier de cette idée (marketing, finances, logistique,
                      etc.) ?
                    </li>
                    <br />
                    <li>
                      Comment cette idée pourrait-elle optimiser les processus
                      internes de l'organisation ?
                    </li>
                    <br />
                    <li>
                      Est-ce que cette idée aurait un impact sur la culture ou
                      la structure organisationnelle ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ReactQuill
              ref={impactQuillRef}
              className={`${
                uncompleteIdeaImpactText ? "uncomplete" : "text_zone"
              }`}
              value={ideaImpactText}
              onChange={handleImpactChange}
              modules={{
                toolbar: toolbarOptions,
              }}
              style={editorStyle}
            />
            {impactQuillRef.current &&
            201 - impactQuillRef.current.getEditor().getLength() > 0 ? (
              <p className="letter_counter">
                encore{" "}
                {impactQuillRef.current &&
                  201 - impactQuillRef.current.getEditor().getLength()}{" "}
                caractères minimum <small>(min 200)</small>
              </p>
            ) : null}
          </div>
          <div className="quill_section">
            <div className="title_section">
              <p className="idea_description">Bénéfices</p>
              <div className="help_section">
                <p className="help_element">?</p>
                <div className="help_info">
                  <ul>
                    <li>
                      Quels avantages concrets cette idée apporterait-elle à
                      l'organisation ?
                    </li>
                    <br />
                    <li>
                      Comment cette idée pourrait-elle accroître la satisfaction
                      des clients ou des utilisateurs ?
                    </li>
                    <br />
                    <li>
                      Pourrait-elle générer des économies de coûts ou améliorer
                      la rentabilité ?
                    </li>
                    <br />
                    <li>
                      Quelles nouvelles opportunités cette idée pourrait-elle
                      ouvrir pour l'organisation ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ReactQuill
              ref={benefitsQuillRef}
              className={`${
                uncompleteIdeaBenefitsText ? "uncomplete" : "text_zone"
              }`}
              value={ideaBenefitsText}
              onChange={handleBenefitsChange}
              modules={{
                toolbar: toolbarOptions,
              }}
              style={editorStyle}
            />
            {benefitsQuillRef.current &&
            201 - benefitsQuillRef.current.getEditor().getLength() > 0 ? (
              <p className="letter_counter">
                encore{" "}
                {benefitsQuillRef.current &&
                  201 - benefitsQuillRef.current.getEditor().getLength()}{" "}
                caractères minimum <small>(min 200)</small>
              </p>
            ) : null}
          </div>
          <div className="quill_section">
            <div className="title_section">
              <p className="idea_description">Risques potentiels</p>
              <div className="help_section">
                <p className="help_element">?</p>
                <div className="help_info">
                  <ul>
                    <li>
                      Quels sont les principaux obstacles ou défis à la mise en
                      œuvre de cette idée ?
                    </li>
                    <br />
                    <li>
                      Y a-t-il des contraintes financières, techniques ou
                      réglementaires à prendre en compte ?
                    </li>
                    <br />
                    <li>
                      Comment cette idée pourrait-elle affecter d'autres aspects
                      de l'organisation ?
                    </li>
                    <br />
                    <li>
                      Quels sont les risques potentiels en termes de réputation,
                      de confidentialité ou de sécurité ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <ReactQuill
              ref={riskQuillRef}
              className={`${
                uncompleteIdeaRiskText ? "uncomplete" : "text_zone"
              }`}
              value={ideaRiskText}
              onChange={handleRiskChange}
              modules={{
                toolbar: toolbarOptions,
              }}
              style={editorStyle}
            />
            {riskQuillRef.current &&
            201 - riskQuillRef.current.getEditor().getLength() > 0 ? (
              <p className="letter_counter">
                encore{" "}
                {riskQuillRef.current &&
                  201 - riskQuillRef.current.getEditor().getLength()}{" "}
                caractères minimum <small>(min 200)</small>
              </p>
            ) : null}
          </div>
        </div>
        <div className="submit_section">
          <button
            className="new_idea_submit_button"
            onClick={handleButtonClick}
          >
            Envoyer
          </button>
          {showMissingInfo ? (
            <p className="missing_info_section">
              Certains champs ne sont pas complet
            </p>
          ) : null}
        </div>
      </div>
      {popUpIsActive ? null : <PopUp /> }
    </div>
  );
};

export default CreateIdea;
