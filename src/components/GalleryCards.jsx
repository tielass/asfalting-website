import React from 'react'
import { galleryImages } from "../helpers/ImageGallery";

function GalleryCards() {
  return (
    <div>
      <div>
        { galleryImages.map( image =>
        <img src= { image.img} alt="" />
        )}
        { galleryImages.map( image =>
        <p>{image.title}</p>
        )}
      </div>
    </div>
  )
}

export default GalleryCards
