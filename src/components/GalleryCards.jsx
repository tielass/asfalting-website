import React from 'react';
import GalleryCard from './GalleryCard';
import { galleryImages } from "../helpers/ImageGallery";
import '../style/GalleryCards.css'

function GalleryCards() {

  return (
    <div className='gallery--grid'>
        { galleryImages.map((image) => {
          return (
            <GalleryCard key={image.id} title={image.title} img={image.img} />
          );
        }) }
    </div>
  )
}

export default GalleryCards
