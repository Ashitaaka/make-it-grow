import React, { useState, createRef } from 'react'
import './accordion.css'

const Accordion = ({title, content}) => {


    // const [open, setOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState(0);
    const contentContainer = createRef();

    let onOpening = (e) =>{
        // setOpen(!open);
        maxHeight === 0 ? setMaxHeight(contentContainer.current.scrollHeight) : setMaxHeight(0) 
    }

  return (
    <div className='test'>
        <h4 className='accordion_header' onClick={onOpening}>{title}</h4>
        <p ref={contentContainer} className='content_container' style={{maxHeight}}>{content}</p>
    </div>
  )
}

export default Accordion