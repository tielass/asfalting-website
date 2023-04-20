import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { galleryImages } from '../helpers/ImageGallery'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import "../style/SingleProjectPage.css"

function SingleProjectPage() {

  const { id } = useParams()
  const image = galleryImages.find((img) => img.id === id);

  return (
    <div className='single--page--wrapper'>
      <Link className='single--page--link' to='/projects'>
        <ArrowBackIosNewOutlinedIcon className='svg'/>
      </Link>
      <div className="single--page--container">
        <h2 className='single--page--title'>{ image.title }</h2>
        <p className='project--description'>{image.description}</p>
        <div className='single--page--grid'>
          {image.img.map((imgSrc, index) => (
            <img key={index} src={imgSrc} alt={image.title} className='single--page--img'/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleProjectPage
