import React from 'react'
import './ideasCard.css'


const IdeasCard = ({idea}) => {

  return (
    <div className='card_background'>
        <div > 
        <p className={`card_categories ${idea.color}`} >
            {idea.category}</p>
        </div>
        <p className="card_title">
            {idea.title}
        </p>
        <div >
          <p className="card_city">{idea.city}</p>  
        </div>
        <div className="card_state_background">
            <div>
                <p className="card_state">{idea.status}</p>
            </div>
            <p className='card_number_day_left'>{`${idea.delay} days left`}</p>
        </div>

    </div>
  )
}

export default IdeasCard