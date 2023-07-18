import React, { useState, createRef } from "react";
import ReactQuill from "react-quill";
import DOMPurify from "dompurify";

//import css
import "./accordion.css";
import "react-quill/dist/quill.snow.css";
//import assets
import Monochev from "../../../../../assets/icons/mono_chevrons_icone.svg";
import MonochevBlanc from "../../../../../assets/icons/mono_chevrons_icone_blanc.svg";

const AccordionRisk = ({
  title,
  idea,
  modificationAreOn,
  idearisk,
  setIdeaRisk,
}) => {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  let updateIdeaV2Risk = { idearisk };
  const contentContainer = createRef();
  // Secure HTML injection
  const cleanHTML = DOMPurify.sanitize(idea.risk);

  let onOpening = (e) => {
    setOpen(!open);
    setMaxHeight(maxHeight === 0 ? contentContainer.current.scrollHeight : 0);
  };

  const handleReactQuillChange = (content) => {
    setIdeaRisk(content);
  };
  return (
    <div className="accordion_container">
      {/* Header */}
      <div
        className="header"
        onClick={onOpening}
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
        {modificationAreOn ? null : open ? (
          <img
            src={MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: `var(${idea.color})`,
              transform: "rotate(270deg)",
            }}
          />
        ) : (
          <img
            src={Monochev}
            alt="Arrow"
            style={{
              backgroundColor: "var(--ultra-light-color)",
            }}
          />
        )}
      </div>
      {/* Content */}
      <div
        ref={contentContainer}
        className="content_container"
        style={
          modificationAreOn ? { height: "100%", padding: "2em" } : { maxHeight }
        }
      >
        {modificationAreOn ? (
          <ReactQuill
            theme="snow"
            value={idearisk}
            onChange={handleReactQuillChange}
          />
        ) : (
          <div
            className="p-content"
            dangerouslySetInnerHTML={{ __html: cleanHTML }}
          ></div>
        )}
      </div>
      <hr />
    </div>
  );
};
export default AccordionRisk;
