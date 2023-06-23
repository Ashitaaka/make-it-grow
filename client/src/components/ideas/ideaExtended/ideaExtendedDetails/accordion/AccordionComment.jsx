import React, { useState, createRef } from 'react';
//import css
import './accordion.css';
//import assets
import Monochev from '../../../../../assets/icons/mono_chevrons_icone.svg';
import MonochevBlanc from '../../../../../assets/icons/mono_chevrons_icone_blanc.svg';

const AccordionComment = ({ title, idea }) => {
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainer = createRef();

  let onOpening = (e) => {
    setOpen(!open);
    setMaxHeight(maxHeight === 0 ? contentContainer.current.scrollHeight : 0);
  };

  return (
    <div className="accordion_container">
      {/* Header */}
      <div
        className="header"
        onClick={onOpening}
        style={{
          backgroundColor: open
            ? `var(--ultra-light-color)`
            : `var(--background-color)`,
        }}>
        <div className="title">
          <div
            className="categorie"
            style={{
              backgroundColor: open ? `var(${idea.color})` : 'transparent',
              border: open ? 'none' : `2px solid var(${idea.color})`,
            }}></div>

          <h2>{title}</h2>
        </div>

        {open ? (
          <img
            src={MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: `var(${idea.content})`,
              transform: 'rotate(270deg)',
            }}
          />
        ) : (
          <img
            src={Monochev}
            alt="Arrow"
            style={{
              backgroundColor: 'var(--ultra-light-color)',
            }}
          />
        )}
      </div>
      {/* Content */}
      <div
        ref={contentContainer}
        className="content_container"
        style={{ maxHeight }}>
        <div className="p-content">{idea.risk}</div>
      </div>
    </div>
  );
};
export default AccordionComment;
