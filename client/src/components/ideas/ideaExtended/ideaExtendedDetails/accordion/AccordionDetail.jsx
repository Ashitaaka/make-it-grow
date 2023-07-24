import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";

//import components
import Monochev from "../../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../../assets/icons/mono_chevrons_icone_blanc.svg";
import {useTheme} from "../../../../../utils/context/ThemeContext"

//import CSS
import "react-quill/dist/quill.snow.css";
import "./accordion.css";

const AccordionDetail = ({
  title,
  idea,
  modificationAreOn,
  ideaDetail,
  setIdeaDetail,
}) => {

  //To know what's the actual color Theme ('dark' or 'light' mode)
  const { theme } = useTheme();

  const [open, setOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainerRef = useRef(null);

  // Secure HTML injection
  const cleanHTML = DOMPurify.sanitize(idea.detail);

  // modification value detail de l'idée

  const handleReactQuillChange = (content) => {
    setIdeaDetail(content);
  };

  useEffect(() => {
    const contentHeight = contentContainerRef.current.scrollHeight;
    setMaxHeight(open ? contentHeight : 0);
  }, [open]);

  const toggleAccordion = () => {
    setOpen((prevOpen) => !prevOpen);
  };


  return (
    <div className="accordion_container">
      <div
        className="header"
        onClick={toggleAccordion}
        style={{
          backgroundColor: `var(--ultra-light-color)`,
        }}
      >
        <div className="title">
          {modificationAreOn ? null : (
            <div
              className="categorie"
              style={{
                backgroundColor: open ? `var(${idea.color})` : "transparent",
                border: open ? "none" : `2px solid var(${idea.color})`,
              }}
            ></div>
          )}
          <h2>{title}</h2>
        </div>
        
        {modificationAreOn ? null : open ? 
          <img
            src={MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: `var(${idea.color})`,
              transform: "rotate(270deg)",
            }}
          />
         : 
          <img
            src={theme === 'light' ? Monochev : MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: "var(--ultra-light-color)",
            }}
          />
        }
      </div>
      <div
        ref={contentContainerRef}
        className="content_container"
        style={modificationAreOn ? { height: "100%" } : { maxHeight }}
      >
        <div className="p-content">
          {modificationAreOn ? (
            <ReactQuill
              theme="snow"
              value={ideaDetail}
              onChange={handleReactQuillChange}
            />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: cleanHTML }}></div>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AccordionDetail;
