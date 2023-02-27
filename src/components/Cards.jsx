import React from 'react'
import CardItem from './CardItem'
import '../style/Cards.css'
import Pernik from '../images/Asfalting01.jpg'
import Sofia from '../images/Asfalting02.jpg'

function Cards() {
  return (
    <div className='cards'>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="card__items">
            <CardItem
              src={ Pernik }
              text="Central street in Pernik"
              label="Pernik"
              path='/'
            />
            <CardItem
              src={ Sofia }
              text="Parking lot in the center of Sofia"
              label="Sofia parking lot"
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
