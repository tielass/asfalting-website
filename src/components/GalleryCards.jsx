import React, {useState, useEffect} from 'react';
import GalleryCard from './GalleryCard';
import { galleryImages } from "../helpers/ImageGallery";
import '../style/GalleryCards.css'

function GalleryCards() {

  const [tag, setTag] = useState('all')
  const [filteredImages, setFilteredImages] = useState([])

  useEffect(() => {
    tag === 'all' ? setFilteredImages(galleryImages) : setFilteredImages( galleryImages.filter( image => image.tag === tag ))
  }, [tag])

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
