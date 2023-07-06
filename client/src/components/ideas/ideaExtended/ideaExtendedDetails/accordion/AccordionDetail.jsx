import React, { useState, useEffect, useRef } from 'react';
import './accordion.css';
import Monochev from '../../../../../assets/icons/mono_chevrons_icone.svg';
import MonochevBlanc from '../../../../../assets/icons/mono_chevrons_icone_blanc.svg';

const AccordionDetail = ({ title, idea }) => {
  const [open, setOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);
  const contentContainerRef = useRef(null);

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
          <div
            className="categorie"
            style={{
              backgroundColor: open ? `var(${idea.color})` : 'transparent',
              border: open ? 'none' : `2px solid var(${idea.color})`,
            }}
          ></div>
          <h2>{title}</h2>
        </div>
        {open ? (
          <img
            src={MonochevBlanc}
            alt="Arrow"
            style={{
              backgroundColor: `var(${idea.color})`,
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
      <div
        ref={contentContainerRef}
        className="content_container"
        style={{ maxHeight }}
      >
        <div className="p-content">
          <h3>{idea.title}</h3>
          {idea.detail}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AccordionDetail;
