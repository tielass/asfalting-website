import React from 'react'
import '../style/GalleryCard.css'

function GalleryCard({title, img}) {

  return (
      <div className='gallery--card--wrapper' >
        <div className="gallery--image--container">
          <img className='gallery--card--img' src= { img } alt="" />
        </div>
        <p className='gallery--card--text' >{ title }</p>
      </div>
  )
}

export default GalleryCard
