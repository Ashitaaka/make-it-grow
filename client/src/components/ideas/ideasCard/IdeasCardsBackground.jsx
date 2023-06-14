import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import IdeasCard from './IdeasCard'

import './ideasCard.css'


const IdeasCardsBackground = () => {

    const [ideas, setIdeas] = useState([])

    console.log(ideas)

    useEffect(()=>{
    axios.get(`http://localhost:5080/api/ideas/?fields=id,title,locations,status,categories,users`)
        .then((res)  => res.data)
        .then((data)=> setIdeas(data))
    },[])

   

  return (
    <div className='ideas_cards_background'>
        {ideas.map((idea, index) => (
            <IdeasCard idea={idea} key={index} />
        ))}
        
    </div>
  )
}

export default IdeasCardsBackground