import React from 'react'
import '../style/GalleryCard.css'

function GalleryCard({title, img, tag}) {

  return (
      <div className='gallery--card--wrapper' >
        <div className="gallery--image--container">
          <img className='gallery--card--img' src= { img } alt="" />
        </div>
        <p className='gallery--card--text' >{ tag } - { title }</p>
      </div>
  )
}

export default GalleryCard
