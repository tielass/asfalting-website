import React from 'react'
import { Link } from 'react-router-dom'
import { galleryImages } from "../helpers/ImageGallery";

function GalleryCard(props) {
  return (
    <Link>
      <div className='gallery--card--wrapper'>
        <img className='gallery--card--img' src="" alt="" />
        <p className='gallery--card--text'></p>
      </div>
    </Link>
  )
}

export default GalleryCard
