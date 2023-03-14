import React from 'react'
import { Link } from 'react-router-dom'
import '../style/GalleryCard.css'

function GalleryCard({title, img}) {

  return (
    <Link className='gallery--card--link'>
      <div className='gallery--card--wrapper' >
        <div className="gallery--image--container">
          <img className='gallery--card--img' src= { img } alt="" />
        </div>
        <p className='gallery--card--text' >{ title }</p>
      </div>
    </Link>
  )
}

export default GalleryCard
